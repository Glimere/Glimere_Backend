import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ShippingAddressCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address_name" source="addressName" />
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <TextInput label="house_no" source="houseNo" />
        <TextInput label="nerarest_busstop" source="nerarestBusstop" />
        <NumberInput step={1} label="postal_code" source="postalCode" />
        <TextInput label="state" source="state" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};