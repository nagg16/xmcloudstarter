import React from 'react';

import Breadcrumbs from '@/core/atoms/Breadcrumbs/Breadcrumbs';
import { BreadcrumbProps } from '@/core/atoms/Breadcrumbs/Breadcrumbs.types';
import { getBreadcrumbItem } from '@/utils/breadcrumb.utils';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

interface BreadcrumbComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

function Breadcrumb({ rendering: { fields } }: BreadcrumbComponentProps) {
  if (!fields) {
    return null;
  }

  const breadCrumbData = fields as { data?: { item?: BreadcrumbProps['fields']['data']['item'] } };
  const item = breadCrumbData.data?.item;

  const breadcrumbItem = getBreadcrumbItem(item);

  return <Breadcrumbs fields={{ data: { item: breadcrumbItem } }} />;
}
export default Breadcrumb;
