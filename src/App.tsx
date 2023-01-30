/** @format */

import { useState, useEffect } from "react"
import ProductDisplay from "./components/ProductDisplay"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getData } from "./slice/pageSlice"
import Modal from "./components/Modal"
import Pagination from "./components/Pagination"
import Input from "./components/Input"

function App() {
  const dispatch = useAppDispatch()
  const {
    data,
    getDataStatus: { loading },
  } = useAppSelector(store => store.page)
  const queryString = window.location.search

  useEffect(() => {
    if (data.length === 0 && !loading) {
      if (queryString) {
        dispatch(getData({ data: queryString.slice(1), callType: "copy" }))
      } else dispatch(getData({ data: 1, callType: "base" }))
    }
  }, [])

  return (
    <div className="App max-w-2xl mx-auto mt-[20vh]">
      <Input />
      <ProductDisplay />
      <Modal />
      <Pagination />
    </div>
  )
}

export default App
