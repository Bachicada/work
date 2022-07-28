import React from "react";
import { ProductAttributesType } from "../../utils/types";
import { AttributesSingleBox } from "./attributesSingleBox";

type BoxProps = {
  listOfAttributes: [ProductAttributesType];
};

export class AttributesBox extends React.Component<BoxProps> {
  render() {
    return (
      <>
        {this.props.listOfAttributes.map(
          (item: ProductAttributesType, i: number) => (
            <AttributesSingleBox {...item} key={i} />
          )
        )}
      </>
    );
  }
}
