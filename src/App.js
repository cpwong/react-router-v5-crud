import './App.css'
import _ from 'lodash'
import React, { useRef, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Table from './components/Table.js'
import AddItem from './components/AddItem.js';
import Home from './components/Home.js'

// Imported data is not accessible from component
import data from './data.js'

function App() {
  const dataRef = useRef(data);       // Create ref object with data
  const inventory = dataRef.current;  // and read from .current property
  const [itemList, setItemList] = useState(inventory);
  
  // Add new item
  function addItem(item) {
    item.id = _.uniqueId('a');
    setItemList([...itemList, item]);  // Add new item into exsiting itemList
  }
  /// Delete item
  function deleteItem(id) {
    setItemList(itemList.filter( item => item.id !== id ));
  }
  return(
    <div className='App'>
      <div className='container'>
        <h1>Inventory CRUD</h1>
        <Router>
          <div className='tab-bar'>
            <Link to='/add'>
              <div className="tab">Add</div>
            </Link>
            <Link to='/read'>
              <div className="tab">Read</div>
            </Link>
            <Link to='/delete'>
              <div className="tab">Delete</div>
            </Link>
          </div>
          <div className="content">
            {/* 1. Add switch later to demonstrate exclusive routing  */}
            <Switch>
              <Route path='/add'>
                <AddItem addItem={addItem}/>
              </Route> 
              <Route path='/read'>
                <Table itemList={itemList}/>
              </Route> 
              <Route path='/delete'>
                <Table itemList={itemList} deleteItem={deleteItem}/>
              </Route> 
              {/* 2. Implement 'no page found' 
                  3. Fix it with exact path='/' */ }
              <Route path='/'>
                <Home />
              </Route>
              <Route ><h1>No Page Found!</h1></Route>
            </Switch>
          </div>
          <Link to='/'><button>Home</button></Link>
      </Router>
      </div>
    </div>
  )
}
export default App;