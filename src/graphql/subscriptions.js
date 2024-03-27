/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onCreateBusiness(filter: $filter) {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onUpdateBusiness(filter: $filter) {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onDeleteBusiness(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
