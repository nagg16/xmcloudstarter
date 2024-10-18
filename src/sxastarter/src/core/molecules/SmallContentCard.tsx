import React from 'react';

import { CardContent } from '@/core/atoms/ContentCard/ContentCard';
import Image from '@/core/atoms/Image';
import { ImageField, RichTextField, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface SmallContentCardProps {
  icon: ImageField;
  title: TextField;
  description: RichTextField;
  titleTag: string;
}

export const SmallContentCard = ({
  icon,
  title,
  description,
  titleTag,
}: Readonly<SmallContentCardProps>) => {
  return (
    <>
      <div className="flex w-full items-center px-4">
        <Image field={icon} className="my-auto aspect-square self-stretch object-contain" />
      </div>

      <CardContent title={title} description={description} titleTag={titleTag} />
    </>
  );
};
