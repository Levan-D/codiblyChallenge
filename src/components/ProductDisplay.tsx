/** @format */

import React from "react"
import Row from "./Row"
import { useAppDispatch, useAppSelector } from "../app/hooks"

const ProductDisplay = () => {
  const { data } = useAppSelector(store => store.page)

  return (
    <div className="min-h-[370px] bg-slate-800  p-2 rounded-lg">
      {data.length !== 0 &&
        data.map((row, i) => (
          <div key={i} className=" mb-4 last:mb-0">
            <Row id={row.id} name={row.name} year={row.year} color={row.color} />
          </div>
        ))}
    </div>
  )
}

export default ProductDisplay
