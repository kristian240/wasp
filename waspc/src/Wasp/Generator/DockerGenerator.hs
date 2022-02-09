{-# LANGUAGE TypeApplications #-}

module Wasp.Generator.DockerGenerator
  ( genDockerFiles,
  )
where

import Data.Aeson (object, (.=))
import StrongPath (File', Path', Rel, relfile)
import Wasp.AppSpec (AppSpec)
import qualified Wasp.AppSpec as AS
import Wasp.AppSpec.Valid (Valid, (<$^^>))
import Wasp.Generator.Common (ProjectRootDir)
import Wasp.Generator.FileDraft (FileDraft, createTemplateFileDraft)
import Wasp.Generator.Monad (Generator)
import Wasp.Generator.Templates (TemplatesDir)

genDockerFiles :: Valid AppSpec -> Generator [FileDraft]
genDockerFiles spec = sequence [genDockerfile spec, genDockerignore spec]

-- TODO: Inject paths to server and db files/dirs, right now they are hardcoded in the templates.
genDockerfile :: Valid AppSpec -> Generator FileDraft
genDockerfile spec =
  return $
    createTemplateFileDraft
      ([relfile|Dockerfile|] :: Path' (Rel ProjectRootDir) File')
      ([relfile|Dockerfile|] :: Path' (Rel TemplatesDir) File')
      ( Just $
          object
            [ "usingPrisma" .= not (null $ AS.getEntities <$^^> spec)
            ]
      )

genDockerignore :: Valid AppSpec -> Generator FileDraft
genDockerignore _ =
  return $
    createTemplateFileDraft
      ([relfile|.dockerignore|] :: Path' (Rel ProjectRootDir) File')
      ([relfile|dockerignore|] :: Path' (Rel TemplatesDir) File')
      Nothing
