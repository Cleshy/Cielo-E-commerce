export const setFirstLetterUppercase = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatCategory = (category: string): string => {
  if (category.includes("-")) {
    return category
      .split("-")
      .map((str) => setFirstLetterUppercase(str))
      .join(" ");
  }

  return setFirstLetterUppercase(category);
};
