import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import connect from "react-redux/es/components/connect";
import { addItemToCart } from "../../redux/cartSlicer";
import { AppStateType } from "../../redux/store";
import { ItemCartInfoType, ProductAttributesType } from "../../utils/types";
import { AttributesSingleBox } from "./attributesSingleBox";

type BoxProps = {
  dispatch: Dispatch;
  listOfAttributes: [ProductAttributesType];
  productId: string;
};

export class AttributesBox extends React.Component<BoxProps> {
  state = {
    cartItem: this.props.productId,
    quantity: 0,
    attributes: this.props.listOfAttributes.map((item) => ({
      [item.id]: null,
    })),
  };

  setUserValues(attrName: string, value: null | string) {
    this.setState({
      attributes: this.state.attributes.map(
        (item: { [key: string]: string | null }) => {
          if (item.hasOwnProperty(attrName)) {
            item[`${attrName}`] = value;
          }
          return item;
        }
      ),
    });
  }

  submitItemChoice(event: React.SyntheticEvent) {
    event.preventDefault();
    const itemCartInfo: ItemCartInfoType = {
      productId: "",
      itemAttributes: [],
    };
    itemCartInfo.productId = this.props.productId;
    itemCartInfo.itemAttributes = this.state.attributes;

    this.props.dispatch(addItemToCart(itemCartInfo));
  }

  render() {
    console.log("stateee", this.state.attributes);

    return (
      <form onSubmit={(e) => this.submitItemChoice(e)}>
        {this.props.listOfAttributes.map(
          (item: ProductAttributesType, i: number) => (
            <AttributesSingleBox
              {...item}
              key={i}
              onChange={(event, value) => this.setUserValues(event, value)}
            />
          )
        )}
        <input type="submit" value="ADD TO CART" className="submitCartBtn" />
      </form>
    );
  }
}

export const AttributesBoxCont = connect()(AttributesBox);
