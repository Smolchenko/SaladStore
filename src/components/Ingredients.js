import { CssBaseline, ratingClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useStyles } from './Styles';
import videos from "../salad.json";
import axios from "axios";
import { getData } from '../utils';

function Ingredients() {
    const classes = useStyles();
    // const [saladData, setSaladData] = useState([]);

    // useEffect(() => {
    //     axios.get("../data/salad.json").then((response) => {
    //         setSaladData(response.data.items);
    //     })

    //     // const fetchData = async() => {
    //     //     try {
    //     //         const { saladData: response } = await axios.get("../data/salad.json")
    //     //         .then(console.log(saladData));
    //     //         setSaladData(response);
    //     //     }
    //     //     catch (error) {
    //     //         console.log(error);
    //     //     }
    //     // }
    //     // fetchData();

    //     // axios
    //     // .get("./datasalad.json")
    //     // .then((res)=> console.log(res))
    //     // .catch(err => console.log(err))
    // }, []);

    // const [apiNews, setApiNews] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const {data} = await axios.get('salad.json');
    //         setApiNews(data);
    //     }
    //     fetchData();
    // }, []);


    const [data, setData] = useState();
   
    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = async () => {
       try {
         const response = await getData('data.json', 'json');
         setData(response.items);
       } catch (error) {
         console.error(error);
       }
    };
    
    return (
        <>
            <div className={classes.main}>
                <CssBaseline /> 
                <h1 className={classes.h1}>Choose Your Ingredients</h1>
                <ul>
                    {/* {apiNews && apiNews.map(item => ( */}
                        {/* <li>{item}</li> */}
                    {/* ))} */}
                    {
                        data && data.length>0 && data.map((item)=><p>{item.price}</p>)
                    }
                </ul>
                {/* <Link to="/">Home</Link> */}
            </div>
        </>
    )
}

export default Ingredients;