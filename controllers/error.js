const getError = (req, res, render) => {
  res.status(404).render("404");
};

export default getError;
