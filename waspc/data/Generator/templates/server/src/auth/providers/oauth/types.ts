{{={= =}=}}

import { PrismaClient } from '@prisma/client'

import { contextWithUserEntity } from '../../utils.js'
import { type {= userEntityName =} } from '../../../entities/index.js'

export type OAuthConfig = {
    clientID?: string;
    clientSecret?: string;
    scope?: string[];
}

export type UserDefinedConfigFn = () => { [key: string]: any }

export type GetUserFn = (
    context: typeof contextWithUserEntity & { prisma: PrismaClient },
    args: { profile: { [key: string]: any } },
) => Promise<{= userEntityName =}>
