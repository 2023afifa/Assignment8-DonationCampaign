import { useLoaderData, useParams } from "react-router-dom";
import './CardDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../Utility/LocalStorage";

const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    const handleDonation = () => {
        saveDonation(idInt);
        toast("Your donation received successfully");
    }

    return (
        <div className="mt-10">
            <div className="mx-3 md:mx-10 lg:mx-60">
                <div className="image-container">
                    <img className="h-[400px] md:h-[500px]" src={card.picture} alt="" />
                </div>
                <button onClick={handleDonation} className="btn text-white border-none absolute mt-[320px] md:mt-[420px] -ml-[380px] md:-ml-[650px] lg:-ml-[770px]" style={{ background: card.text_button_bg }}>Donate ${card.price}</button>
            </div>
            <div className="mx-5">
                <h2 className="text-xl lg:text-3xl font-bold my-5">{card.title}</h2>
                <p className="text-sm lg:text-lg">{card.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;