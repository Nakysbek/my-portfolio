import {createSlice} from "@reduxjs/toolkit";

export type DataType = {
    id: number
    title: string
    proficiency: string
}

export type ExperienceDataType = {
    id: number
    heading: string
    data: DataType[]
}

const initialState: ExperienceDataType[] = [
    {
        id: 1,
        heading: 'Frontend Development',
        data: [
            {id: 1, title: 'HTML', proficiency: 'Experienced'},
            {id: 2, title: 'CSS', proficiency: 'Intermediate'},
            {id: 3, title: 'JavaScript', proficiency: 'Experienced'},
            {id: 4, title: 'TypeScript', proficiency: 'Experienced'},
            {id: 5, title: 'React', proficiency: 'Experienced'},
            {id: 6, title: 'Redux', proficiency: 'Experienced'},
            {id: 7, title: 'Zustand', proficiency: 'Experienced'},
            {id: 8, title: 'MobX', proficiency: 'Experienced'},
            {id: 9, title: 'Redux-Toolkit', proficiency: 'Experienced'},
            {id: 10, title: 'Next', proficiency: 'Experienced'},
        ]

    },
    {
        id: 2,
        heading: 'Backend Development',
        data: [
            {id: 1, title: 'Node.JS', proficiency: 'Intermediate'},
            {id: 2, title: 'Express.JS', proficiency: 'Intermediate'},
            {id: 3, title: 'Nest.JS', proficiency: 'Basic'},
            {id: 4, title: 'MongoDB', proficiency: 'Basic'},
        ]
    }
]


export const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {}
})

export default experienceSlice.reducer;
