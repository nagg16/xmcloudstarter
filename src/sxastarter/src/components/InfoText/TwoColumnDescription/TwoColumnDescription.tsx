import React from 'react';

import { InfoTextProps } from '@/components/InfoText/Infotext.type';
import Description from '@/core/atoms/Description/Description';
import EpicHeader from '@/core/molecules/EpicHeader/EpicHeader';

export const TwoColumnDescription = (props: InfoTextProps): JSX.Element => {
  const fields = props.fields;
  return (
    <section
      className={`
        flex 
        flex-col 
        border-b-neutral-400 
        bg-slate-100
      p-20
      max-md:px-5 
        ${props.params.styles || 'text-right'}
        ${props.rendering.componentName}`}
    >
      <EpicHeader
        fields={{
          Earmark: fields?.Earmark ?? { value: '' },
          Title: fields?.LongTitle ?? { value: '' },
          Additionalclass: { text: props.rendering.params.Additionalclass || '' },
          contentSize: props.params.FontSize || '',
        }}
      />
      <div className="flex flex-col md:flex-row md:gap-12">
        {fields?.Description &&
        fields?.Description2 &&
        fields?.Description2.value != '' &&
        fields?.Description.value != '' ? (
          <>
            <div className="md:w-1/2">
              <Description
                fields={{
                  Description: fields.Description,
                  Additionalclass: { value: '' },
                  ContentSize: { value: props.params.FontSize || '' },
                }}
              />
            </div>
            <div className="md:w-1/2">
              <Description
                fields={{
                  Description: fields.Description2,
                  Additionalclass: { value: '' },
                  ContentSize: { value: props.params.FontSize || '' },
                }}
              />
            </div>
          </>
        ) : (
          <div className="w-full">
            {fields?.Description?.value && (
              <Description
                fields={{
                  Description: fields.Description,
                  Additionalclass: { value: '' },
                  ContentSize: { value: props.params.FontSize || '' },
                }}
              />
            )}
            {fields?.Description2?.value && (
              <Description
                fields={{
                  Description: fields.Description2,
                  Additionalclass: { value: '' },
                  ContentSize: { value: props.params.FontSize || '' },
                }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
