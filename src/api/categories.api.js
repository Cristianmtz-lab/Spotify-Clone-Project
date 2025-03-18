"use strict";

// custom modules

const { getData } = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');

const getCategories = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
  const { data: { categories: infoCategories } } = await getData(`/browse/categories?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...infoCategories };
}

module.exports = {
  getCategories
}