import React from 'react';

import { cva } from 'class-variance-authority';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { cn } from '@/utils/styles';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface CardCarouselProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    data: {
      item: {
        cardList: {
          targetItems: Array<{
            id: string;
            name: string;
            CompanyName: { jsonValue: { value: string } };
            CompanyCategory: { jsonValue: { value: string } };
            Description: { jsonValue: { value: string } };
            logoImage: {
              jsonValue: {
                value: {
                  src: string;
                  alt: string;
                  width: string;
                  height: string;
                };
              };
            };
          }>;
        };
      };
    };
    Additionalclass: string;
  };
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  accessibility: true,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const contentAlignment = cva('flex w-[156px] max-w-full flex-col', {
  variants: {
    alignment: {
      Left: 'items-start justify-start self-start',
      Right: 'items-end justify-end self-end',
      Center: 'items-center justify-center self-center',
    },
  },
  defaultVariants: {
    alignment: 'Center',
  },
});

export const Default = (props: CardCarouselProps): JSX.Element => {
  const cardItems = props.fields.data.item.cardList.targetItems;
  const backgroundColor =
    props.params.ComponentBackgroundColor === 'Dark' ? 'bg-neutral-200' : 'bg-white';
  return (
    <div className="container mx-auto">
      <div className={props.params.styles}>
        <style jsx global>{`
          .slick-prev,
          .slick-next {
            z-index: 1;
          }
          .slick-prev {
            left: -20px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
          }
          .slick-next {
            right: -20px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
          }
          .slick-prev:before,
          .slick-next:before {
            content: '';
            color: #21272a;
            border: solid black;
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 3px;
          }
          .company-card-wrapper {
            padding: 0 8px;
          }
          .company-card {
            padding: 20px;
          }
          .company-logo {
            width: 50px;
            height: 50px;
            object-fit: contain;
            margin-bottom: 10px;
          }
        `}</style>
        <div>
          <Slider {...settings}>
            {cardItems.map((cardItem) => (
              <div
                key={cardItem.id}
                className={cn(
                  'mt-12 text-lg leading-6 text-zinc-800 max-md:mt-10 max-md:max-w-full',
                  props.fields.Additionalclass
                )}
              >
                <div className="company-card">
                  <article
                    className={`flex max-w-[592px] flex-col border border-solid border-zinc-200 bg-white p-6 max-md:px-5 ${backgroundColor}`}
                  >
                    <div
                      className={contentAlignment({
                        alignment: props.params.ContentAlignment as 'Left' | 'Right' | 'Center',
                      })}
                    >
                      <Image
                        src={cardItem.logoImage.jsonValue.value.src}
                        alt={cardItem.logoImage.jsonValue.value.alt}
                        width={parseInt(cardItem.logoImage.jsonValue.value.width)}
                        height={parseInt(cardItem.logoImage.jsonValue.value.height)}
                        className="company-logo"
                      />
                      <p className="text-neutral-90 mt-4 text-lg italic leading-6 max-md:max-w-full">
                        {cardItem.Description.jsonValue.value}
                      </p>
                      <h2 className="text-neutral-90 mt-4 text-2xl font-bold leading-none max-md:max-w-full">
                        {cardItem.CompanyName.jsonValue.value}
                      </h2>
                      <p className="text-neutral-90 text-lg leading-snug max-md:max-w-full">
                        {cardItem.CompanyCategory.jsonValue.value}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
