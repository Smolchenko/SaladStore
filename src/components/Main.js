import React  from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Button, Typography, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './Styles';

// const useStyles = makeStyles((theme) => ({
//     main: {
//         marginLeft: "54px",
//         fontSize: "1.1em",
//         // marginTop: "10%",
//         height: "100vh",
//         width: "70vw",
//         display: "flex",
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: "start",
//     },
//     links: {
//         textDecoration: "none",
//         color: "inherit"
//     }
// }));

export default function Main() {
    const classes = useStyles();
    // const [checked, setChecked] = useState(false);

    // useEffect(() => {
    //     setChecked(true)
    // }, []);

    return (
        <div>
            <div className={classes.main}>
                <h1>Eat Delicious & Stay Healthy</h1>
                <p>Welcome to The Health Boost! We believe in the power of good food to nourish our bodies, and those of our little ones, to make us feel the very best we can. By good food, we don’t mean complicated ingredients or recipes that take hours to rustle up. By good food we mean real food – fresh vegetables and fruit, free range lean meat, fish and poultry, eggs, whole grains, nuts, seeds and plant proteins such as chickpeas, beans and lentils. We try and avoid processed and refined food, which offer no nutrients to our body. We also observe the 80/20 rule.</p>
                    <br />
                    Enjoy a lovely, healthy meal today!
                    <br /><br />
                    {/* <Collapse in={checked} {...(checked ? {timeout: 500} : {})}> */}
                    <Button variant="contained" color="success">
                        <Link className={classes.links} to="/ingredients">
                                Start order here
                        </Link>
                    </Button>
                    {/* </Collapse> */}
                    <br /><br />
            </div>
        </div>
    )
}