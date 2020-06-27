export const getFeaturedLinks = (array, featured) => {
  // this gets both featued and non featured links, depending on the value of
  // the second element passed in
  let featuredLinks = array.filter((e) => e.featured === featured);
  return featuredLinks;
};
