import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

function Basket() {
  const state = useSelector((state) => state.addItem)
  
  return (
    <div>
        <NavLink exact to="/cart" className='btn btn-outline-success' >
            <span><ShoppingCart /><span>{state.length}</span></span>
        </NavLink>
    </div>
  )
}

export default Basket