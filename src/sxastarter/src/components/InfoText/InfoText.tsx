import dynamic from 'next/dynamic';

const Default = dynamic(() =>
  import('@/components/InfoText/Default/Default').then((mod) => mod.Default)
);
const TwoColumnDescription = dynamic(() =>
  import('@/components/InfoText/TwoColumnDescription/TwoColumnDescription').then(
    (mod) => mod.TwoColumnDescription
  )
);
export { Default };
export { TwoColumnDescription };
