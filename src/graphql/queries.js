/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const business = /* GraphQL */ `
  query Business($id: ID!) {
    business(id: $id) {
      id
      name
      description
      address
      phone
      website
      category
      price
      appointments {
        id
        clientName
        clientEmail
        date
        time
        __typename
      }
      __typename
    }
  }
`;
export const businesses = /* GraphQL */ `
  query Businesses($category: String, $sortBy: SortBy) {
    businesses(category: $category, sortBy: $sortBy) {
      id
      name
      description
      address
      phone
      website
      category
      price
      appointments {
        id
        clientName
        clientEmail
        date
        time
        __typename
      }
      __typename
    }
  }
`;
export const customer = /* GraphQL */ `
  query Customer($id: ID!) {
    customer(id: $id) {
      id
      name
      email
      profileImage
      __typename
    }
  }
`;
export const customers = /* GraphQL */ `
  query Customers {
    customers {
      id
      name
      email
      profileImage
      __typename
    }
  }
`;
export const entrepreneur = /* GraphQL */ `
  query Entrepreneur($id: ID!) {
    entrepreneur(id: $id) {
      id
      name
      email
      profileImage
      __typename
    }
  }
`;
export const entrepreneurs = /* GraphQL */ `
  query Entrepreneurs {
    entrepreneurs {
      id
      name
      email
      profileImage
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
