import React from 'react';

import Image from '@/core/atoms/Image';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

type CtaIconProps = {
  fields: ImageField;
};

/**
 * Renders a CTA (Call-to-Action) icon component.
 * @param {CtaIconProps} props - The props for the CTA icon component.
 * @param {string} [props.src] - The source URL of the icon image.
 * @param {string} [props.alt] - The alt attribute of the icon image.
 * @returns {React.ReactElement} - The rendered CTA icon component.
 */

export const CtaIcon: React.FC<CtaIconProps> = ({ fields }) => {
  if (!fields) return null;
  return (
    <span className={`cta-icon size-6`}>
      <Image field={fields} />
    </span>
  );
};
