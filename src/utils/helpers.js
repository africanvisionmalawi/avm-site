export const getFeaturedLinks = (array, featured) => {
  // this gets both featued and non featured links, depending on the value of
  // the second element passed in
  let featuredLinks = array.filter((e) => e.featured === featured);
  return featuredLinks;
};

/**
 * Returns the current date in YYYY-MM-DD format
 */
export const getCurrentDate = () => {
  const d = new Date();
  let month = (d.getMonth() + 1).toString();
  if (month.length < 2) {
    month = `0${month}`;
  }
  let day = d.getDate().toString();
  if (day.length < 2) {
    day = `0${day}`;
  }
  return `${d.getFullYear()}-${month}-${day}`;
};
