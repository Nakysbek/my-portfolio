import {createSlice} from "@reduxjs/toolkit";
import IMG1 from '../assets/cardTraining.jpeg'
import IMG2 from '../assets/onlineKezek.jpeg'
import IMG3 from '../assets/newPortal.jpeg'
import IMG4 from '../assets/artGallery.jpeg'
import IMG5 from '../assets/react-typescript.jpeg'

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
        github: 'https://github.com/Sultan-suan/final-projecct',
        demo: 'https://dribbble.com'
    },
    {
        id: 2,
        image: IMG2,
        title: "Online Kezek",
        github: 'https://github.com/Nakysbek/online-kezek',
        demo: 'https://online-kezek-fawn.vercel.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: "News portal",
        github: 'https://github.com/Nakysbek/newsPortal',
        demo: 'https://dribbble.com'
    },
    {
        id: 4,
        image: IMG4,
        title: "Art Gallery",
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 5,
        image: IMG5,
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