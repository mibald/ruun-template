export const yearsMock: { label: string }[] = Array.from({ length: 46 }, (_, index) => ({
    label: (1980 + index).toString()
  }));
  
  // Result:
  // [
  //   { label: "1980" },
  //   { label: "1981" },
  //   { label: "1982" },
  //   ...
  //   { label: "2025" }
  // ]