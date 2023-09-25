import '../Banner/Banner.css'

const Banner = () => {
    return (
        <div className="mt-8 bg-image">
            <div className='image-overlay'></div>
            <div className='pt-40 relative'>
                <h1 className="text-4xl font-bold text-center mb-5">I Grow By Helping People In Need</h1>
                <div className="text-center">
                    <input type="text" placeholder="Search here...." className="w-full max-w-xs border-2 rounded-l-lg p-3" />
                    <button className="h-[50px] w-24 bg-[#FF444A] text-white p-3 rounded-r-lg">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;