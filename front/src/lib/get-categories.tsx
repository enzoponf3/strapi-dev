import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export function getCategories() {
  return query(
    "product-categories?fields[0]=name&fields[1]=description&fields[2]=slug&fields[3]=createdAt&populate[image][fields][0]=url&sort=createdAt:asc"
  ).then((res) => {
    return res.data.map((category) => {
      const { name, description, image, slug } = category;
      const imgUrl = `${image}${STRAPI_HOST}`;
      return { name, description, imgUrl, slug };
    });
  });
}
