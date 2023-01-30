/** @format */

import React, { useRef, useEffect } from "react"
import { setModalVisibility } from "../slice/pageSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"

const Modal = () => {
  const dispatch = useAppDispatch()
  const { modalVisibility, modalData } = useAppSelector(store => store.page)
  const refOne = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    dispatch(setModalVisibility(false))
  }
  useEffect(() => {
    if (refOne !== null) {
      refOne.current?.focus()
    }
  }, [modalVisibility])
  return (
    <>
      {modalVisibility && (
        <div className="absolute w-screen h-screen bg-[rgba(30,41,55,0.2)] top-0 left-0 backdrop-blur-sm  	">
          <div
            ref={refOne}
            tabIndex={0}
            onBlur={handleClick}
            className="outline-none bg-slate-700 mx-auto min-w-[350px]   rounded-lg w-fit mt-[calc(50vh-250px)] h-fit "
          >
            {modalData && (
              <div className="p-4">
                <div className="flex justify-end ">
                  <div
                    onClick={handleClick}
                    className=" cursor-pointer rounded-full hover:bg-slate-200 hover:text-slate-900 text-xl px-2 font-bold right-0"
                  >
                    &#215;
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex text-left">
                    <div className="basis-3/4 font-bold">ID:</div>
                    <div className="basis-1/4">{modalData.id}</div>
                  </div>
                  <hr className="opacity-20 mx-4 my-3" />
                  <div className="flex">
                    <div className="basis-3/4 font-bold">Name:</div>
                    <div className="basis-1/4">{modalData.name}</div>
                  </div>
                  <hr className="opacity-20 mx-4 my-3" />
                  <div className="flex">
                    <div className="basis-3/4 font-bold">Year:</div>
                    <div className="basis-1/4">{modalData.year}</div>
                  </div>
                  <hr className="opacity-20 mx-4 my-3" />
                  <div className="flex">
                    <div className="basis-3/4 font-bold">Color:</div>
                    <div className="basis-1/4">{modalData.color}</div>
                  </div>
                  <hr className="opacity-20 mx-4 my-3" />
                  <div className="flex">
                    <div className="basis-3/4 font-bold">Pantone Value:</div>
                    <div className="basis-1/4">{modalData.pantone_value}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
