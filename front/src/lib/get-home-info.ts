import { query } from "./strapi";

export function getHomeInfo (){
    return query('homes').then(res => {
        console.log(res.data[0])
        return res.data[0]
    })
}