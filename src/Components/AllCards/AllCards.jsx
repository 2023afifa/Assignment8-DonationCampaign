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
        <div className="my-20">
            <div className="grid lg:grid-cols-4 gap-10">
                {
                    cards.map(card => <AllCard key={card.id} card={card}></AllCard>)
                }
            </div>
        </div>
    );
};

export default AllCards;