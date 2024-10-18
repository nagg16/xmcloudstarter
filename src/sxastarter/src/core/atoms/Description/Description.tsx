import { cn } from '@/utils/styles';
import { Field, RichText, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface DescriptionProps {
  fields: {
    Description: RichTextField;
    Additionalclass?: Field<string>;
    ContentSize?: Field<string>;
  };
}

const Description: React.FC<DescriptionProps> = ({ fields }) => {
  const contentSizeStyles = cn({
    'text-sm leading-4': fields.ContentSize?.value.toLowerCase() === 'small',
    'text-base leading-5': fields.ContentSize?.value.toLowerCase() === 'medium',
    'text-xl leading-6': fields.ContentSize?.value.toLowerCase() === 'large', // current style from design
    'text-lg leading-7':
      !fields.ContentSize?.value.toLowerCase() ||
      fields.ContentSize.value === '' ||
      fields.ContentSize.value === undefined,
  });
  return (
    <RichText
      field={fields.Description}
      tag="div"
      className={cn(
        'w-full text-description max-md:max-w-full mt-12',
        contentSizeStyles,
        fields.Additionalclass
      )}
    />
  );
};

export default Description;
