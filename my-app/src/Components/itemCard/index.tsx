import React from "react";
import connect from "react-redux/es/components/connect";
import { store } from "../../redux/store";
import { ReactComponent as CartOnCardBtn } from "../../assets/cart-on-card.svg";
import "./itemCard.css";
import { Link, Navigate } from "react-router-dom";
import { ItemCardProps } from "../../utils/types";

export type CardStateType = {
  isHovered: boolean;
};

export class ItemCard extends React.Component<
  {
    product: ItemCardProps;
    key: number;
  },
  CardStateType
> {
  constructor(props: { product: ItemCardProps; key: number }) {
    super(props);
    this.state = { isHovered: false };
  }
  checkPrice(currency: string) {
    const priceList = this.props.product.prices;
    const curList = priceList.filter(
      (item) => item.currency.symbol === currency
    );
    return curList[0]?.amount ? curList[0]?.amount : "nono";
  }

  render() {
    return (
      <div
        className="card"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div
          className="itemPic"
          style={{
            backgroundImage: `url(${this.props.product.gallery[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {this.props.product.inStock ? null : (
            <span className="outStoke">Out of stoke</span>
          )}
        </div>

        <div className="itemInfo">
          {this.state.isHovered && this.props.product.inStock ? (
            <Link to={`${window.location.pathname}/${this.props.product.id}`}>
              <CartOnCardBtn className="cartBtn" />
            </Link>
          ) : null}
          <h4 className="itemTitle">{`${this.props.product.brand} ${this.props.product.name}`}</h4>
          <p className="currenceInfo">{`${
            store.getState().currencySymbol
          }${this.checkPrice(`${store.getState().currencySymbol}`)}`}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: {
  currencyLabel: null | string;
  currencySymbol: null | string;
}) => {
  console.log("state", state);
  return {
    currencyLabel: state.currencyLabel,
    currencySymbol: state.currencySymbol,
  };
};

export const ItemCont = connect(mapStateToProps)(ItemCard);
