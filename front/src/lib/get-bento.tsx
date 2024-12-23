import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export function getBento() {
  return query(
    "bentos?fields[0]=bento_title&fields[1]=bento_description&fields[2]=createdAt&populate[bento_img][fields][0]=url&sort=createdAt:asc"
  ).then((res) => {
    return res.data.map((bento) => {
      const { bento_title, bento_description, bento_img: rawImage } = bento;
      const image = `${STRAPI_HOST}${rawImage.url}`;
      return { bento_title, bento_description, image };
    });
  });
}
