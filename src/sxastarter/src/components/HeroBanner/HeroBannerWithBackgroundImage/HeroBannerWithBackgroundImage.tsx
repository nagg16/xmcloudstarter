import React from 'react';

import { HeroBannerProps } from '@/components/HeroBanner/HeroBanner.types';
import Cta from '@/core/atoms/CTA/CTA';
import Description from '@/core/atoms/Description/Description';
import Image from '@/core/atoms/Image';
import EpicHeader from '@/core/molecules/EpicHeader/EpicHeader';

export const HeroBannerWithBackgroundImage = (props: HeroBannerProps): JSX.Element => {
  const fields = props.fields.data.dataSource;
  const params = props.params;
  const rendering = props.rendering;
  return (
    <div className={`relative w-full ${params?.styles || ''} ${rendering?.componentName || ''}`}>
      <div className="relative flex min-h-screen items-center justify-center ">
        {fields.image?.jsonValue && (
          <div className="absolute inset-0 size-full">
            {fields.image && (
              <Image field={fields.image?.jsonValue} className="size-full object-cover" />
            )}
          </div>
        )}

        <div
          className={`relative z-10 max-w-3xl px-4 text-white sm:px-6 lg:px-8 ${
            params?.ContentAlignment || 'text-left'
          }`}
        >
          <EpicHeader
            fields={{
              Earmark: fields.earmark?.jsonValue ?? { value: '' },
              Title: fields.title?.jsonValue ?? { value: '' },
              Additionalclass: { text: params?.Additionalclass || '' },
              contentSize: params?.FontSize || '',
            }}
          />
          {fields.description?.jsonValue && (
            <Description
              fields={{
                Description: fields.description?.jsonValue,
                Additionalclass: { value: '' },
                ContentSize: { value: props.params.FontSize || '' },
              }}
            />
          )}

          <div className="mt-4 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            {fields.primaryCta?.jsonValue?.value && (
              <Cta
                fields={{
                  link: fields.primaryCta.jsonValue,
                  variant: {
                    value: (fields?.primaryCTAVariant?.jsonValue?.value || '') as
                      | 'Filled'
                      | 'Link'
                      | 'Outline'
                      | 'Disable'
                      | 'Danger',
                  },
                  icon: fields.primaryCTAIcon?.jsonValue,
                  iconPosition: {
                    value: (fields?.primaryCTAIconPosition?.jsonValue?.value || 'right') as
                      | 'left'
                      | 'right',
                  },
                }}
              />
            )}
            {fields.secondaryCta?.jsonValue?.value && (
              <Cta
                fields={{
                  link: fields.secondaryCta.jsonValue,
                  variant: {
                    value: (fields?.secondaryCTAVariant?.jsonValue?.value || '') as
                      | 'Filled'
                      | 'Link'
                      | 'Outline'
                      | 'Disable'
                      | 'Danger',
                  },
                  icon: fields.secondaryCTAIcon?.jsonValue,
                  iconPosition: {
                    value: (fields?.primaryCTAIconPosition?.jsonValue?.value || 'right') as
                      | 'left'
                      | 'right',
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerWithBackgroundImage;
