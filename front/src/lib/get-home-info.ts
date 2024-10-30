import { query } from "./strapi";
const { STRAPI_HOST } = process.env 

export function getHomeInfo (){
    return query('home?populate=Cover').then(res => {
        console.log(res.data)
        const {Title, Description, Cover } = res.data
        const PresentationImg = `${STRAPI_HOST}${Cover.url}`
        return {Title, Description, PresentationImg}
    })
}