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
export declare type Formcard1OverridesProps = {
    Formcard1?: PrimitiveOverrideProps<FlexProps>;
    media?: PrimitiveOverrideProps<ViewProps>;
    cover?: PrimitiveOverrideProps<ViewProps>;
    div?: PrimitiveOverrideProps<FlexProps>;
    h3?: PrimitiveOverrideProps<TextProps>;
    "card-content"?: PrimitiveOverrideProps<FlexProps>;
    "form-group38754180"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754181"?: PrimitiveOverrideProps<TextProps>;
    "form-control input-style-138754182"?: PrimitiveOverrideProps<ViewProps>;
    "input.form-control38754183"?: PrimitiveOverrideProps<ViewProps>;
    "Email *38754184"?: PrimitiveOverrideProps<TextProps>;
    "form-group38754185"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754186"?: PrimitiveOverrideProps<TextProps>;
    "form-control input-style-138754187"?: PrimitiveOverrideProps<ViewProps>;
    "input.form-control38754188"?: PrimitiveOverrideProps<ViewProps>;
    "Email *38754189"?: PrimitiveOverrideProps<TextProps>;
    "form-group-custom-select38754190"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754191"?: PrimitiveOverrideProps<TextProps>;
    "custom-select38754192"?: PrimitiveOverrideProps<ViewProps>;
    select38754193?: PrimitiveOverrideProps<ViewProps>;
    option38754194?: PrimitiveOverrideProps<ViewProps>;
    Dropdown38754195?: PrimitiveOverrideProps<TextProps>;
    Vector38754196?: PrimitiveOverrideProps<IconProps>;
    "form-group-custom-select38754207"?: PrimitiveOverrideProps<ViewProps>;
    "form-control38754208"?: PrimitiveOverrideProps<TextProps>;
    "custom-select38754209"?: PrimitiveOverrideProps<ViewProps>;
    select38754210?: PrimitiveOverrideProps<ViewProps>;
    option38754211?: PrimitiveOverrideProps<ViewProps>;
    Dropdown38754212?: PrimitiveOverrideProps<TextProps>;
    Vector38754213?: PrimitiveOverrideProps<IconProps>;
    "button.btn.primary-color"?: PrimitiveOverrideProps<FlexProps>;
    "btn-text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Formcard1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Formcard1OverridesProps | undefined | null;
}>;
export default function Formcard1(props: Formcard1Props): React.ReactElement;
