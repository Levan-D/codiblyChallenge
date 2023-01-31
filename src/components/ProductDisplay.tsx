/** @format */

import React from "react"
import Row from "./Row"
import { useAppDispatch, useAppSelector } from "../app/hooks"

const ProductDisplay = () => {
  const {
    data,
    getDataStatus: { error, errorMessage, errorStatus },
  } = useAppSelector(store => store.page)

  if (error) {
    return (
      <div className="min-h-[370px] rounded-lg  bg-slate-800 p-2 ">
        <div className="mt-28 text-center text-lg text-red-500">
          {" "}
          Error: {errorStatus}
        </div>
        <div className="text-center text-lg text-red-500 "> {errorMessage}</div>
        <div className="text-center  text-lg"> Please, try again later</div>
      </div>
    )
  }

  return (
    <div className="min-h-[370px] rounded-lg  bg-slate-800 p-2">
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
