import React, { useState } from 'react';
import styles from './food.module.css';

const Food = ({ data , ind }) => {
    const { strMealThumb, strMeal, strArea, strCategory} = data[ind];
    const [detail,setdetail] = useState(false)
    let list = []
    for (let i = 9; i < 29; i++) {
        const a =  Object.values(data[ind])[i]
        if(a) list.push(a)
}
    const [ingredient, setingredient] = useState(list);
    const detailset = () => {
        if (detail) setdetail(false)
        else setdetail(true)
    }

    const youtubeVideoID = data[ind].strYoutube.split('=')[1]
    console.log(youtubeVideoID);
    return (
        <div>{console.log(ind)}
            <div class='card' className={styles.food}>
                 <img className="card-img-top" src={strMealThumb} alt="Card image cap" width='1rem' height='390rem'/>
            <div className="card-body" style={{background:'rgb(230,230,230)',padding:'25px',borderRadius:'10px'}}>
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text" style={{marginTop:'20px'}}>{strArea}</p>
                    <p>{strCategory}</p>
                    {
                        detail &&
                        <div>
                            <p>(Instructions)</p>
                            <p style={{ color: 'green',fontStyle:'italic' ,padding:'5px',lineHeight:'35px' }}>{data[ind].strInstructions}</p>
                            <p>(ingredient)</p>
                            {
                                ingredient.map(item =>
                                    <p style={{color:'green', fontWeight:'bold'}}>{item}</p>
                                )
                            }
                            <p>Youtube Video</p>
                                <iframe width="420" height="315"
                                src={`https://www.youtube.com/embed/${youtubeVideoID}`}>
                                </iframe>
                            </div>  
                    }
                    <a className="btn btn-success" onClick={detailset} style={{ color: 'white' }}>{detail ? "Close Detail" : "Go to Detail"}</a>
        </div>
    </div>
</div>
);
};

export default Food;