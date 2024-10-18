import React from 'react';

import { InfoTextProps } from '@/components/InfoText/Infotext.type';
import Description from '@/core/atoms/Description/Description';
import EpicHeader from '@/core/molecules/EpicHeader/EpicHeader';

export const Default = (props: InfoTextProps): JSX.Element => {
  const fields = props.fields;
  return (
    <section
      className={`
        flex
        flex-col
        items-center
        border-b-neutral-400
        bg-slate-100
        p-20
        max-md:px-5
        ${props.params.styles || 'text-right'}
        ${props.rendering.componentName}
      `}
    >
      <EpicHeader
        fields={{
          Earmark: fields?.Earmark ?? { value: '' },
          Title: fields?.LongTitle ?? { value: '' },
          Additionalclass: { text: props.rendering.params.Additionalclass || '' },
          contentSize: props.params.FontSize || '',
        }}
      />
      <Description
        fields={{
          Description: fields?.Description ?? { value: '' },
          Additionalclass: { value: '' },
          ContentSize: { value: props.params.FontSize || '' },
        }}
      />
    </section>
  );
};
