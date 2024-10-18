import dynamic from 'next/dynamic';

const Default = dynamic(() => import('./HeroBannerDefault/HeroBannerDefault'));
const HeroBannerWithBackgroundImage = dynamic(
  () => import('./HeroBannerWithBackgroundImage/HeroBannerWithBackgroundImage')
);
export { Default };
export { HeroBannerWithBackgroundImage };
