import React from "react";
import { AttributesItemsType, ProductAttributesType } from "../../utils/types";
import "./itemPLP.css";

export class AttributesSingleBox extends React.Component<ProductAttributesType> {
  render() {
    return (
      <>
        <h4>{this.props.name}</h4>
        {this.props.type === "swatch" ? (
          <div className="valuesBox">
            {this.props.items.map((item: AttributesItemsType, i: number) => (
              <div
                className="colorBox"
                style={{ backgroundColor: item.value }}
                key={i}
              ></div>
            ))}
          </div>
        ) : null}
        {this.props.type === "text" ? (
          <div className="valuesBox">
            {this.props.items.map((item: AttributesItemsType, i: number) => (
              <div
                className="textValueBox"
                key={i}
                style={{
                  width: `calc(100% / ${this.props.items.length} - (${this.props.items.length} - 1 ) * 12px )`,
                }}
              >
                {item.value}
              </div>
            ))}
          </div>
        ) : null}
      </>
    );
  }
}
