const getPosition = (i: number, radio: number, lenItems: number): Record<string, number> => {
  const a = (i / lenItems) * 360;
  const p = (a * Math.PI) / 180;
  return {
    x: (Math.cos(p) * radio) || 0,
    y: (Math.sin(p) * radio) || 0,
  };
};

export default getPosition;