/** @format */

import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import axios from "axios"

export const getData = createAsyncThunk(
  "data/get",
  async ({ data }: { data: number }, { rejectWithValue }) => {
    console.log(data)
    try {
      const response = await axios({
        method: "get",
        url: `https://reqres.in/api/products?page=${data}&per_page=5`,
        headers: {},
      })

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

interface Data {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}
interface InitialState {
  modalVisibility: boolean
  modalData: Data | undefined
  getDataStatus: {
    error: boolean
    loading: boolean
    success: boolean
  }
  currentPage: number | undefined
  totalPages: number | undefined
  data: Data[]
}

const initialState: InitialState = {
  modalVisibility: false,
  modalData: undefined,
  getDataStatus: {
    error: false,
    loading: false,
    success: false,
  },
  currentPage: undefined,
  totalPages: undefined,
  data: [],
}

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setModalVisibility: (state, action: PayloadAction<boolean>) => {
      state.modalVisibility = action.payload
    },
    setModalData: (state, action: PayloadAction<number>) => {
      let modData = state.data.find(obj => obj.id === action.payload)
      state.modalData = modData
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getData.pending, state => {
        state.getDataStatus.loading = true
        state.getDataStatus.success = false
        state.getDataStatus.error = false
      })
      .addCase(getData.fulfilled, (state, action: PayloadAction<any>) => {
        state.getDataStatus.loading = false
        state.getDataStatus.success = true

        state.data = action.payload.data.data
        state.currentPage = action.payload.data.page
        state.totalPages = action.payload.data.total_pages
      })
      .addCase(getData.rejected, (state, action: PayloadAction<any>) => {
        state.getDataStatus.loading = false

        // state.getDataStatus.error = action.payload.message
      })
  },
})

// export const selectBoxShadowTabs = createSelector(
//   (state: RootState) => state.boxShadow,
//   boxShadow =>
//     boxShadow.boxShadowData.map((z, i) => ({
//       name: z.tabName,
//       id: z.id,
//       index: i,
//     }))
// )

export const { setModalVisibility, setModalData } = pageSlice.actions
export default pageSlice.reducer
