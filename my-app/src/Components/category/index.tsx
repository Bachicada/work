import React from "react";
import { Query } from "@apollo/client/react/components";
import "./category.css";
import { GET_ITEMS_BY_CATEGORY } from "../../graphql/queries";
import { ApolloError } from "@apollo/client";
import { ItemCont } from "../itemCard";
import { ItemCardProps } from "../../utils/types";

export type CatStateType = {
  value: string;
};

export type DataType = {
  category: {
    products: [ItemCardProps];
  };
};

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
      <>
        <select
          className="categoryName"
          onChange={this.handleChange}
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="clothes">Clothes</option>
          <option value="tech">Tech</option>
        </select>
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

            if (data) {
              console.log("data", data);
              finalResult = (
                <div className="itemsList">
                  {data.category.products.map((item, i) => (
                    <ItemCont product={item} key={i} />
                  ))}
                </div>
              );
            }
            return <div>{finalResult}</div>;
          }}
        </Query>
      </>
    );
  }
}
