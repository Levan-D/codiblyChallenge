/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getData } from "../slice/pageSlice"

const Pagination = () => {
  const dispatch = useAppDispatch()
  const { currentPage, totalPages } = useAppSelector(store => store.page)
  console.log(currentPage)
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
      dispatch(getData({ data: currentPage + 1 }))
    }
  }
  const handlePrev = () => {
    if (currentPage !== undefined) {
      if (currentPage <= 1) {
        return
      } else {
        dispatch(getData({ data: currentPage - 1 }))
      }
    }
  }

  const handleClick = (i: number) => {
    if (currentPage === i + 1) {
      return
    } else dispatch(getData({ data: i + 1 }))
  }

  return (
    <div className="mx-auto w-fit mt-8">
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
                  currentPage === i + 1 ? "bg-slate-400 rounded-md text-slate-900 " : ""
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
    </div>
  )
}

export default Pagination
