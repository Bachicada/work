import React from "react";

type ItemlistProps = {
  category: string;
};
export class ItemsList extends React.Component<ItemlistProps> {
  render() {
    return <div>{`${this.props.category}`}</div>;
  }
}
