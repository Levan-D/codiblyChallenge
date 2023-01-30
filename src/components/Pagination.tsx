/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getData } from "../slice/pageSlice"

const Pagination = () => {
  const dispatch = useAppDispatch()
  const {
    currentPage,
    totalPages,
    getDataStatus: { error },
  } = useAppSelector(store => store.page)

  let pages = []
  if (totalPages !== undefined) {
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1)
    }
  }

  const handleNext = () => {
    if (currentPage === totalPages) {
      return
    } else if (currentPage !== undefined) {
      dispatch(getData({ data: currentPage + 1, callType: "base" }))
    }
  }
  const handlePrev = () => {
    if (currentPage !== undefined) {
      if (currentPage <= 1) {
        return
      } else {
        dispatch(getData({ data: currentPage - 1, callType: "base" }))
      }
    }
  }

  const handleClick = (i: number) => {
    if (currentPage === i + 1) {
      return
    } else dispatch(getData({ data: i + 1, callType: "base" }))
  }

  return (
    <div className="mx-auto w-fit mt-8 select-none">
      {!error && (
        <div className="flex gap-4">
          {totalPages !== undefined && (
            <div className="flex gap-4">
              <div
                onClick={handlePrev}
                className={`${
                  currentPage === 1 && "opacity-20"
                } cursor-pointer hover:bg-slate-400 px-2 rounded-md hover:text-slate-900`}
              >
                Prev
              </div>
              {pages.map((page, i) => (
                <div
                  key={i}
                  onClick={() => handleClick(i)}
                  className={`${
                    currentPage === i + 1 ? "bg-slate-300 rounded-md text-slate-900 " : ""
                  }  w-6 cursor-pointer text-center`}
                >
                  {page}
                </div>
              ))}
              <div
                onClick={handleNext}
                className={`${
                  currentPage === totalPages && "opacity-20"
                } cursor-pointer hover:bg-slate-400 px-2 rounded-md hover:text-slate-900`}
              >
                Next
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Pagination
