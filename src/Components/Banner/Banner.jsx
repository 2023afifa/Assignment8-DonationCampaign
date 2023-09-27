import { useState, useEffect } from 'react';
import '../Banner/Banner.css'
import AllCard from "../AllCard/AllCard";

const Banner = () => {
    const [searchCards, setSearchCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch("donation.json")
            .then(res => res.json())
            .then(data => setSearchCards(data))
    }, [])

    const handleSearch = e => {
        setSearchTerm(e.target.value);
        const filteredResults = searchCards.filter(item => item.category.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(filteredResults);
    }



    return (
        <div>
            <div className="my-8 bg-image">
                <div className='image-overlay'></div>
                <div className='pt-40 relative'>
                    <h1 className="text-2xl lg:text-4xl font-bold text-center mb-5">I Grow By Helping People In Need</h1>
                    <div className="text-center">
                        <input id='search-input' type="text" placeholder="Search here...." className="w-full max-w-xs border-2 rounded-l-lg p-3" />
                        <button value={searchTerm} onChange={handleSearch} className="h-[50px] w-24 bg-[#FF444A] text-white p-3 rounded-r-lg">Search</button>
                    </div>
                </div>
            </div>
            {
                filteredData.map(card => <AllCard key={card.id} card={card}></AllCard>)
            }
        </div>
    );
};

export default Banner;