import React from "react";
import { AttributesItemsType, ProductAttributesType } from "../../utils/types";
import "./itemPLP.css";

export class AttributesSingleBox extends React.Component<ProductAttributesType> {
  handleChangeValue(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const attributeName = target.name;
    console.log("event", attributeName);

    console.log("value", target.value);
    console.log("id", this.props.id);
  }

  render() {
    return (
      <>
        <label className="itemAttributeName">{this.props.name}</label>
        {this.props.type === "swatch" ? (
          <div className="valuesBox">
            {this.props.items.map((item: AttributesItemsType, i: number) => (
              <div
                className="formRadioBtn colorBtn"
                key={i}
                style={{ backgroundColor: item.value }}
              >
                <input
                  name={this.props.name}
                  id={item.value}
                  type="radio"
                  value={item.displayValue}
                  onChange={(e) => {
                    this.props.onChange(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor={item.value} className="colorLabel"></label>
              </div>
            ))}
          </div>
        ) : null}
        {this.props.type === "text" ? (
          <div className="valuesBox">
            {this.props.items.map((item: AttributesItemsType, i: number) => (
              <div
                className="formRadioBtn"
                key={i}
                style={{
                  width: `calc(100% / ${this.props.items.length} - (${this.props.items.length} - 1 ) * 12px )`,
                }}
              >
                <input
                  name={this.props.name}
                  id={item.value}
                  type="radio"
                  value={item.displayValue}
                  onChange={(e) => {
                    this.props.onChange(e.target.name, e.target.value);
                  }}
                />
                <label htmlFor={item.value} className="textValueLabel">
                  {item.value}
                </label>
              </div>
            ))}
          </div>
        ) : null}
      </>
    );
  }
}
