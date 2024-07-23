export const getYears = (range: number = 100): string[] => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: range }, (_, i) => (currentYear - i).toString());
};

export const getMonths = (): string[] => {
  return Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
};

export const getDays = (): string[] => {
  return Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
};
