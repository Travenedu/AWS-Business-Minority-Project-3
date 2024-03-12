/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const appointmentScheduled = /* GraphQL */ `
  subscription AppointmentScheduled($customerId: ID!) {
    appointmentScheduled(customerId: $customerId) {
      id
      business {
        id
        name
        description
        address
        phone
        website
        category
        price
        __typename
      }
      clientName
      clientEmail
      date
      time
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
