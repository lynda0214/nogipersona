const OoenColor = ({ color, colorName }) => {
  const getTextColor = (color) => {
    if (color === 'white' || color === 'yellow' || color === 'greenyellow') {
      return 'black';
    }
    return 'white';
  }

  return (
    <span className="mr-1" style={{ color: getTextColor(color), backgroundColor: color }}>
      {colorName}
    </span>
  )
};

export default OoenColor;
