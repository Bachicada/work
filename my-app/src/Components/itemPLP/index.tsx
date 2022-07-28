import React from "react";
import { ProductInfoType } from "../../utils/types";
import { AttributesBox } from "./attributesBox";
import "./itemPLP.css";

export class ItemPLP extends React.Component<ProductInfoType> {
  render() {
    console.log("thisprops", this.props.attributes);
    return (
      <div className="itemInfoCont">
        <div className="sideGallery">{}</div>
        <img src={this.props.gallery[0]} />
        <div className="mainItemInfo">
          <h2 className="brandName">{this.props.brand}</h2>
          <h3>{this.props.name}</h3>
          <AttributesBox listOfAttributes={this.props.attributes} />
        </div>
      </div>
    );
  }
}
