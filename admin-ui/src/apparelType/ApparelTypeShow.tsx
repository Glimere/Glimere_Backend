import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { APPARELTYPE_TITLE_FIELD } from "./ApparelTypeTitle";
import { BRAND_TITLE_FIELD } from "../brand/BrandTitle";
import { CARTITEM_TITLE_FIELD } from "../cartItem/CartItemTitle";
import { MAINCATEGORY_TITLE_FIELD } from "../mainCategory/MainCategoryTitle";
import { WISHLISTITEMS_TITLE_FIELD } from "../wishlistItems/WishlistItemsTitle";
import { APPAREL_TITLE_FIELD } from "../apparel/ApparelTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ApparelTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Apparel"
          target="apparelTypeId"
          label="Apparels"
        >
          <Datagrid rowClick="show">
            <TextField label="apparel_desc" source="apparelDesc" />
            <TextField label="apparel_name" source="apparelName" />
            <TextField label="apparel_price" source="apparelPrice" />
            <ReferenceField
              label="apparel_type"
              source="appareltype.id"
              reference="ApparelType"
            >
              <TextField source={APPARELTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="brand" source="brand.id" reference="Brand">
              <TextField source={BRAND_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Cart_Items"
              source="cartitem.id"
              reference="CartItem"
            >
              <TextField source={CARTITEM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="discounted_price" source="discountedPrice" />
            <TextField label="discount_end_date" source="discountEndDate" />
            <TextField
              label="discount_percentage"
              source="discountPercentage"
            />
            <TextField label="discount_start_date" source="discountStartDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="is_discounted" source="isDiscounted" />
            <ReferenceField
              label="Main_category"
              source="maincategory.id"
              reference="MainCategory"
            >
              <TextField source={MAINCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wishlist_items"
              source="wishlistitems.id"
              reference="WishlistItems"
            >
              <TextField source={WISHLISTITEMS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Size"
          target="apparelTypeId"
          label="Sizes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Apparel"
              source="apparel.id"
              reference="Apparel"
            >
              <TextField source={APPAREL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Apparel_type"
              source="appareltype.id"
              reference="ApparelType"
            >
              <TextField source={APPARELTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="measurements" source="measurements" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};