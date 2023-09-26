import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonation } from "../../Utility/LocalStorage";
import Donation from "../Donation/Donation";

const Donations = () => {
    const donates = useLoaderData();

    const [payDonation, setPayDonation] = useState([]);
    const [displayDonation, setDisplayDonation] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storeDonateId = getStoreDonation();
        if (donates.length > 0) {
            const donationPaid = [];
            for (const id of storeDonateId) {
                const donate = donates.find(donate => donate.id === id);
                if (donate) {
                    donationPaid.push(donate);
                }
            }
            setPayDonation(donationPaid);
            setDisplayDonation(donationPaid);
        }
        
    }, [])

    return (
        <div className="my-10">
            <div className="grid lg:grid-cols-2">
                {
                    displayDonation.slice(0, dataLength).map(card => <Donation key={card.id} card={card}></Donation>)
                }
            </div>

            <div className={dataLength === displayDonation.length ? "hidden" : ""}>
                <div className="text-center mt-8">
                    <button onClick={() => setDataLength(displayDonation.length)} className="btn bg-[#009444] text-white">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donations;