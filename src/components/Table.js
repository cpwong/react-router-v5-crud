import React from 'react';

function Table(props) {
  const {deleteItem} = props;
  // console.log(props.itemList)
  let tableRows = null;
  if (props.itemList.length > 0) {
    tableRows = props.itemList.map( item => { 
      return(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.description}</td>
          <td>{item.colour}</td>
          <td>{item.price}</td>
          <td>
            { deleteItem ? 
              <button onClick={() => deleteItem(item.id)}>Delete</button>
              : null }
          </td>
        </tr>
      )})
    // console.log("tableRows", tableRows);
  } else {
    tableRows =
      <tr>
        <td colSpan={4}>No items in inventory</td>
      </tr>
  }
  return (
    <div className={`InventoryTable component ${deleteItem ? "delete" : ""}`}>
      { deleteItem ? 
        <h2>Delete Item</h2> 
        : <h2>Read Item</h2> } 
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Colour</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  )
}
export default Table;