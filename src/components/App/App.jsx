import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    let [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        fetchShoppingList();
    }, [])

    const addItem = (newItem) => {
        console.log('New item:', newItem);

        axios({
            method: 'POST',
            url: '/',
            data: newStudent
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
        </div>
    );
}

export default App;
