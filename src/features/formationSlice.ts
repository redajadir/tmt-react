import { createSlice } from '@reduxjs/toolkit'
import { formationsData } from '../mockup'

export interface formationInfo {
    date: string,
    location: string,
}
export interface expTask {
    id: number,
    taskName: string
}

export interface formation {
    formationTitle: string,
    formationCompany: string,
    formationInfos: formationInfo[],
}

const initialState: formation[] = formationsData

export const formationSlice = createSlice({
    name: 'formation',
    initialState,
    reducers: {
    },
})


export default formationSlice.reducer