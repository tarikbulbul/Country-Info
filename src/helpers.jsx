// helpers.js
export const filterCountries = (data, search) => {
    return data.filter((item) =>
      item.name.common.toLowerCase().includes(search.toLowerCase()) ||
      item.name.official.toLowerCase().includes(search.toLowerCase()) ||
      item.cca2.toLowerCase().includes(search.toLowerCase()) ||
      item.cca3.toLowerCase().includes(search.toLowerCase())
    );
  };