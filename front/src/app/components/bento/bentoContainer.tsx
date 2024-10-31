import { getBento } from "@/lib/get-bento";
import * as React from "react";

export default async function BentoContainer() {
  const bentos = await getBento();
  return (
    <div>
      {bentos.map((item) => {
        return item.bento_title;
      })}
    </div>
  );
}
