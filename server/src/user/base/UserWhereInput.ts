/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CardListRelationFilter } from "../../card/base/CardListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CartListRelationFilter } from "../../cart/base/CartListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowingListRelationFilter } from "../../following/base/FollowingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../../review/base/ReviewListRelationFilter";
import { ShippingAddressListRelationFilter } from "../../shippingAddress/base/ShippingAddressListRelationFilter";
import { SizeListRelationFilter } from "../../size/base/SizeListRelationFilter";
import { WishlistListRelationFilter } from "../../wishlist/base/WishlistListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CardListRelationFilter)
  @IsOptional()
  @Field(() => CardListRelationFilter, {
    nullable: true,
  })
  cards?: CardListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CartListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CartListRelationFilter)
  @IsOptional()
  @Field(() => CartListRelationFilter, {
    nullable: true,
  })
  carts?: CartListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FollowingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FollowingListRelationFilter)
  @IsOptional()
  @Field(() => FollowingListRelationFilter, {
    nullable: true,
  })
  followings?: FollowingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ReviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReviewListRelationFilter)
  @IsOptional()
  @Field(() => ReviewListRelationFilter, {
    nullable: true,
  })
  reviews?: ReviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ShippingAddressListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ShippingAddressListRelationFilter)
  @IsOptional()
  @Field(() => ShippingAddressListRelationFilter, {
    nullable: true,
  })
  shippingAddress?: ShippingAddressListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SizeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SizeListRelationFilter)
  @IsOptional()
  @Field(() => SizeListRelationFilter, {
    nullable: true,
  })
  sizes?: SizeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => WishlistListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WishlistListRelationFilter)
  @IsOptional()
  @Field(() => WishlistListRelationFilter, {
    nullable: true,
  })
  wishlists?: WishlistListRelationFilter;
}

export { UserWhereInput as UserWhereInput };