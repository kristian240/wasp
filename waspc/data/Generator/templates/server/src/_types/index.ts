{{={= =}=}}
import { type Expand } from "../universal/types.js";
import { type Request, type Response } from 'express'
import { type ParamsDictionary as ExpressParams, type Query as ExpressQuery } from 'express-serve-static-core'
import prisma from "../dbClient.js"
{=# isAuthEnabled =}
import { type {= userEntityName =} } from "../entities"
{=/ isAuthEnabled =}
import { type _Entity } from "./taggedEntities"

export * from "./taggedEntities"

export type Query<Entities extends _Entity[], Input, Output> = Operation<Entities, Input, Output>

export type Action<Entities extends _Entity[], Input, Output> = Operation<Entities, Input, Output>

{=# isAuthEnabled =}
export type AuthenticatedQuery<Entities extends _Entity[], Input, Output> = 
  AuthenticatedOperation<Entities, Input, Output>

export type AuthenticatedAction<Entities extends _Entity[], Input, Output> = 
  AuthenticatedOperation<Entities, Input, Output>

type AuthenticatedOperation<Entities extends _Entity[], Input, Output> = (
  args: Input,
  context: ContextWithUser<Entities>,
) => Promise<Output>

export type AuthenticatedApi<
  Entities extends _Entity[],
  Params extends ExpressParams,
  ResBody,
  ReqBody,
  ReqQuery extends ExpressQuery,
  Locals extends Record<string, any>
> = (
  req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody, Locals>,
  context: ContextWithUser<Entities>,
) => void

{=/ isAuthEnabled =}
type Operation<Entities extends _Entity[], Input, Output> = (
  args: Input,
  context: Context<Entities>,
) => Promise<Output>

export type Api<
  Entities extends _Entity[],
  Params extends ExpressParams,
  ResBody,
  ReqBody,
  ReqQuery extends ExpressQuery,
  Locals extends Record<string, any>
> = (
  req: Request<Params, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody, Locals>,
  context: Context<Entities>,
) => void

type EntityMap<Entities extends _Entity[]> = {
  [EntityName in Entities[number]["_entityName"]]: PrismaDelegate[EntityName]
}

type PrismaDelegate = {
  {=# entities =}
  "{= name =}": typeof prisma.{= prismaIdentifier =},
  {=/ entities =}
}

type Context<Entities extends _Entity[]> = Expand<{
  entities: Expand<EntityMap<Entities>>
}>

{=# isAuthEnabled =}
type ContextWithUser<Entities extends _Entity[]> = Expand<Context<Entities> & { user: SanitizedUser}>

// TODO: This type must match the logic in core/auth.js (if we remove the
// password field from the object there, we must do the same here). Ideally,
// these two things would live in the same place:
// https://github.com/wasp-lang/wasp/issues/965
export type SanitizedUser = Omit<{= userEntityName =}, 'password'>
{=/ isAuthEnabled =}