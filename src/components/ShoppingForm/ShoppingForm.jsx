import React, { useState } from 'react';
import axios from 'axios';

function ShoppingForm() {
    // const [name, setName] = useState('');
    // const [quantity, setQuantity] = useState(0);
    // const [unit, setUnit] = useState('');

    const [item, setItem] = useState({name: '', quantity: 0, unit: ''});

    const addItem = (item) => {
        console.log('New item:', item);
    
        axios({
            method: 'POST',
            url: '/',
            data: item
        }).then((response) => {
            console.log('Response:', response);
            // Might need to pass fetchShoppingList as a prop
            fetchShoppingList();
        }).catch((error) => {
            console.log('Error on post:', error);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(item);
        // Possibly call clearForm here
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Item</label>
            <input onChange={(event) => setItem({name: event.target.value})}
                value={item.name}
                placeholder='Item Name'/>
            <label>Quantity</label>
            <input onChange={(event) => setItem({quantity: event.target.value})}
                value={item.quantity}
                placeholder='Quantity'/>
            <label>Unit</label>
            <input onChange={(event) => setItem({unit: event.target.value})}
                value={item.unit}
                placeholder='Unit'/>
            <button type='submit'>Add Item</button>
        </form>
    )
   
}

export default ShoppingForm;