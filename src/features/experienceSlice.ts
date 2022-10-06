import { createSlice } from '@reduxjs/toolkit'
import { experiencesData } from '../mockup'

export interface experienceInfo {
    date: string,
    location: string,
}
export interface expTask {
    id: number,
    taskName: string
}

export interface experience {
    experienceTitle: string,
    experienceCompany: string,
    experienceInfos: experienceInfo[],
    expTasks: expTask[]
}

const initialState: experience[] = experiencesData

export const experienceSlice = createSlice({
    name: 'formation',
    initialState,
    reducers: {
    },
})


export default experienceSlice.reducer