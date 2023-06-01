import {createSlice} from "@reduxjs/toolkit";
import IMG1 from '../assets/cardTraining.jpeg'
import IMG2 from '../assets/cityFood.jpg.jpeg'
import IMG3 from '../assets/onlineKezek.jpeg'
import IMG4 from '../assets/newPortal.jpeg'
import IMG5 from '../assets/artGallery.jpeg'
import IMG6 from '../assets/react-typescript.jpeg'

export type PortfolioDataType = {
    id: number
    image: any
    title: string
    github: string
    demo: string
}

const initialState: PortfolioDataType[] = [
    {
        id: 1,
        image: IMG1,
        title: "Card training",
        github: 'https://github.com/Nakysbek/social-media-with-authorization',
        demo: 'https://social-media-with-authorization.pages.dev/'
    },
    {
        id: 2,
        image: IMG2,
        title: "City-food",
        github: 'https://github.com/Nakysbek/cityfood.kz',
        demo: 'https://cityfood-kz.pages.dev/'
    },
    {
        id: 3,
        image: IMG3,
        title: "Online Kezek",
        github: 'https://github.com/Nakysbek/online-kezek',
        demo: 'https://online-kezek-fawn.vercel.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: "News portal",
        github: 'https://github.com/Nakysbek/newsPortal',
        demo: 'https://dribbble.com'
    },
    {
        id: 5,
        image: IMG5,
        title: "Art Gallery",
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 6,
        image: IMG6,
        title: "Pet project react/typescript",
        github: 'https://github.com/Nakysbek/react-typescript',
        demo: 'https://dribbble.com'
    }
];

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {}
})

export default portfolioSlice.reducer;