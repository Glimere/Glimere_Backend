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
import { ApparelCreateNestedManyWithoutBrandsInput } from "./ApparelCreateNestedManyWithoutBrandsInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { FollowingCreateNestedManyWithoutBrandsInput } from "./FollowingCreateNestedManyWithoutBrandsInput";

@InputType()
class BrandCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApparelCreateNestedManyWithoutBrandsInput,
  })
  @ValidateNested()
  @Type(() => ApparelCreateNestedManyWithoutBrandsInput)
  @IsOptional()
  @Field(() => ApparelCreateNestedManyWithoutBrandsInput, {
    nullable: true,
  })
  apparels?: ApparelCreateNestedManyWithoutBrandsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  color?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  desc?: string | null;

  @ApiProperty({
    required: false,
    type: () => FollowingCreateNestedManyWithoutBrandsInput,
  })
  @ValidateNested()
  @Type(() => FollowingCreateNestedManyWithoutBrandsInput)
  @IsOptional()
  @Field(() => FollowingCreateNestedManyWithoutBrandsInput, {
    nullable: true,
  })
  followings?: FollowingCreateNestedManyWithoutBrandsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  foundingdate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logo?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shortName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  website?: string | null;
}

export { BrandCreateInput as BrandCreateInput };