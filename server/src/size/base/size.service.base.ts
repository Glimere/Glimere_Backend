/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Size, // @ts-ignore
  Apparel, // @ts-ignore
  ApparelType, // @ts-ignore
  User,
} from "@prisma/client";

export class SizeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SizeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SizeCountArgs>
  ): Promise<number> {
    return this.prisma.size.count(args);
  }

  async sizes<T extends Prisma.SizeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SizeFindManyArgs>
  ): Promise<Size[]> {
    return this.prisma.size.findMany(args);
  }
  async size<T extends Prisma.SizeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SizeFindUniqueArgs>
  ): Promise<Size | null> {
    return this.prisma.size.findUnique(args);
  }
  async createSize<T extends Prisma.SizeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SizeCreateArgs>
  ): Promise<Size> {
    return this.prisma.size.create<T>(args);
  }
  async updateSize<T extends Prisma.SizeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SizeUpdateArgs>
  ): Promise<Size> {
    return this.prisma.size.update<T>(args);
  }
  async deleteSize<T extends Prisma.SizeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SizeDeleteArgs>
  ): Promise<Size> {
    return this.prisma.size.delete(args);
  }

  async getApparel(parentId: string): Promise<Apparel | null> {
    return this.prisma.size
      .findUnique({
        where: { id: parentId },
      })
      .apparel();
  }

  async getApparelType(parentId: string): Promise<ApparelType | null> {
    return this.prisma.size
      .findUnique({
        where: { id: parentId },
      })
      .apparelType();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.size
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}