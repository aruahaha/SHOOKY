import React from "react";

export default function Cards(props) {

    const singleCard = props.data.map((card) => (
        <div key={card.id} className="card">
            <div className="product-img-div">
                <img className="product-img" src={card.imageUrl}></img>
            </div>
            <h1 className="product-name">{card.name}</h1>
            <p className="product-price">${card.price}</p>
        </div>
    ))

    return (
        <div className="best-products">
            {singleCard}
        </div>
    )

}