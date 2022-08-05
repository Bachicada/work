import { ApolloError } from "@apollo/client/errors";
import { Query } from "@apollo/client/react/components/Query";
import React from "react";
import { ItemPLP, ItemPLPCont } from "../../Components/itemPLP";
import { GET_PRODUCT_INFO } from "../../graphql/queries";
import { ProductDataType } from "../../utils/types";

export class ProductInfoPage extends React.Component {
  state = {
    productId: null,
  };
  componentDidMount() {
    const path = window.location.pathname;
    this.setState({
      productId: path.slice(path.lastIndexOf("/") + 1, path.length),
    });
  }
  render() {
    return (
      <Query
        query={GET_PRODUCT_INFO}
        variables={{
          productId: `${this.state.productId}`,
        }}
      >
        {(result: {
          loading: boolean;
          error?: ApolloError | undefined;
          data: ProductDataType;
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
            console.log("datapropd", data);
            finalResult = <ItemPLPCont {...data.product} />;
          }
          return <div>{finalResult}</div>;
        }}
      </Query>
    );
  }
}
