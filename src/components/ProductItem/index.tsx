import React from 'react';
import { ProductItemProps } from 'types/product';

const ProductItem = ({
    id,
    title,
    price,
    thumbnail,
    description,
    stock,
    brand,
}: ProductItemProps) => {
    return (
        <div className="list-item">
            <div className="item-img-wrapper">
                <img src={thumbnail} alt={title} />
                {price ? <div className="item-price">{price} $</div> : null}
            </div>
            <p className="item-title">
                <strong>{title}</strong>
            </p>
            <p>
                <strong>Brand:</strong>&nbsp;
                {brand || ''}
            </p>
            <p>
                <strong>In stock:</strong>&nbsp;
                {stock || 0}
            </p>
            <p className="item-desc">{description || ''}</p>
        </div>
    );
};

export default ProductItem;
