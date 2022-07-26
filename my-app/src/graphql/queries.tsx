import { gql } from "@apollo/client/core";

export const GET_ITEMS_BY_CATEGORY = gql`
  query GetCategory($input: CategoryInput) {
    category(input: $input) {
      products {
        id
        name
        inStock
        gallery
        brand
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  query GetCurSymbols {
    currencies {
      symbol
      label
    }
  }
`;
