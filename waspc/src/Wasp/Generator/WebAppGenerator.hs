module Wasp.Generator.WebAppGenerator
  ( generateWebApp,
    waspNpmDeps,
  )
where

import Data.Aeson (object, (.=))
import Data.List (intercalate)
import Data.Maybe (fromMaybe)
import StrongPath
  ( Dir,
    Path',
    Rel,
    reldir,
    relfile,
    (</>),
  )
import Wasp.AppSpec (AppSpec)
import qualified Wasp.AppSpec as AS
import qualified Wasp.AppSpec.App as AS.App
import qualified Wasp.AppSpec.App.Dependency as AS.Dependency
import Wasp.AppSpec.Valid (Valid, ($^))
import qualified Wasp.AppSpec.Valid.AppSpec as VAS
import Wasp.Generator.ExternalCodeGenerator (generateExternalCodeDir)
import Wasp.Generator.FileDraft
import Wasp.Generator.Monad (Generator, GeneratorError (..), logAndThrowGeneratorError)
import Wasp.Generator.PackageJsonGenerator
  ( npmDepsToPackageJsonEntry,
    resolveNpmDeps,
  )
import qualified Wasp.Generator.WebAppGenerator.AuthG as AuthG
import Wasp.Generator.WebAppGenerator.Common
  ( asTmplFile,
    asWebAppFile,
    asWebAppSrcFile,
  )
import qualified Wasp.Generator.WebAppGenerator.Common as C
import qualified Wasp.Generator.WebAppGenerator.ExternalCodeGenerator as WebAppExternalCodeGenerator
import Wasp.Generator.WebAppGenerator.OperationsGenerator (genOperations)
import qualified Wasp.Generator.WebAppGenerator.RouterGenerator as RouterGenerator
import Wasp.Util ((<++>))

generateWebApp :: Valid AppSpec -> Generator [FileDraft]
generateWebApp spec = do
  sequence
    [ generateReadme,
      genPackageJson spec waspNpmDeps,
      generateGitignore,
      return $ C.mkTmplFd $ asTmplFile [relfile|netlify.toml|]
    ]
    <++> generatePublicDir spec
    <++> generateSrcDir spec
    <++> generateExternalCodeDir WebAppExternalCodeGenerator.generatorStrategy (AS.externalCodeFiles $^ spec)

generateReadme :: Generator FileDraft
generateReadme = return $ C.mkTmplFd $ asTmplFile [relfile|README.md|]

genPackageJson :: Valid AppSpec -> [AS.Dependency.Dependency] -> Generator FileDraft
genPackageJson spec waspDeps = do
  (resolvedWaspDeps, resolvedUserDeps) <-
    case resolveNpmDeps waspDeps userDeps of
      Right deps -> return deps
      Left depsAndErrors -> logAndThrowGeneratorError $ GenericGeneratorError $ intercalate " ; " $ map snd depsAndErrors

  return $
    C.mkTmplFdWithDstAndData
      (C.asTmplFile [relfile|package.json|])
      (C.asWebAppFile [relfile|package.json|])
      ( Just $
          object
            [ "appName" .= ((fst $^ VAS.getApp spec) :: String),
              "depsChunk" .= npmDepsToPackageJsonEntry (resolvedWaspDeps ++ resolvedUserDeps)
            ]
      )
  where
    userDeps :: [AS.Dependency.Dependency]
    userDeps = fromMaybe [] $ AS.App.dependencies $^ (snd <$> VAS.getApp spec)

waspNpmDeps :: [AS.Dependency.Dependency]
waspNpmDeps =
  AS.Dependency.fromList
    [ ("axios", "^0.21.1"),
      ("lodash", "^4.17.15"),
      ("react", "^16.12.0"),
      ("react-dom", "^16.12.0"),
      ("react-query", "^2.14.1"),
      ("react-router-dom", "^5.1.2"),
      ("react-scripts", "4.0.3"),
      ("uuid", "^3.4.0")
    ]

-- TODO: Also extract devDependencies like we did dependencies (waspNpmDeps).

generateGitignore :: Generator FileDraft
generateGitignore =
  return $
    C.mkTmplFdWithDst
      (asTmplFile [relfile|gitignore|])
      (asWebAppFile [relfile|.gitignore|])

generatePublicDir :: Valid AppSpec -> Generator [FileDraft]
generatePublicDir spec = do
  publicIndexHtmlFd <- generatePublicIndexHtml spec
  return $
    C.mkTmplFd (asTmplFile [relfile|public/favicon.ico|]) :
    publicIndexHtmlFd :
    ( let tmplData = object ["appName" .= (fst $^ VAS.getApp spec :: String)]
          processPublicTmpl path = C.mkTmplFdWithData (asTmplFile $ [reldir|public|] </> path) tmplData
       in processPublicTmpl
            <$> [ [relfile|manifest.json|]
                ]
    )

generatePublicIndexHtml :: Valid AppSpec -> Generator FileDraft
generatePublicIndexHtml spec =
  return $
    C.mkTmplFdWithDstAndData
      (asTmplFile [relfile|public/index.html|])
      targetPath
      (Just templateData)
  where
    targetPath = [relfile|public/index.html|]
    templateData =
      object
        [ "title" .= (AS.App.title $^ (snd <$> VAS.getApp spec) :: String),
          "head" .= (maybe "" (intercalate "\n") (AS.App.head $^ (snd <$> VAS.getApp spec)) :: String)
        ]

-- * Src dir

srcDir :: Path' (Rel C.WebAppRootDir) (Dir C.WebAppSrcDir)
srcDir = C.webAppSrcDirInWebAppRootDir

-- TODO(matija): Currently we also generate auth-specific parts in this file (e.g. token management),
-- although they are not used anywhere outside.
-- We could further "templatize" this file so only what is needed is generated.
--

-- | Generates api.js file which contains token management and configured api (e.g. axios) instance.
genApi :: FileDraft
genApi = C.mkTmplFd (C.asTmplFile [relfile|src/api.js|])

generateSrcDir :: Valid AppSpec -> Generator [FileDraft]
generateSrcDir spec = do
  routerFd <- RouterGenerator.generateRouter spec
  operationsFds <- genOperations spec
  authFds <- AuthG.genAuth spec

  return $
    generateLogo :
    routerFd :
    genApi :
    map
      processSrcTmpl
      [ [relfile|index.js|],
        [relfile|index.css|],
        [relfile|serviceWorker.js|],
        [relfile|config.js|],
        [relfile|queryCache.js|],
        [relfile|utils.js|]
      ]
      ++ operationsFds
      ++ authFds
  where
    generateLogo =
      C.mkTmplFdWithDstAndData
        (asTmplFile [relfile|src/logo.png|])
        (srcDir </> asWebAppSrcFile [relfile|logo.png|])
        Nothing
    processSrcTmpl path =
      C.mkTmplFdWithDst
        (asTmplFile $ [reldir|src|] </> path)
        (srcDir </> asWebAppSrcFile path)
