import { useState, useEffect } from 'react';
import '../Banner/Banner.css'
import AllCard from '../AllCard/AllCard';

const Banner = () => {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch("donation.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const handleSearch = () => {
        if (searchTerm === "") {
            setCards(cards);
        }
        else {
            const filteredResults = cards.filter(item => item.category.toLowerCase().includes(searchTerm.toLowerCase()));
            console.log(filteredResults);
            setCards(filteredResults);
        }
    }

    return (
        <div>
            <div className="my-8 bg-image">
                <div className='image-overlay'></div>
                <div className='pt-40 relative'>
                    <h1 className="text-2xl lg:text-4xl font-bold text-center mb-5">I Grow By Helping People In Need</h1>
                    <div className="text-center">
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Search here...." className="w-full max-w-xs border-2 rounded-l-lg p-3" />
                        <button onClick={handleSearch} className="h-[50px] w-24 bg-[#FF444A] text-white p-3 rounded-r-lg">Search</button>
                    </div>
                </div>
            </div>
            <div className="my-20 mx-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8">
                    {
                        cards.map(card => <AllCard key={card.id} card={card}></AllCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;