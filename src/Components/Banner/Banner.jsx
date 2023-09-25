const Banner = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-20">I Grow By Helping People In Need</h1>
            <div>
                <input type="text" placeholder="Search here...." className="w-full max-w-xs border-2 rounded-l-lg p-3" />
                <button className="bg-[#FF444A] text-white p-3 rounded-r-lg">Search</button>
            </div>
        </div>
    );
};

export default Banner;