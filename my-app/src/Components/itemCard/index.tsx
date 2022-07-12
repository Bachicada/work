import React from "react";

type ItemCardProps = {
  id: string;
  name: string;
  inStock: boolean;
  gallery: [string];
};

export class ItemCard extends React.Component<{
  product: ItemCardProps;
  key: number;
}> {
  render() {
    return (
      <div className="card">
        <img src={this.props.product.gallery[0]} />
      </div>
    );
  }
}
