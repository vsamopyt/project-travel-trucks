const icons = {
  water: 'str',
  gas: 'str',
  microwave: "str"
};

import clsx from 'clsx';

const BasicIcons = ({
  name,
  color = 'currentColor',
  width = '16px',
  height = '16px',
  classNameSize,
  clasNameStroke,
  clasNameFill,
  classNameBoth,
}) => {
  let styleType = icons[name]; 

  if (!styleType) {
    styleType = 'fll';
  }

  return (
    <svg
      className={clsx(
        classNameSize,
        styleType === 'str' && clasNameStroke,
        styleType === 'bth' && classNameBoth,
        styleType === 'fll' && clasNameFill
      )}
      color={color}
      width={width}
      height={height}
      aria-hidden="true"
    >
      <use xlinkHref={`/image/icons.svg#icon-${name}`} />
    </svg>
  );
};

export default BasicIcons;
