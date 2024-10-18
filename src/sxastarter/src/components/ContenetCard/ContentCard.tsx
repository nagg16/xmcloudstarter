import React from 'react';

import Cta from '@/core/atoms/CTA/CTA';
import { SmallContentCard } from '@/core/molecules/SmallContentCard';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  LinkField,
  RichTextField,
  TextField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ContentCardProps {
  rendering: ComponentRendering & { params: ComponentParams };
  fields?: {
    Image?: ImageField;
    ShortTitle?: TextField;
    Description?: RichTextField;
    TitleTag?: string;
    PrimaryCTA?: LinkField;
    PrimaryCTAIcon?: ImageField;
    PrimaryCTAIconPosition?: Field<string>;
    PrimaryCTAVariant?: Field<string>;
  };
  params: ComponentParams;
}
export const LargeIcon = (props: ContentCardProps): JSX.Element => {
  return (
    <div className={`component ${props.params.styles}`}>
      <div className="component-content">
        <p>Large ContentCard Component</p>
      </div>
    </div>
  );
};
export const SmallIcon = (props: ContentCardProps): JSX.Element => {
  const fields = props.fields;
  return (
    <div className={`${props.params.styles} flex max-w-[308px] flex-col`}>
      <SmallContentCard
        icon={fields?.Image as ImageField}
        title={fields?.ShortTitle || { value: '' }}
        description={fields?.Description || { value: '' }}
        titleTag={fields?.TitleTag || 'h2'}
      />
      <div className="pl-4">
        <Cta
          fields={{
            link: fields?.PrimaryCTA || {
              value: {
                href: '',
                text: '',
                target: '',
              },
            },
            variant: {
              value: (fields?.PrimaryCTAVariant?.value || '') as
                | 'Filled'
                | 'Link'
                | 'Outline'
                | 'Disable'
                | 'Danger',
            },
            size: {
              value: (fields?.PrimaryCTAVariant?.value || '') as 'small' | 'medium' | 'large',
            },
            icon: fields?.PrimaryCTAIcon || undefined,
            iconPosition: {
              value: (fields?.PrimaryCTAIconPosition?.value || 'right') as 'left' | 'right',
            },
            spanClass: { value: fields?.PrimaryCTA?.value?.class || 'pr-2' },
          }}
          className={fields?.PrimaryCTA?.value?.class || 'justify-left'}
        />
      </div>
    </div>
  );
};
