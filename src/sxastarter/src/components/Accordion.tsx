import { useState } from 'react';

import Description from '@/core/atoms/Description/Description';
import AccordionModule from '@/core/molecules/AccordionModule';
import EpicHeader from '@/core/molecules/EpicHeader/EpicHeader';
import { useEditor } from '@/hooks/useEditor';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  LinkField,
  TextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { Accordion } from '../core/atoms/Accordion/AccordionItem';

export type AccordianType = {
  itemTitle: {
    jsonValue: TextField;
  };
  itemDescription: {
    jsonValue: TextField;
  };
  itemImage: {
    jsonValue: ImageField;
  };
  itemPrimaryCTAIcon: {
    jsonValue: ImageField;
  };
  itemPrimaryCTAPosition: {
    jsonValue: Field<string>;
  };
  itemPrimaryCTAVariant: {
    jsonValue: Field<string>;
  };
  itemPrimaryCta: {
    jsonValue: LinkField;
  };
  itemSecondaryCTAIcon: {
    jsonValue: ImageField;
  };
  itemSecondaryCTAPosition: {
    jsonValue: Field<string>;
  };
  itemSecondaryCTAVariant: {
    jsonValue: Field<string>;
  };
  itemSecondaryCta: {
    jsonValue: LinkField;
  };
};

interface AccordianProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

interface DataSource {
  earmark: { jsonValue: TextField };
  title: { jsonValue: TextField };
  description?: { jsonValue?: { value: string } };
  subTitle?: { jsonValue?: { value: string } };
  accordionItem: {
    targetItems: AccordianType[];
  };
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

interface DataLayerEvent {
  event: string;
  accordion_title?: string;
}

const Accordian = (props: AccordianProps): JSX.Element => {
  const fields = props.rendering.fields?.data as { dataSource?: DataSource };
  const { earmark, title, description } = (fields?.dataSource as DataSource) || {};

  const isEditing = useEditor();
  const hasValues =
    fields?.dataSource?.description?.jsonValue?.value ||
    fields?.dataSource?.title?.jsonValue?.value ||
    fields?.dataSource?.accordionItem?.targetItems?.length;

  const allItemArry: string[] =
    fields?.dataSource?.accordionItem?.targetItems.map(
      (_accordian: AccordianType, index: number) => {
        return `item-${index}`;
      }
    ) ?? [];
  const itemIndex = 0;
  const result = fields?.dataSource?.accordionItem?.targetItems?.reduce<{
    item: Array<string | number | undefined>;
  }>(
    (acc, currentItem) => {
      if (currentItem?.itemTitle?.jsonValue?.value !== '') {
        acc.item.push(currentItem.itemTitle?.jsonValue?.value);
      }
      return acc;
    },
    { item: [] }
  );

  const { item } = result || { item: [] };

  const [value, setValue] = useState<Array<string>>(
    isEditing ? allItemArry : [`item-${itemIndex}`]
  );
  if (item.length == 0 || !hasValues) {
    return <></>;
  }

  return (
    <section className={`w-full`}>
      <div className="mx-[1.375rem] max-w-[77.3rem] lg:mx-[2.125rem] xl:m-auto 2xl:max-w-[90rem]">
        {fields?.dataSource?.description?.jsonValue?.value ||
        fields?.dataSource?.title?.jsonValue?.value ||
        isEditing ? (
          <div
            className={`flex flex-col items-center bg-white p-20 max-md:px-5 ${props.params.Styles}`}
          >
            <EpicHeader
              fields={{
                Earmark: earmark?.jsonValue ?? { value: '' },
                Title: title?.jsonValue ?? { value: '' },
                Additionalclass: { text: props.rendering.params.Additionalclass || '' },
                contentSize: props.params.FontSize || '',
              }}
            />
            <Description
              fields={{
                Description: { value: description?.jsonValue?.value || '' },
              }}
            />
          </div>
        ) : null}
        <div data-testid="accordian" />
        <Accordion type="multiple" value={value} onValueChange={setValue} className="w-full">
          {fields?.dataSource?.accordionItem?.targetItems?.map(
            (accordian: AccordianType, index: number) => {
              return (
                (accordian?.itemTitle?.jsonValue?.value !== '' || isEditing) && (
                  <AccordionModule value={`item-${index}`} accordian={accordian} />
                )
              );
            }
          )}
        </Accordion>
      </div>
    </section>
  );
};

export default withDatasourceCheck()<AccordianProps>(Accordian);
