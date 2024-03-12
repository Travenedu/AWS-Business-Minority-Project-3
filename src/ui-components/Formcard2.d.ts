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
export declare type Formcard2OverridesProps = {
    Formcard2?: PrimitiveOverrideProps<FlexProps>;
    div38754227?: PrimitiveOverrideProps<FlexProps>;
    h5?: PrimitiveOverrideProps<TextProps>;
    h2?: PrimitiveOverrideProps<TextProps>;
    "card-content"?: PrimitiveOverrideProps<FlexProps>;
    div38754231?: PrimitiveOverrideProps<FlexProps>;
    "form-control input-style-138754232"?: PrimitiveOverrideProps<ViewProps>;
    "input.form-control38754233"?: PrimitiveOverrideProps<ViewProps>;
    "Email *38754234"?: PrimitiveOverrideProps<TextProps>;
    "form-control input-style-138754235"?: PrimitiveOverrideProps<ViewProps>;
    "input.form-control38754236"?: PrimitiveOverrideProps<ViewProps>;
    "Email *38754237"?: PrimitiveOverrideProps<TextProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    "custom-select38754239"?: PrimitiveOverrideProps<ViewProps>;
    select38754240?: PrimitiveOverrideProps<ViewProps>;
    option38754241?: PrimitiveOverrideProps<ViewProps>;
    Dropdown38754242?: PrimitiveOverrideProps<TextProps>;
    Vector38754243?: PrimitiveOverrideProps<IconProps>;
    "custom-select38754254"?: PrimitiveOverrideProps<ViewProps>;
    select38754255?: PrimitiveOverrideProps<ViewProps>;
    option38754256?: PrimitiveOverrideProps<ViewProps>;
    Dropdown38754257?: PrimitiveOverrideProps<TextProps>;
    Vector38754258?: PrimitiveOverrideProps<IconProps>;
    "form-control-textarea input-style-1"?: PrimitiveOverrideProps<ViewProps>;
    Message?: PrimitiveOverrideProps<TextProps>;
    "button.btn.primary-color"?: PrimitiveOverrideProps<FlexProps>;
    "btn-text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Formcard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Formcard2OverridesProps | undefined | null;
}>;
export default function Formcard2(props: Formcard2Props): React.ReactElement;
