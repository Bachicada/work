import { ApolloError } from "@apollo/client/errors";
import { Query } from "@apollo/client/react/components";
import React from "react";
import connect from "react-redux/es/components/connect";
import { Dispatch } from "redux";
import { GET_CURRENCIES } from "../../graphql/queries";
import {
  checkCurrencySymbol,
  checkCurrencyLabel,
  setStandartCurrency,
} from "../../redux/currencySlicer";

import "./currencySelector.css";

interface CurrencyListType {
  dispatch: Dispatch;
  currencyLabel: null | string;
  currencySymbol: null | string;
}

export class CurrencySelector extends React.Component<CurrencyListType> {
  render(): React.ReactNode {
    return (
      <Query query={GET_CURRENCIES}>
        {(result: {
          loading: boolean;
          error?: ApolloError | undefined;
          data: null | { currencies: [{ symbol: string; label: string }] };
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
            console.log("curData", data);
            this.props.dispatch(setStandartCurrency(data.currencies[0].symbol));
            finalResult = (
              <select
                className="curList"
                onChange={(e) => {
                  this.props.dispatch(
                    checkCurrencyLabel(
                      (e.target[e.target.selectedIndex] as HTMLOptionElement)
                        .value
                    )
                  );
                  this.props.dispatch(
                    checkCurrencySymbol(
                      (e.target[e.target.selectedIndex] as HTMLOptionElement)
                        .dataset.symbol
                    )
                  );
                }}
              >
                {data?.currencies.length ? (
                  data.currencies.map((item, i) => (
                    <option
                      key={i}
                      className="curOption"
                      value={item.label}
                      data-symbol={item.symbol}
                    >
                      {`${item.symbol} ${item.label}`}
                    </option>
                  ))
                ) : (
                  <p> Error!</p>
                )}
              </select>
            );
          }
          return <div>{finalResult}</div>;
        }}
      </Query>
    );
  }
}

export const CurCont = connect()(CurrencySelector);
