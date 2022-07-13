const sort = (objs) => {
  objs.sort((a, b) => (a.order > b.order ? 1 : b.order > a.order ? -1 : 0));
};

export default sort;
