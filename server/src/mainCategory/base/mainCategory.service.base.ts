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
  MainCategory, // @ts-ignore
  Apparel, // @ts-ignore
  SubCategory,
} from "@prisma/client";

export class MainCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MainCategoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryCountArgs>
  ): Promise<number> {
    return this.prisma.mainCategory.count(args);
  }

  async mainCategories<T extends Prisma.MainCategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryFindManyArgs>
  ): Promise<MainCategory[]> {
    return this.prisma.mainCategory.findMany(args);
  }
  async mainCategory<T extends Prisma.MainCategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryFindUniqueArgs>
  ): Promise<MainCategory | null> {
    return this.prisma.mainCategory.findUnique(args);
  }
  async createMainCategory<T extends Prisma.MainCategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryCreateArgs>
  ): Promise<MainCategory> {
    return this.prisma.mainCategory.create<T>(args);
  }
  async updateMainCategory<T extends Prisma.MainCategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryUpdateArgs>
  ): Promise<MainCategory> {
    return this.prisma.mainCategory.update<T>(args);
  }
  async deleteMainCategory<T extends Prisma.MainCategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryDeleteArgs>
  ): Promise<MainCategory> {
    return this.prisma.mainCategory.delete(args);
  }

  async findApparels(
    parentId: string,
    args: Prisma.ApparelFindManyArgs
  ): Promise<Apparel[]> {
    return this.prisma.mainCategory
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .apparels(args);
  }

  async findSubCategory(
    parentId: string,
    args: Prisma.SubCategoryFindManyArgs
  ): Promise<SubCategory[]> {
    return this.prisma.mainCategory
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .subCategory(args);
  }
}