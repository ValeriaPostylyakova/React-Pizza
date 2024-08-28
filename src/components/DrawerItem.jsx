import plus from '../assets/img/plus.svg';

export const DrawerItem = ({ imageUrl, title, types, sizes, price }) => {
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>
                    {types}, {sizes} см.
                </p>
            </div>
            <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus">
                    <img src={plus} alt="plus" />
                </div>
                <b>2</b>
                <div className="button button--outline button--circle cart__item-count-plus">
                    <img src={plus} alt="plus" />
                </div>
            </div>
            <div className="cart__item-price">
                <b>{price} ₽</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle">
                    <img src={plus} alt="plus" />
                </div>
            </div>
        </div>
    );
};
