import Link from 'next/link';

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Text, TextField } from '@sitecore-jss/sitecore-jss-nextjs';

const BreadcrumbItem = ({
  href,
  index,
  textField,
  isLast,
}: {
  href: string;
  name?: string;
  index: number;
  textField: TextField;
  isLast: boolean;
}) => (
  <li
    key={href}
    className="flex items-center"
    itemProp="itemListElement"
    itemScope
    itemType="https://schema.org/ListItem"
  >
    {!isLast ? (
      <>
        <Link
          href={href}
          className="text-sm text-black hover:underline focus:outline-none focus:ring-2 focus:ring-primary-light"
          itemProp="item"
        >
          <Text field={textField} tag="span" encode={false} className="text-black" />
        </Link>
        <meta itemProp="position" content={`${index + 1}`} />
        <ChevronRightIcon className="mx-2 size-3 text-black" aria-hidden="true" />
      </>
    ) : (
      <Text field={textField} tag="span" encode={false} className="font-bold text-black" />
    )}
  </li>
);

export default BreadcrumbItem;
