import { ReactElement } from 'react';

import NextImage from 'next/image';
import { DamImageField } from 'src/global';

import { useEditor } from '@/hooks/useEditor';
import { getImage } from '@/utils/imageResolver';
import { Image as SitecoreImage } from '@sitecore-jss/sitecore-jss-nextjs';

type ImageProps = {
  field?: DamImageField;
  className?: string;
  priority?: boolean;
  editable?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

const DEFAULT_SIZE = 60;

const Image = ({
  field,
  className,
  priority,
  editable,
  quality,
  unoptimized,
}: ImageProps): ReactElement => {
  const isEditing = useEditor();
  const { src, alt, width, height } = getImage(field);

  if (isEditing) {
    return <SitecoreImage field={field} className={className} editable={editable} />;
  }
  if (src) {
    return (
      <NextImage
        src={src}
        alt={alt || ''}
        width={width || DEFAULT_SIZE}
        height={height || DEFAULT_SIZE}
        className={className}
        priority={priority}
        quality={quality}
        unoptimized={unoptimized}
      />
    );
  }

  return <></>;
};

export default Image;
