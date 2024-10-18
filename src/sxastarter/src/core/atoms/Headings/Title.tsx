import { cn } from '@/utils/styles';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface TitleProps {
  fields: {
    Title: TextField;
    Additionalclass?: string;
  };
  ContentSize?: string;
}

const Title: React.FC<TitleProps> = ({ fields, ContentSize }) => {
  const contentSizeStyles = cn({
    'text-sm leading-4': ContentSize?.toLowerCase() === 'small',
    'text-4xl leading-9': ContentSize?.toLowerCase() === 'medium',
    'text-5xl leading-14': ContentSize?.toLowerCase() === 'large', // current style from design
    'text-3xl leading-10':
      !ContentSize?.toLowerCase() || ContentSize == '' || ContentSize == undefined,
  });
  return (
    <Text
      field={fields.Title}
      tag="span"
      encode={false}
      className={cn(
        'mt-2  leading-none text-title max-md:max-w-full',
        fields.Additionalclass, // This will only be added if it's truthy
        contentSizeStyles
      )}
    />
  );
};

export default Title;
