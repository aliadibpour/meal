import axios from 'axios';
import React, { useState } from 'react';
import styles from './nav.module.css';

const Nav = ({handleSearchBox}) => {
    const [search, setsearch] = useState('');

    const btnsearch = async () => {
        const getapi = async() => {
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            setsearch('')
            handleSearchBox(true,data.data.meals)
        }
        if (search.length == 1) {
            getapi()
        }
        else if (search.length > 1) {
            getapi()
        }
        else if(!search.length) {
            alert('fill search box')
        }
    }
    return (
        <div className={styles.nav}>
        <nav class="navbar navbar-light bg-light" style={{padding:'1.4rem'}}>
             <form class="form-inline">
                    <input class="form-control mr-sm-2" type='text' placeholder="Search" aria-label="Search" style={{ marginLeft: '3rem' }}
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                    />
             <a class="btn btn-success" style={{color:'white'}} onClick={btnsearch}>Search</a>
            </form>
        </nav>
        </div>
    );
};

export default Nav;