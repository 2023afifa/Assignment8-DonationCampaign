import { useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { getStoreDonation } from "../../Utility/LocalStorage";

const Statistics = () => {
    const stats = useLoaderData();
    const [yourDonation, setYourDonation] = useState([]);

    useEffect(() => {
        const storeYourDonateId = getStoreDonation();
        if (totalCard > 0) {
            const yourPaidDonation = [];
            for (const id of storeYourDonateId) {
                const stat = stats.find(stat => stat.id === id);
                if (stat) {
                    yourPaidDonation.push(stat);
                }
            }
            setYourDonation(yourPaidDonation);
        }
        
    }, [])

    const totalCard = stats.length;
    const yourCard = yourDonation.length;
    const fraction = yourCard / totalCard;
    const yourFraction = fraction * 100;
    const totalFraction = (100 - yourFraction);

    const data = [
        ["Donation of all", "Percentage"],
        ["Total Donation", totalFraction],
        ["Your Donation", yourFraction],
    ];

    return (
            <div>
                <h2 className="text-2xl font-bold text-center">Statistics</h2>
                <Chart
                    chartType="PieChart"
                    data={data}
                    width={"100%"}
                    height={"500px"}
                />
            </div>
    );
};

export default Statistics;