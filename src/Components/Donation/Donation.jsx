const Donation = ({ card }) => {
    const { picture, title, category, price, category_bg, card_bg, text_button_bg } = card;

    return (
        <div className="mb-5">
            <div className="card card-side h-48 w-[650px]" style={{background: card_bg}}>
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <div className="badge badge-outline" style={{ color: text_button_bg, background: category_bg }}>{category}</div>
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="font-bold" style={{color: text_button_bg}}>$ {price}</p>
                    <div className="card-actions">
                        <button className="btn text-white" style={{background: text_button_bg}}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;