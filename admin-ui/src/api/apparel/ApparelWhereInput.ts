import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ApparelTypeWhereUniqueInput } from "../apparelType/ApparelTypeWhereUniqueInput";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CartItemWhereUniqueInput } from "../cartItem/CartItemWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MainCategoryWhereUniqueInput } from "../mainCategory/MainCategoryWhereUniqueInput";
import { MaterialListRelationFilter } from "../material/MaterialListRelationFilter";
import { ModelListRelationFilter } from "../model/ModelListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { SizeListRelationFilter } from "../size/SizeListRelationFilter";
import { SubCategoryListRelationFilter } from "../subCategory/SubCategoryListRelationFilter";
import { SubSubcategoryListRelationFilter } from "../subSubcategory/SubSubcategoryListRelationFilter";
import { WishlistItemsWhereUniqueInput } from "../wishlistItems/WishlistItemsWhereUniqueInput";

export type ApparelWhereInput = {
  apparelDesc?: StringNullableFilter;
  apparelName?: StringNullableFilter;
  apparelPrice?: FloatNullableFilter;
  apparelType?: ApparelTypeWhereUniqueInput;
  brand?: BrandWhereUniqueInput;
  cartItem?: CartItemWhereUniqueInput;
  discountedPrice?: FloatNullableFilter;
  discountEndDate?: DateTimeNullableFilter;
  discountPercentage?: DecimalNullableFilter;
  discountStartDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isDiscounted?: BooleanNullableFilter;
  mainCategory?: MainCategoryWhereUniqueInput;
  materials?: MaterialListRelationFilter;
  models?: ModelListRelationFilter;
  reviews?: ReviewListRelationFilter;
  sizes?: SizeListRelationFilter;
  subCategories?: SubCategoryListRelationFilter;
  subSubcategories?: SubSubcategoryListRelationFilter;
  wishlistItems?: WishlistItemsWhereUniqueInput;
};