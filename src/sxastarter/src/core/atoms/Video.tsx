import { ReactElement, Suspense } from 'react';

import { VideoField } from 'src/global';

type ImageProps = {
  field?: VideoField;
  className?: string;
  priority?: boolean;
  editable?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

const Video = ({ field }: ImageProps): ReactElement => {
  const getVideoId = (url: string | undefined) => {
    if (!url) return null;

    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const vimeoRegex =
      /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;

    const youtubeMatch = youtubeRegex.exec(url);
    if (youtubeMatch) return { platform: 'youtube', id: youtubeMatch[1] };

    const vimeoMatch = vimeoRegex.exec(url);
    if (vimeoMatch) return { platform: 'vimeo', id: vimeoMatch[3] };

    return null;
  };

  const showVideo = field?.value?.href;
  const videoInfo = showVideo && typeof showVideo === 'string' ? getVideoId(showVideo) : null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="absolute inset-0 z-10 size-full">
        {videoInfo?.platform === 'youtube' ? (
          <iframe
            className="size-full"
            src={`https://www.youtube.com/embed/${videoInfo?.id}?autoplay=1&mute=1&loop=1&playlist=${videoInfo?.id}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        ) : (
          <iframe
            className="absolute left-1/2 top-1/2 h-[56.25vw] w-screen -translate-x-1/2 -translate-y-1/2"
            src={`https://player.vimeo.com/video/${videoInfo?.id}?autoplay=1&loop=1&background=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo video player"
          ></iframe>
        )}
      </div>
    </Suspense>
  );
};

export default Video;
