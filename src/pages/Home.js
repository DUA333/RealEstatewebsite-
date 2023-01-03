import Banner from '../components/Banner';
import React from 'react'
import HouseList from '../components/HouseList';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <div className='min-h-[1800px]'>
            <Banner />

            <Searchbar />

            <div className='py-3'>
                <HouseList />
            </div>
        </div>
    );
};
export default Home;
