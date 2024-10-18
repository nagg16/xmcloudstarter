import { DamImageField } from 'src/global';

export const getImage = (imageField?: DamImageField) => {
  const originalImage = imageField?.value?.asset?.files?.find(
    (item: { name: string }) => item.name === 'original'
  );

  if (originalImage) {
    return {
      src: originalImage.url,
      width: originalImage.width,
      height: originalImage.height,
      alt: imageField?.value?.alt,
    };
  }

  return {
    src: imageField?.value?.src,
    width: imageField?.value?.width,
    height: imageField?.value?.height,
    alt: imageField?.value?.alt,
  };
};
