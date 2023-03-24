function ShoppingList({ shoppingList, onPurchase, onRemove }) {
    console.log("This is the shopping list:", shoppingList);
    // const purchasedItems = shoppingList.filter((item) => item.purchased);
    // const unpurchasedItems = shoppingList.filter((item) => !item.purchased);
    // const sortedItems = [...unpurchasedItems, ...purchasedItems];
    // const handlePurchase = (id) => {
    //   onPurchase(id);
    // };
    // const handleRemove = (id) => {
    //   onRemove(id);
    // };
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.unit}</td>
                            <td>
                                {!item.purchased && (
                                    <button onClick={() => handlePurchase(item.id)}>
                                        Purchase
                                    </button>
                                )}
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ShoppingList;
