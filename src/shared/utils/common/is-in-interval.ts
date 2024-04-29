export const isInInterval = ({ min, max, value }: { min: number, max: number, value: number }): boolean => {
  return value >= min && value <= max;
};
