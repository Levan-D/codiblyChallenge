/** @format */

import React from "react"
import { useAppDispatch } from "../app/hooks"
import { setModalVisibility, setModalData } from "../slice/pageSlice"

type RowProps = {
  id: number
  name: string
  year: number
  color: string
}

const Row = ({ id, name, year, color }: RowProps) => {
  const dispatch = useAppDispatch()
  return (
    <div
      onClick={() => {
        dispatch(setModalVisibility(true))
        dispatch(setModalData(id))
      }}
      style={{ backgroundColor: color }}
      className="flex justify-between py-4 px-10 rounded-md border cursor-pointer border-slate-400 shadow-[2px_4px_4px_0px_rgba(255,255,255,0.15),inset_-8px_-8px_12px_0px_rgba(0,_0,_0,0.25)]"
    >
      <div className="basis-1/4 ">{id}</div>
      <div className="basis-1/2 font-bold ">{name}</div>
      <div className="basis-1/4 text-right ">{year}</div>
    </div>
  )
}

export default Row
