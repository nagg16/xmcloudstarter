import React from 'react';

import { AccordianType } from 'components/Accordion';

import { Image, Text } from '@sitecore-jss/sitecore-jss-nextjs';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../atoms/Accordion/AccordionItem';
import CTA from '../atoms/CTA/CTA';

interface AccordionModule {
  accordian: AccordianType;
  value: string;
}

const AccordionModule = (props: AccordionModule): JSX.Element => {
  return (
    <AccordionItem value={props.value}>
      {(props?.accordian?.itemDescription?.jsonValue?.value !== '' ||
        props?.accordian?.itemImage?.jsonValue?.value?.asset !== null) && (
        <>
          <AccordionTrigger className="inline-block leading-normal text-black">
            {props?.accordian?.itemPrimaryCta?.jsonValue?.value?.href !== '' && (
              <Text
                className="flex items-center justify-between text-4xl leading-normal tracking-[-0.04rem] text-black"
                tag="h3"
                field={props?.accordian?.itemTitle?.jsonValue}
              />
            )}
          </AccordionTrigger>
          <AccordionContent>
            {' '}
            <div
              className={`flex w-full flex-col gap-[10.375rem] pb-[2.625rem] lg:flex-row lg:pb-8 lg:pr-16`}
            >
              <div className="w-full">
                <Text
                  field={props?.accordian?.itemDescription?.jsonValue}
                  className="text-base font-normal leading-[156%] tracking-[-0.038rem] text-black"
                />
                <div className="mt-4 flex flex-wrap items-start gap-4 self-start text-base font-medium leading-none tracking-wide">
                  {props?.accordian?.itemPrimaryCta?.jsonValue?.value &&
                    'href' in props?.accordian?.itemPrimaryCta.jsonValue.value && (
                      <CTA
                        fields={{
                          link: {
                            value: {
                              href: props?.accordian?.itemPrimaryCta.jsonValue.value.href || '',
                              text: props?.accordian?.itemPrimaryCta.jsonValue.value.text || '',
                            },
                          },
                        }}
                        className="border-2 border-sky-500 bg-sky-500 px-4 py-3 font-bold hover:bg-sky-500 hover:opacity-100"
                      />
                    )}
                  {props?.accordian?.itemSecondaryCta?.jsonValue?.value &&
                    'href' in props?.accordian?.itemSecondaryCta.jsonValue.value && (
                      <CTA
                        fields={{
                          variant: {
                            value: 'Filled',
                          },
                          link: {
                            value: {
                              href: props?.accordian?.itemSecondaryCta.jsonValue.value.href || '',
                              text: props?.accordian?.itemSecondaryCta.jsonValue.value.text || '',
                            },
                          },
                        }}
                        className="border-2 border-sky-500 bg-transparent px-4 py-3 font-bold !text-sky-500 hover:text-sky-500 hover:opacity-100"
                      />
                    )}
                </div>
              </div>
              <Image
                field={props?.accordian?.itemImage?.jsonValue}
                className="hidden max-h-[15.375rem] w-full max-w-[23.688rem] lg:block"
              />
            </div>
          </AccordionContent>
        </>
      )}
    </AccordionItem>
  );
};

export default AccordionModule;
