import React from "react";
import { ItemsList } from "../itemsList";
import { Query } from "@apollo/client/react/components";
import "./category.css";
import { GET_ITEMS_BY_CATEGORY } from "../../graphql/queries";
import { ApolloError } from "@apollo/client";
import { ItemCard } from "../itemCard";

type CatStateType = {
  value: string; // like this
};

type ItemCardProps = {
  id: string;
  name: string;
  inStock: boolean;
  gallery: [string];
};

interface DataType {
  category: {
    products: Array<ItemCardProps>;
  };
}

export class CategoryName extends React.Component<{}, CatStateType> {
  constructor(props: {}) {
    super(props);
    this.state = { value: "all" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent) {
    this.setState({ value: (event.target as HTMLSelectElement).value });
  }

  render() {
    return (
      <div>
        <select
          className="categoryName"
          onChange={this.handleChange}
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="clothes">Clothes</option>
          <option value="tech">Tech</option>
        </select>
        <div>{this.state.value}</div>
        <ItemsList category={this.state.value} />
        <Query
          query={GET_ITEMS_BY_CATEGORY}
          variables={{ input: { title: `${this.state.value}` } }}
        >
          {(result: {
            loading: boolean;
            error?: ApolloError | undefined;
            data: DataType;
          }) => {
            const { loading, error, data } = result;
            let finalResult;
            if (loading) {
              finalResult = <p>Loading...</p>;
            }
            if (error) {
              finalResult = <p> Error happened: {error.message}</p>;
            }

            console.log("sss", data);
            if (data) {
              finalResult = (
                <div>
                  {data.category.products.map((item, i) => (
                    <ItemCard product={item} key={i} />
                  ))}
                </div>
              );
            }
            return <div>{finalResult}</div>;
          }}
        </Query>
      </div>
    );
  }
}
