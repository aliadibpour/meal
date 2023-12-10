import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Food from './Food';
import Nav from './Nav';
import Icon from './Icon';
import Loader from './Loader';

const Meail = () => {
    const [randomMeal, setrndmeal] = useState();
    const [searching, setsearching] = useState(false)
    const [result, setresult] = useState()


    const searchuser = (boolaen,food) => {
        setsearching(boolaen)
        setresult(food)
    }
    useEffect(() => {
        const GetOneMeail = async() => {
            let a = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            console.log(a);
            setrndmeal(a.data.meals)
        }
        GetOneMeail()
    }, [])
    if(!randomMeal) return <Loader />
    return (
        <div style={{ background: 'withe',height:'100%'}}>
            <Nav handleSearchBox={searchuser} />
            {searching && <Icon setsearching={setsearching} /> }
            {randomMeal && !searching && <Food data={randomMeal} ind={0} />}
            {result && result.length && searching && result.map((item, index) => <Food data={result} ind={index} />)}
            {!result && searching && <p style={{fontSize:'30px',textAlign:'center',marginTop:'15rem'}}>No found result</p>}
        </div>
    );
};

export default Meail;