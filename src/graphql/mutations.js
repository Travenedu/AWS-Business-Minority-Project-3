/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $name: String!
    $description: String
    $address: String!
    $phone: String!
    $website: String
  ) {
    createBusiness(
      name: $name
      description: $description
      address: $address
      phone: $phone
      website: $website
    ) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $customerId: ID!
    $businessId: ID!
    $clientName: String!
    $clientEmail: String!
    $date: String!
    $time: String!
  ) {
    createAppointment(
      customerId: $customerId
      businessId: $businessId
      clientName: $clientName
      clientEmail: $clientEmail
      date: $date
      time: $time
    ) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $name: String!
    $email: String!
    $password: String!
    $profileImage: String
  ) {
    createCustomer(
      name: $name
      email: $email
      password: $password
      profileImage: $profileImage
    ) {
      id
      name
      email
      profileImage
      __typename
    }
  }
`;
export const updateCustomerProfile = /* GraphQL */ `
  mutation UpdateCustomerProfile(
    $id: ID!
    $name: String
    $email: String
    $profileImage: String
  ) {
    updateCustomerProfile(
      id: $id
      name: $name
      email: $email
      profileImage: $profileImage
    ) {
      id
      name
      email
      profileImage
      __typename
    }
  }
`;
export const saveBusiness = /* GraphQL */ `
  mutation SaveBusiness($customerId: ID!, $businessId: ID!) {
    saveBusiness(customerId: $customerId, businessId: $businessId)
  }
`;
export const createEntrepreneur = /* GraphQL */ `
  mutation CreateEntrepreneur(
    $name: String!
    $email: String!
    $password: String!
    $profileImage: String
  ) {
    createEntrepreneur(
      name: $name
      email: $email
      password: $password
      profileImage: $profileImage
    ) {
      id
      name
      email
      profileImage
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
