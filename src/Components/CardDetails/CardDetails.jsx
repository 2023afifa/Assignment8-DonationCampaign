import { useLoaderData, useParams } from "react-router-dom";
import './CardDetails.css'

const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    return (
        <div className="mt-10">
            <div className="mx-60">
                <div className="image-container">
                    <img className="h-[500px]" src={card.picture} alt="" />
                </div>
                <button className="btn text-white border-none absolute mt-[420px] -ml-[770px]" style={{ background: card.text_button_bg }}>Donate ${card.price}</button>
            </div>
            <h2 className="text-3xl font-bold my-5">{card.title}</h2>
            <p className="text-lg">{card.description}</p>
        </div>
    );
};

export default CardDetails;