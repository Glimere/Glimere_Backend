/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsDate,
  IsBoolean,
} from "class-validator";
import { ApparelTypeWhereUniqueInput } from "../../apparelType/base/ApparelTypeWhereUniqueInput";
import { Type } from "class-transformer";
import { BrandWhereUniqueInput } from "../../brand/base/BrandWhereUniqueInput";
import { CartItemWhereUniqueInput } from "../../cartItem/base/CartItemWhereUniqueInput";
import { Decimal } from "decimal.js";
import { MainCategoryWhereUniqueInput } from "../../mainCategory/base/MainCategoryWhereUniqueInput";
import { MaterialUpdateManyWithoutApparelsInput } from "./MaterialUpdateManyWithoutApparelsInput";
import { ModelUpdateManyWithoutApparelsInput } from "./ModelUpdateManyWithoutApparelsInput";
import { ReviewUpdateManyWithoutApparelsInput } from "./ReviewUpdateManyWithoutApparelsInput";
import { SizeUpdateManyWithoutApparelsInput } from "./SizeUpdateManyWithoutApparelsInput";
import { SubCategoryUpdateManyWithoutApparelsInput } from "./SubCategoryUpdateManyWithoutApparelsInput";
import { SubSubcategoryUpdateManyWithoutApparelsInput } from "./SubSubcategoryUpdateManyWithoutApparelsInput";
import { WishlistItemsWhereUniqueInput } from "../../wishlistItems/base/WishlistItemsWhereUniqueInput";

@InputType()
class ApparelUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  apparelDesc?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  apparelName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  apparelPrice?: number | null;

  @ApiProperty({
    required: false,
    type: () => ApparelTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApparelTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ApparelTypeWhereUniqueInput, {
    nullable: true,
  })
  apparelType?: ApparelTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BrandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrandWhereUniqueInput)
  @IsOptional()
  @Field(() => BrandWhereUniqueInput, {
    nullable: true,
  })
  brand?: BrandWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CartItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CartItemWhereUniqueInput)
  @IsOptional()
  @Field(() => CartItemWhereUniqueInput, {
    nullable: true,
  })
  cartItem?: CartItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  discountedPrice?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  discountEndDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  discountPercentage?: Decimal | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  discountStartDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isDiscounted?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => MainCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MainCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => MainCategoryWhereUniqueInput, {
    nullable: true,
  })
  mainCategory?: MainCategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MaterialUpdateManyWithoutApparelsInput,
  })
  @ValidateNested()
  @Type(() => MaterialUpdateManyWithoutApparelsInput)
  @IsOptional()
  @Field(() => MaterialUpdateManyWithoutApparelsInput, {
    nullable: true,
  })
  materials?: MaterialUpdateManyWithoutApparelsInput;

  @ApiProperty({
    required: false,
    type: () => ModelUpdateManyWithoutApparelsInput,
  })
  @ValidateNested()
  @Type(() => ModelUpdateManyWithoutApparelsInput)
  @IsOptional()
  @Field(() => ModelUpdateManyWithoutApparelsInput, {
    nullable: true,
  })
  models?: ModelUpdateManyWithoutApparelsInput;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutApparelsInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutApparelsInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutApparelsInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutApparelsInput;

  @ApiProperty({
    required: false,
    type: () => SizeUpdateManyWithoutApparelsInput,
  })
  @ValidateNested()
  @Type(() => SizeUpdateManyWithoutApparelsInput)
  @IsOptional()
  @Field(() => SizeUpdateManyWithoutApparelsInput, {
    nullable: true,
  })
  sizes?: SizeUpdateManyWithoutApparelsInput;

  @ApiProperty({
    required: false,
    type: () => SubCategoryUpdateManyWithoutApparelsInput,
  })
  @ValidateNested()
  @Type(() => SubCategoryUpdateManyWithoutApparelsInput)
  @IsOptional()
  @Field(() => SubCategoryUpdateManyWithoutApparelsInput, {
    nullable: true,
  })
  subCategories?: SubCategoryUpdateManyWithoutApparelsInput;

  @ApiProperty({
    required: false,
    type: () => SubSubcategoryUpdateManyWithoutApparelsInput,
  })
  @ValidateNested()
  @Type(() => SubSubcategoryUpdateManyWithoutApparelsInput)
  @IsOptional()
  @Field(() => SubSubcategoryUpdateManyWithoutApparelsInput, {
    nullable: true,
  })
  subSubcategories?: SubSubcategoryUpdateManyWithoutApparelsInput;

  @ApiProperty({
    required: false,
    type: () => WishlistItemsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WishlistItemsWhereUniqueInput)
  @IsOptional()
  @Field(() => WishlistItemsWhereUniqueInput, {
    nullable: true,
  })
  wishlistItems?: WishlistItemsWhereUniqueInput | null;
}

export { ApparelUpdateInput as ApparelUpdateInput };