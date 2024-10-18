import React from 'react';

import { cn } from '@/utils/styles';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import AccordianCollapse from '../Icons/AccordianCollapse';
import AccordingExpand from '../Icons/AccordianExpand';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border border-black justify-end mb-4 p-4', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex items-center justify-between text-4xl leading-normal tracking-[-0.04rem] text-black">
    {children}

    <AccordionPrimitive.Trigger
      ref={ref}
      aria-label="Toggle"
      title="Toggle accordion section"
      style={{ cursor: 'pointer', touchAction: 'manipulation', pointerEvents: 'auto' }}
      className={cn(
        'flex items-center font-medium transition-all  [&[data-state=open]>svg.toggle-wrapper]:rotate-180 [&[data-state=open]>svg.minus]:block [&[data-state=open]>svg.plus]:hidden [&[data-state=closed]>svg.minus]:hidden [&[data-state=closed]>svg.plus]:block',
        className,
        {
          '': children,
        }
      )}
      {...props}
    >
      <AccordingExpand />
      <AccordianCollapse />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="py-0 print:mb-[1.563rem]">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
