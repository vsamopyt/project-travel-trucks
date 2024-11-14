import clsx from 'clsx';
import { Icons } from '../../constants/constants';

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
  let styleType = Icons[name];

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
