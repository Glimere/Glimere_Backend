/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Card } from "./Card";
import { CardCountArgs } from "./CardCountArgs";
import { CardFindManyArgs } from "./CardFindManyArgs";
import { CardFindUniqueArgs } from "./CardFindUniqueArgs";
import { CreateCardArgs } from "./CreateCardArgs";
import { UpdateCardArgs } from "./UpdateCardArgs";
import { DeleteCardArgs } from "./DeleteCardArgs";
import { User } from "../../user/base/User";
import { CardService } from "../card.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Card)
export class CardResolverBase {
  constructor(
    protected readonly service: CardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Card",
    action: "read",
    possession: "any",
  })
  async _cardsMeta(
    @graphql.Args() args: CardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Card])
  @nestAccessControl.UseRoles({
    resource: "Card",
    action: "read",
    possession: "any",
  })
  async cards(@graphql.Args() args: CardFindManyArgs): Promise<Card[]> {
    return this.service.cards(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Card, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Card",
    action: "read",
    possession: "own",
  })
  async card(@graphql.Args() args: CardFindUniqueArgs): Promise<Card | null> {
    const result = await this.service.card(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Card)
  @nestAccessControl.UseRoles({
    resource: "Card",
    action: "create",
    possession: "any",
  })
  async createCard(@graphql.Args() args: CreateCardArgs): Promise<Card> {
    return await this.service.createCard({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Card)
  @nestAccessControl.UseRoles({
    resource: "Card",
    action: "update",
    possession: "any",
  })
  async updateCard(@graphql.Args() args: UpdateCardArgs): Promise<Card | null> {
    try {
      return await this.service.updateCard({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Card)
  @nestAccessControl.UseRoles({
    resource: "Card",
    action: "delete",
    possession: "any",
  })
  async deleteCard(@graphql.Args() args: DeleteCardArgs): Promise<Card | null> {
    try {
      return await this.service.deleteCard(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Card): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}