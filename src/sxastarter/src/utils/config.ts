import { LayoutServicePageState, SitecoreContextValue } from '@sitecore-jss/sitecore-jss-nextjs';

export const checkIsNotNormal = (sitecoreContext?: SitecoreContextValue) =>
  sitecoreContext?.pageState !== LayoutServicePageState.Normal;
