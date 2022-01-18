import React, { useState } from 'react';

function AddItem(props) {
  const {addItem} = props;
  const blankForm = {
    id: null,
    description: '',
    colour: '',
    price: ''
  }
  const [item, setItem] = useState(blankForm);
  const handlerInput = event => {
    const {name, value} = event.target
    console.log('handlerInput', name, value);
    setItem({ ...item, [name]: value });
  }
  const [lastId, setLastId] = useState(null);
  const handlerSubmit = event => {
    event.preventDefault();
    console.log('handlerSubmit');
    if (!item.description || !item.colour || !item.price)
      return 0;
    addItem(item);
    setItem(blankForm);
    setLastId(item.id); // User feedback after submit button pressed
  }
  return(
    <div className='AddItemForms component'>
      <h2>Create New Item</h2>
      <form onSubmit={handlerSubmit}>
        <label>Description</label>
        <input type='text' name='description' value={item.description} onChange={handlerInput}/>
        <label>Colour</label>
        <input type='text' name='colour' value={item.colour} onChange={handlerInput}/>
        <label>Price $</label>
        <input type='text' name='price' value={item.price} onChange={handlerInput}/>
        <span>
          <button>Submit</button>
          <span className='feedback'>
            {lastId ? "Item #" + lastId + " added" : null}
          </span>
        </span>
      </form>
    </div>
  )
}

export default AddItem;