import React from 'react';

import CTA from '@/core/atoms/CTA/CTA';
import Description from '@/core/atoms/Description/SecondaryDescription';
import Earmark from '@/core/atoms/Headings/Earmark';
import Title from '@/core/atoms/Headings/SecondaryTitle';
import Image from '@/core/atoms/Image';
import { cn } from '@/utils/styles';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

import { Data } from './ImageBanner.types';

interface ImageBannerProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

const ImageBanner = (props: ImageBannerProps) => {
  const fields = props.rendering.fields as { data?: Data };
  const { earmark, title, description, image, video, primarycta, secondarycta } =
    fields?.data?.data || {};
  const getVideoId = (url: string) => {
    if (typeof url !== 'string') return null;

    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const vimeoRegex =
      /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;

    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) return { platform: 'youtube', id: youtubeMatch[1] };

    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[3] };

    return null;
  };

  const videoInfo = video?.jsonValue?.value ? getVideoId(video.jsonValue.value) : null;
  const youtubeURL = `https://www.youtube.com/embed/${videoInfo?.id}?autoplay=1&mute=1&loop=1&playlist=${videoInfo?.id}`;
  const vimeoURL = `https://player.vimeo.com/video/${videoInfo?.id}?autoplay=1&loop=1&background=1`;
  const contentOrder = props?.rendering?.params?.ContentAlignment === 'Left' ? '' : 'order-1';
  return (
    <div
      className={cn(`container mx-auto p-2`, props.params.styles, props.rendering.componentName)}
    >
      <div className="gap-x-20 p-8 md:flex md:columns-2 md:p-20">
        <div className={cn(`w-1/2`, contentOrder)}>
          {image?.jsonValue?.value?.src ? (
            <Image field={image?.jsonValue} />
          ) : (
            <div className="absolute inset-0 size-full">
              {videoInfo?.platform === 'youtube' ? (
                <iframe
                  className="size-full"
                  src={youtubeURL}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              ) : (
                <iframe
                  className="size-full"
                  src={vimeoURL}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Vimeo video player"
                ></iframe>
              )}
            </div>
          )}
        </div>
        <div className="flex w-1/2 flex-col py-8">
          <Earmark
            fields={{
              Title: earmark ?? { value: '' },
            }}
            ContentSize={props.params.FontSize}
          />
          <Title
            fields={{
              Title: title ?? { value: '' },
              Additionalclass: 'pt-2 pb-12',
              contentSize: props.params.FontSize,
            }}
          />
          <Description
            fields={{
              Description: description ?? { value: '' },
              Additionalclass: 'pb-16',
              contentSize: props.params.FontSize,
            }}
          />
          <div className="flex flex-wrap items-start gap-4 self-start text-base font-medium leading-none tracking-wide">
            {primarycta?.jsonValue?.value && 'href' in primarycta.jsonValue.value && (
              <CTA
                fields={{
                  link: {
                    value: {
                      href: primarycta.jsonValue.value.href,
                      text: primarycta.jsonValue.value.text || '',
                    },
                  },
                }}
                className="border-2 border-sky-500 bg-sky-500 px-4 py-3 font-bold hover:bg-sky-500 hover:opacity-100"
              />
            )}
            {secondarycta?.jsonValue?.value && 'href' in secondarycta.jsonValue.value && (
              <CTA
                fields={{
                  variant: {
                    value: 'Filled',
                  },
                  link: {
                    value: {
                      href: secondarycta.jsonValue.value.href,
                      text: secondarycta.jsonValue.value.text || '',
                    },
                  },
                }}
                className="border-2 border-sky-500 bg-transparent px-4 py-3 font-bold !text-sky-500 hover:text-sky-500 hover:opacity-100"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
