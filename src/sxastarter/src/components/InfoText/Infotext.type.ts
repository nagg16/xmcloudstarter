import {
  ComponentParams,
  ComponentRendering,
  RichTextField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

export type InfoTextProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  fields?: {
    Earmark?: TextField;
    Description?: RichTextField;
    Description2?: RichTextField;
    LongTitle?: TextField;
    price?: TextField;
    titleTag?: string;
    subtitleTag?: string;
  };
  params: ComponentParams;
};
