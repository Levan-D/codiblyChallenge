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

  useEffect(() => {
    if (data.length === 0 && !loading) {
      dispatch(getData({ data: 1, callType: "base" }))
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
