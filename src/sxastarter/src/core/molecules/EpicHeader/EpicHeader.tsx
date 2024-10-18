import React from 'react';

import Earmark from '@/core/atoms/Headings/Earmark';
import Title from '@/core/atoms/Headings/Title';
import { cn } from '@/utils/styles';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface EpicHeaderProps {
  fields: {
    Earmark: TextField;
    Title: TextField;
    Additionalclass: {
      text: string;
    };
    contentSize?: string;
  };
}

const EpicHeader: React.FC<EpicHeaderProps> = ({ fields }) => {
  return (
    <div className={cn('flex w-full flex-col', fields.Additionalclass?.text)}>
      <Earmark fields={{ Title: fields.Earmark }} ContentSize={fields.contentSize} />
      <Title fields={{ Title: fields.Title }} ContentSize={fields.contentSize} />
    </div>
  );
};

export default React.memo(EpicHeader);
