export const getLSItem = () => {
    const data = localStorage.getItem('drawer');
    const items = data ? JSON.parse(data) : [];

    const totalPrice = items.reduce((currentSumm: number, obj: any) => {
        return currentSumm + obj.price * obj.count;
    }, 0);

    return {
        items,
        totalPrice,
    };
};
