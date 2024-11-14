const GeneralIcon = ({ name, width = 0, height = 0, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`/image/icons.svg#icon-${name}`} />
    </svg>
  );
};

export default GeneralIcon;
