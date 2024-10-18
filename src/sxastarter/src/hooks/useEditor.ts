import { checkIsNotNormal } from '@/utils/config';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

export const useEditor = () => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = checkIsNotNormal(sitecoreContext);
  return isEditing;
};
