import { IconProps } from './icon.types';

const AccordianExpand = ({ height, width }: IconProps) => {
  return (
    <svg
      style={{ cursor: 'pointer', touchAction: 'manipulation', pointerEvents: 'auto' }}
      width={width || 47}
      role="presentation"
      className=" plus transition delay-100 ease-in-out hover:fill-white"
      height={height || 47}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="23.5" cy="23.5" r="23.5" />
        <path
          d="M22.921 30.88V24.432H17V22.479H22.952V16H25.029V22.479H30.919V24.432H24.998V30.88H22.921Z"
          fill="#000"
        />
      </g>
    </svg>
  );
};

export default AccordianExpand;
