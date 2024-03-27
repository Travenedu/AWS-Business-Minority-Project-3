/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      name
      phone
      email
      address
      website
      category
      description
      businessImagePath
      appointments {
        appointmentId
        businessName
        businessId
        businessNumber
        clientName
        clientId
        clientNumber
        clientEmail
        date
        time
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        address
        website
        category
        description
        businessImagePath
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
