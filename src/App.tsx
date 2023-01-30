/** @format */

import { useState, useEffect } from "react"
import ProductDisplay from "./components/ProductDisplay"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { getData } from "./slice/pageSlice"
import Modal from "./components/Modal"
import Pagination from "./components/Pagination"

function App() {
  const dispatch = useAppDispatch()
  const {
    data,
    getDataStatus: { loading },
  } = useAppSelector(store => store.page)

  useEffect(() => {
    if (data.length === 0 && !loading) {
      dispatch(getData({ data: 1 }))
    }
  }, [])

  return (
    <div className="App max-w-4xl mx-auto">
      <ProductDisplay />
      <Modal />
      <Pagination />
    </div>
  )
}

export default App
