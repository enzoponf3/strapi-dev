import { getHomeInfo } from "@/lib/get-home-info"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export const Hero = async () => {
  const { Title, Phone, Email, Description, Address } = await getHomeInfo()
  console.log(Phone)

  return (
    <>
      <h1>{Title}</h1>
      <h3>
        <BlocksRenderer content={Description} />
      </h3>
      <h4>Phone {Phone}</h4>
      <h4>Email {Email}</h4>
      <h4>Address {Address}</h4>
    </>
  )
}
