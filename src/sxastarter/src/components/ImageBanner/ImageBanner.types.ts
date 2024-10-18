import { ImageField, RichTextField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type Data = {
  data: {
    earmark?: TextField;
    title?: TextField;
    description?: RichTextField;
    image?: { jsonValue?: ImageField };
    video?: { jsonValue?: { value: string } };
    primarycta?: { jsonValue?: { value: { href: string; text: string } } };
    secondarycta?: { jsonValue?: { value: { href: string; text: string } } };
  };
};
