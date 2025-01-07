import {gql} from '@apollo/client';

export const GET_MENU_BY_ID = gql`
query GetMenuById($id: ID!) {
  menu(id: $id) {
    sections {
      identifier
      label
      description
      items {
        identifier
        label
        description
        price
      }
    }
  }
}
`;