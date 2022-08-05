import React from "react";
import connect from "react-redux/es/components/connect";
import { ReactComponent as Cart } from "../../assets/empty-cart.svg";
import { AppStateType, store } from "../../redux/store";
import "./cart.css";

export class CartIcon extends React.Component {
  render() {
    return (
      <div className="cartPic">
        <Cart />
        {store.getState().cart.cart.length ? (
          <div className="cartCircle">{store.getState().cart.cart.length}</div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    itemsList: state.cart,
  };
};

export const CartIconCont = connect(mapStateToProps)(CartIcon);
