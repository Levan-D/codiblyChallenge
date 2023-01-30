/** @format */

import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getData } from "../slice/pageSlice"
import SendIcon from "../assets/send.png"

const Input = () => {
  const dispatch = useAppDispatch()
  const {
    data,
    getDataStatus: { loading },
  } = useAppSelector(store => store.page)

  const [inputText, setInputText] = useState<string | number>(" ")

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!loading) {
      dispatch(getData({ data: Number(inputText), callType: "id" }))

      setInputText(() => " ")
    }
  }
  return (
    <div className="bg-slate-800  p-2 rounded-lg mb-4 flex ">
      <div
        onClick={() => dispatch(getData({ data: 1, callType: "base" }))}
        className=" h-7 text-2xl font-bold px-2 sm:hover:brightness-90 active:brightness-75 duration-200 cursor-pointer"
      >
        &#8635;
      </div>
      <form className="grow" onSubmit={handleFormSubmit}>
        <div className="flex justify-between">
          <input
            type="number"
            required
            value={inputText}
            onChange={e => {
              setInputText(e.target.value)
            }}
            autoComplete="off"
            name="name"
            className={`w-full mr-4 rounded-md text-slate-900 px-2 py-1 outline duration-200  outline-transparent bg-slate-200 `}
          />

          <button type="submit" value="Rename" className=" h-7">
            <img
              className="h-6 px-2 sm:hover:brightness-90 active:brightness-75 duration-200 "
              src={SendIcon}
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input
