import { createSlice } from '@reduxjs/toolkit'
import { informationData } from '../mockup'

export interface contactInofs {
    icon: string,
    value: string
}
export interface information {
    fullName: string,
    jobTitle: string,
    description: string,
    contactInofs: contactInofs[],

}

const initialState: information = informationData

export const headerSlice = createSlice({
    name: 'information',
    initialState,
    reducers: {
    },
})


export default headerSlice.reducer