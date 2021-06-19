import React from 'react';
import {connect} from 'react-redux'
import { toggleCartHidden } from "../../redux/cart/cart.action";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping_bag.svg';
import './cart-icon.styles.scss';
import {selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
    );

    const mapDispatchToProps = dispatch =>({
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    });

    const mapStateToProps = createStructuredSelector({
      itemCount: selectCartItemsCount,
    });

 export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
