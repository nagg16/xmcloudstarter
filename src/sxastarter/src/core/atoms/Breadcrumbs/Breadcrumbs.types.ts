import { LinkField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type BreadcrumbProps = {
  fields: {
    data: {
      item: {
        NavigationTitle: TextField;
        isVisible?: boolean;
        Title: TextField;
        ancestors: Ancestors[];
        name: string;
        url: LinkField;
      };
    };
  };
};

export type Ancestors = {
  NavigationTitle: TextField;
  Title: TextField;
  name: string;
  url: LinkField;
};
