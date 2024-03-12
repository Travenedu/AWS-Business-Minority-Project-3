/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Formcard3OverridesProps = {
    Formcard3?: PrimitiveOverrideProps<FlexProps>;
    h3?: PrimitiveOverrideProps<TextProps>;
    "card-content"?: PrimitiveOverrideProps<FlexProps>;
    "form-group38754276"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754277"?: PrimitiveOverrideProps<TextProps>;
    "form-control input-style-138754278"?: PrimitiveOverrideProps<ViewProps>;
    "input.form-control38754279"?: PrimitiveOverrideProps<ViewProps>;
    "Email *38754280"?: PrimitiveOverrideProps<TextProps>;
    "form-group38754281"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754282"?: PrimitiveOverrideProps<TextProps>;
    "form-control input-style-138754283"?: PrimitiveOverrideProps<ViewProps>;
    "input.form-control38754284"?: PrimitiveOverrideProps<ViewProps>;
    "Email *38754285"?: PrimitiveOverrideProps<TextProps>;
    "form-group-custom-select38754286"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754287"?: PrimitiveOverrideProps<TextProps>;
    "custom-select38754288"?: PrimitiveOverrideProps<ViewProps>;
    select38754289?: PrimitiveOverrideProps<ViewProps>;
    option38754290?: PrimitiveOverrideProps<ViewProps>;
    Dropdown38754291?: PrimitiveOverrideProps<TextProps>;
    Vector38754292?: PrimitiveOverrideProps<IconProps>;
    "form-group-custom-select38754303"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754304"?: PrimitiveOverrideProps<TextProps>;
    "custom-select38754305"?: PrimitiveOverrideProps<ViewProps>;
    select38754306?: PrimitiveOverrideProps<ViewProps>;
    option38754307?: PrimitiveOverrideProps<ViewProps>;
    Dropdown38754308?: PrimitiveOverrideProps<TextProps>;
    Vector38754309?: PrimitiveOverrideProps<IconProps>;
    "button.btn.primary-color"?: PrimitiveOverrideProps<FlexProps>;
    "btn-text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Formcard3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Formcard3OverridesProps | undefined | null;
}>;
export default function Formcard3(props: Formcard3Props): React.ReactElement;
