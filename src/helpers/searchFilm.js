export const search = (data, filter) => {
  const filteredData = data.filter((item) =>
    item.title.trim().toLowerCase().includes(filter.trim().toLowerCase())
  );
  return filteredData;
};
