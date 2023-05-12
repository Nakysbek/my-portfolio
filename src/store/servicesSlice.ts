import {createSlice} from "@reduxjs/toolkit";

export type DataType = {
    id: number
    title: string
}

export type ServicesDataType = {
    id: number
    heading: string
    data: DataType[]
}

const initialState: ServicesDataType[] = [
    {
        id: 1,
        heading: 'UI/UX Design',
        data: [
            {id: 1, title: 'Creating an amazing design for an application'},
            {id: 2, title: 'Visually appealing, polished, and professional web app'},
            {id: 3, title: 'Optimized for mobile devices and search engines'},
            {id: 4, title: 'Matching the current trends'},
            {id: 5, title: 'Intuitive to use'},
            {id: 6, title: 'With easily accessible contact information'}
        ]
    },
    {
        id: 2,
        heading: 'Frontend Development',
        data: [
            {id: 1, title: 'Single page applications'},
            {id: 2, title: 'Cross-platform and hybrid apps'},
            {id: 3, title: 'Progressive web apps'},
            {id: 4, title: 'Using technologies proven by time'},
            {id: 5, title: 'Regularly checked for any broken links or not working scripts'},
            {id: 6, title: 'Website Maintenance'},
            {id: 7, title: 'Customer Relationship Management'},
            {id: 8, title: 'Web Hosting'},
        ]
    },
    {
        id: 3,
        heading: 'Backend Development',
        data: [
            {id: 1, title: 'API Development and Integration with frontend'},
            {id: 2, title: 'Back-End Software Development'},
            {id: 3, title: 'End-to-end Security'},
            {id: 4, title: 'Scalability'},
            {id: 5, title: 'Latest Technology'},
            {id: 6, title: 'Full-cycle Backend Development'},
            {id: 7, title: 'Cloud Back-End Solutions'},
            {id: 8, title: 'Backend Refactoring'},
        ]
    }
];

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {}
})

export default servicesSlice.reducer;