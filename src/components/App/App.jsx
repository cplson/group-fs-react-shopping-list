import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';


function App() {

    let [shoppingList, setShoppingList] = useState([]);

    // listening for user clicks
    useEffect(() => {
        fetchShoppingList()
    }, [])

    // fetching shopping list
    const fetchShoppingList = () => {
        axios.get('/list')
            .then(response => {
                setShoppingList(response.data)
                console.log('This is the shopping list, setShoppingList')

            }).catch(err => {
                alert('err Adding List');
                console.log(err);
            })
    }

    const addItem = (newItem) => {
        console.log('New item:', newItem);

        axios({
            method: 'POST',
            url: '/list',
            data: newItem
        }).then((response) => {
            console.log('Response:', response);
            fetchShoppingList();
        }).catch((error) => {
            console.log('Error on post:', error);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <div>
                <ShoppingList shoppingList={shoppingList} />
            </div>
        </div>
    );
}

export default App;
