import { memo, useMemo } from 'react';

import { BreadcrumbProps } from 'src/core/atoms/Breadcrumbs/Breadcrumbs.types';

import BreadcrumbItem from './BreadcrumbsItem';

const Breadcrumb = ({ fields }: BreadcrumbProps) => {
  const isVisible = useMemo(
    () => (fields?.data.item.isVisible !== undefined ? fields.data.item.isVisible : true),
    [fields?.data.item.isVisible]
  );

  const breadcrumbItems = useMemo(() => {
    if (fields?.data?.item) {
      const item = fields.data.item;
      const ancestors = item.ancestors || [];
      return [
        ...ancestors,
        {
          NavigationTitle: item.NavigationTitle,
          Title: item.Title,
          name: item.name,
          url: item.url,
          template: { name: 'Page' },
        },
      ];
    }
    return [];
  }, [fields]);

  if (!isVisible || breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="text-neutral m-0 inline-flex list-none p-0 text-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbItems.map((item, index) => {
          const textField = item.NavigationTitle || item.Title;

          return (
            <BreadcrumbItem
              href={item?.url?.value?.href || ''}
              textField={textField}
              isLast={index === breadcrumbItems.length - 1}
              index={index}
              name={item.name}
              key={item.url?.value?.text || index}
            />
          );
        })}{' '}
      </ol>{' '}
    </nav>
  );
};

export default memo(Breadcrumb);
