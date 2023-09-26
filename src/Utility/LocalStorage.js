const getStoreDonation = () => {
    const storeDonation = localStorage.getItem("donate");
    if (storeDonation) {
        return JSON.parse(storeDonation);
    }
    return [];
}

const saveDonation = id => {
    const storeDonations = getStoreDonation();
    const exist = storeDonations.find(donateId => donateId === id);
    if (!exist) {
        storeDonations.push(id);
        localStorage.setItem("donate", JSON.stringify(storeDonations));
    }
}

export { getStoreDonation, saveDonation };