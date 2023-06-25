import { Card, Grid, GridItem } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import CreateCard from './Card'
import axios from '../api';

import '../index.css';

// import fetchData from 'App.jsx'

const CardsList = () => {
    const [data, setData] = useState(null);

    const fetchData = async (dayInfo) => {
        const response = await axios.get('/feed',
        {params: {
            start_date: dayInfo,
            end_date: dayInfo,}
            ,});
        const [date, neos] = Object.entries(response.data.near_earth_objects)[0];

        setData();
    }



    useEffect(() => {
        const today = new Date();
        fetchData(today);
    }, []);
    


    return (
        <div>
        
        <CreateCard />
        </div>
        
    )
}

export default CardsList;


       

