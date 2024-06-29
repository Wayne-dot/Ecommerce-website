import React from "react";


const ItemDetails = ({item}) => {
    
    return(
        <div className="ItemDetails">
            <h4>Name: {item.name}</h4>
            <p>${item.price}</p>
            <p>description: {item.description}</p>
            <p>Quantity: {item.stockQuantity}</p>
            <img src={item.image} alt="a desk"></img>
        </div>
    );
}

export default ItemDetails;