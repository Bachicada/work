import React from "react";
import connect from "react-redux/es/components/connect";
import { AppStateType, store } from "../../redux/store";
import { ProductInfoType } from "../../utils/types";
import { AttributesBox, AttributesBoxCont } from "./attributesBox";
import "./itemPLP.css";

export class ItemPLP extends React.Component<ProductInfoType> {
  getPrice() {
    const priceList = this.props.prices;
    const currentCurrency = store.getState().currency.currencySymbol;
    const curList = priceList.filter(
      (item) => item.currency.symbol === currentCurrency
    );
    return curList[0]?.amount ? curList[0]?.amount : "nono";
  }

  render() {
    console.log("thisprops", this.props.prices);
    const attributes = this.props.attributes;
    console.log("formColor");

    return (
      <div className="itemInfoCont">
        <div className="sideGallery">
          {this.props.gallery.map((item, i) => (
            <img src={item} key={i} />
          ))}
        </div>
        <img src={this.props.gallery[0]} className="itemPoster" />
        <div className="mainItemInfo">
          <h2 className="brandName">{this.props.brand}</h2>
          <h3 className="itemName">{this.props.name}</h3>
          <AttributesBoxCont
            listOfAttributes={this.props.attributes}
            productId={this.props.id}
          />
          <p className="itemAttributeName">Price:</p>
          <p>{`${
            store.getState().currency.currencySymbol
          } ${this.getPrice()}`}</p>

          <div
            className="itemDescription"
            dangerouslySetInnerHTML={{ __html: this.props.description }}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  console.log("state", state);
  return {
    currencyLabel: state.currency.currencyLabel,
    currencySymbol: state.currency.currencySymbol,
  };
};

export const ItemPLPCont = connect(mapStateToProps)(ItemPLP);
