import { memo } from 'react';

import { cn } from '@/utils/styles';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface EarmarkProps {
  fields: {
    Title: TextField;
  };
  ContentSize?: string;
}

const Earmark = memo(({ fields, ContentSize }: EarmarkProps): JSX.Element => {
  const contentSizeStyles = cn({
    'text-sm leading-4': ContentSize?.toLowerCase() === 'small',
    'text-xl leading-5': ContentSize?.toLowerCase() === 'medium',
    'text-2xl leading-6': ContentSize?.toLowerCase() === 'large', // current style from design
    'text-xl leading-7':
      !ContentSize?.toLowerCase() || ContentSize == '' || ContentSize == undefined,
  });
  return (
    <Text
      field={fields.Title}
      tag="span"
      encode={false}
      className={cn(
        'uppercase leading-none tracking-wider text-earmark max-md:max-w-full font-bold',
        contentSizeStyles
      )}
    />
  );
});
Earmark.displayName = 'Earmark';
export default Earmark;
