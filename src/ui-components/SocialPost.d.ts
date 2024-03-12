/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type SocialPostOverridesProps = {
    SocialPost?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    "HUEntrepenuer Network - BasementBoy"?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Nikhil S"?: PrimitiveOverrideProps<TextProps>;
    "2nd December 2021"?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    MyIcon29766860?: MyIconProps;
    "I really loved the clothes that I was able to purchase from this brand. It was amazing quality, really thick, and I loved the way it fit on me . 10/10 would recommend to all of my friends!"?: PrimitiveOverrideProps<TextProps>;
    Share29766862?: PrimitiveOverrideProps<FlexProps>;
    Share29766863?: PrimitiveOverrideProps<TextProps>;
    MyIcon29766864?: MyIconProps;
    MyIcon29766865?: MyIconProps;
    MyIcon29766866?: MyIconProps;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Read more29766868"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon29766869?: MyIconProps;
    "Read more29766870"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SocialPostProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SocialPostOverridesProps | undefined | null;
}>;
export default function SocialPost(props: SocialPostProps): React.ReactElement;
