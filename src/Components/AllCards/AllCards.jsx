import { useEffect, useState } from "react";
import AllCard from "../AllCard/AllCard";

const AllCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("donation.json")
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="my-20 mx-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8">
                {
                    cards.map(card => <AllCard key={card.id} card={card}></AllCard>)
                }
            </div>
        </div>
    );
};

export default AllCards;