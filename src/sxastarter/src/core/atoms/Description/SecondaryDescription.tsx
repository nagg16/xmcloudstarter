import { cn } from '@/utils/styles';
import { RichTextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface DescriptionProps {
  fields: {
    Description: RichTextField;
    Additionalclass?: string;
    contentSize?: string;
  };
}

const SecondaryDescription: React.FC<DescriptionProps> = ({ fields }) => {
  return (
    <Text
      field={fields.Description}
      tag="div"
      className={cn(`pt-0 text-lg leading-6 text-zinc-800`, fields.Additionalclass)}
    />
  );
};

export default SecondaryDescription;
