export const convertDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const convertYearMonth = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

export const sleep = async (time) => {
  await new Promise((resolve) => setTimeout(resolve, time));
};
