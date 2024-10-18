import React from 'react';

import { cva } from 'class-variance-authority';

import { Field, ImageField, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

import { CtaIcon } from './CTAIcon';

const button = cva(
  'inline-flex px-4 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2',
  {
    variants: {
      variant: {
        Filled: 'bg-primary-light text-white hover:opacity-80 focus:ring-primary-light',
        Link: 'text-primary-light hover:underline focus:ring-neutral-200',
        Outline:
          'border-2 border-primary-light bg-transparent text-primary-light hover:bg-opacity-10 focus:ring-primary-light',
        Danger: 'bg-error text-white hover:opacity-80 focus:ring-red-500',
        Disable: 'cursor-not-allowed bg-neutral-300 text-neutral-500',
      },
      size: {
        small: 'py-2 text-sm',
        medium: 'py-3 text-base',
        large: 'py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'Filled',
      size: 'medium',
    },
  }
);

interface CTAProps {
  readonly fields: {
    link: LinkField;
    variant?: {
      value: 'Filled' | 'Link' | 'Outline' | 'Disable' | 'Danger';
    };
    size?: {
      value: 'small' | 'medium' | 'large';
    };
    icon?: ImageField;
    iconPosition?: {
      value: 'left' | 'right';
    };
    backgroundColor?: {
      value: string;
    };
    spanClass?: Field<string>;
  };
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The `CTA` component represents a call-to-action button or link. It provides a consistent and customizable UI element that can be used throughout the application.
 * The component accepts various props to configure its appearance and behavior:
 * - `fields`: An object containing the following properties:
 *   - `link`: An object with `href` and `text` properties, representing the URL and label of the CTA link.
 *   - `variant`: The visual style of the CTA, can be 'Filled', 'Link', 'Outline', 'Disable', or 'Danger'.
 *   - `size`: The size of the CTA, can be 'small', 'medium', or 'large'.
 *   - `icon`: An object with `src` and `alt` properties, representing the icon to be displayed in the CTA.
 *   - `iconPosition`: The position of the icon, can be 'left' or 'right'.
 *   - `backgroundColor`: A custom background color for the CTA.
 * - `onClick`: An optional function to be called when the CTA is clicked.
 * - `className`: An optional CSS class to be applied to the CTA.
 * - `style`: An optional object of CSS styles to be applied to the CTA.
 * The `CTA` component uses the `class-variance-authority` (cva) library to manage the CSS classes for the different variants and sizes of the CTA.
 */

const CTA: React.FC<CTAProps> = ({ fields, onClick, className = '', style = {} }) => {
  const { link, variant, size, icon, iconPosition, backgroundColor, spanClass } = fields;

  if (!link?.value?.href || !link.value.text) {
    return null;
  }

  const buttonClasses = button({
    variant: variant?.value,
    size: size?.value,
  });

  const customStyle: React.CSSProperties = backgroundColor?.value
    ? { backgroundColor: backgroundColor.value, ...style }
    : { ...style };
  return (
    <Link
      field={link}
      className={`${className} ${buttonClasses}`}
      style={customStyle}
      aria-label={link.value.text}
      rel={link.value.target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {iconPosition?.value.toLowerCase() === 'left' && icon && <CtaIcon fields={icon} />}
      <span className={spanClass?.value}>{link.value.text}</span>
      {iconPosition?.value.toLowerCase() === 'right' && icon && <CtaIcon fields={icon} />}
    </Link>
  );
};

export default React.memo(CTA);
