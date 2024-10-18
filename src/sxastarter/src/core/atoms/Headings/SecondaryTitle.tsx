import { cn } from '@/utils/styles';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface TitleProps {
  fields: {
    Title: TextField;
    Additionalclass?: string;
    contentSize?: string;
  };
}

const SecondaryTitle: React.FC<TitleProps> = ({ fields }) => {
  return (
    <Text
      field={fields.Title}
      tag="span"
      encode={false}
      className={cn('pt-0 text-5xl font-bold leading-10 text-zinc-800', fields.Additionalclass)}
    />
  );
};

export default SecondaryTitle;
