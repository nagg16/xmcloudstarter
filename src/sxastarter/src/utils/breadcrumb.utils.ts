import { Ancestors, BreadcrumbProps } from '@/core/atoms/Breadcrumbs/Breadcrumbs.types';

// Helper function to handle ancestors mapping
const mapAncestors = (ancestors: Ancestors[] = []): Ancestors[] => {
  return ancestors.map((ancestor) => ({
    NavigationTitle: ancestor.NavigationTitle,
    Title: ancestor.Title,
    url: ancestor.url,
    name: ancestor.name,
  }));
};

const DEFAULT_ITEM: BreadcrumbProps['fields']['data']['item'] = {
  NavigationTitle: { value: '' },
  Title: { value: '' },
  ancestors: [],
  name: '',
  url: { value: { href: '', text: '', target: '' } },
  isVisible: true,
};

export const getBreadcrumbItem = (item?: BreadcrumbProps['fields']['data']['item']) => {
  if (!item) {
    return DEFAULT_ITEM;
  }

  const { NavigationTitle, Title, name, url, isVisible } = item;

  return {
    NavigationTitle: NavigationTitle,
    Title: Title,
    ancestors: mapAncestors(item.ancestors),
    name: name,
    url: url,
    isVisible: isVisible,
  };
};
