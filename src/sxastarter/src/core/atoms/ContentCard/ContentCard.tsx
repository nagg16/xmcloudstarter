import React, { FC } from 'react';

import { RichText, RichTextField, Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface CardContentProps {
  title: TextField;
  description: RichTextField;
  titleTag?: string;
}

export const CardContent: FC<CardContentProps> = ({ title, description, titleTag }) => {
  return (
    <section className="flex w-full flex-col pb-4 pl-4 pt-6 leading-none text-zinc-800">
      <Text className="w-full whitespace-nowrap text-xl font-bold" field={title} tag={titleTag} />
      <RichText field={description} className="mt-4 text-base font-normal leading-6" />
    </section>
  );
};
export default React.memo(CardContent);
