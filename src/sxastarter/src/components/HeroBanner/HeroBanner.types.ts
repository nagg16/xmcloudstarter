import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  LinkField,
  RichTextField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

export type HeroBannerProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  fields: {
    data: {
      dataSource: {
        earmark?: {
          jsonValue: TextField;
        };
        title?: {
          jsonValue: TextField;
        };
        description?: {
          jsonValue: RichTextField;
        };
        image?: {
          jsonValue: ImageField;
        };
        video?: {
          jsonValue: ImageField;
        };
        primaryCta?: {
          jsonValue: LinkField;
        };
        primaryCTAIcon?: {
          jsonValue: ImageField;
        };
        primaryCTAIconPosition?: {
          jsonValue: Field<string>;
        };
        primaryCTAVariant?: {
          jsonValue: Field<string>;
        };
        secondaryCta?: {
          jsonValue: LinkField;
        };
        secondaryCTAIcon?: {
          jsonValue: ImageField;
        };
        secondaryCTAIconPosition?: {
          jsonValue: Field<string>;
        };
        secondaryCTAVariant?: {
          jsonValue: Field<string>;
        };
      };
    };
  };
  params: ComponentParams;
};
