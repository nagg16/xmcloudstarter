import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

type DamImageField = ImageField & {
  value?: ImageItem & {
    asset?: {
      assetType: string;
      createDate: string | null;
      description: string | null;
      id: string;
      name: string;
      publishDate: string | null;
      updateDate: string | null;
      metaproperties: {
        Asset_Subtype: string[];
        Asset_Type: string[];
        Channel: string[];
        extension: string[];
      };
      files: {
        fileSize: number;
        width: number;
        height: number;
        name: string;
        url: string;
      }[];
    };
  };
};

type VideoField = ImageField;
