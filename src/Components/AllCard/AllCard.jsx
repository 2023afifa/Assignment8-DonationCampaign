const AllCard = ({ card }) => {
    const { picture, title, category, card_bg, category_bg, text_button_bg } = card;

    return (
        <div>
            <div className="card w-80 rounded-lg" style={{background: card_bg}}>
                <figure><img src={picture} className="w-full" alt="" /></figure>
                <div className="card-body">
                    <div className="card-actions">
                        <div className="badge badge-outline" style={{color: text_button_bg, background: category_bg}}>{category}</div>
                    </div>
                    <h2 className="card-title" style={{color: text_button_bg}}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default AllCard;