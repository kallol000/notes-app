/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      noteBook {
        id
        name
        notes {
          id
          name
          description
          image
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
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
        noteBook {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNoteBook = /* GraphQL */ `
  query GetNoteBook($id: ID!) {
    getNoteBook(id: $id) {
      id
      name
      notes {
        id
        name
        description
        image
        noteBook {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNoteBooks = /* GraphQL */ `
  query ListNoteBooks(
    $filter: ModelNoteBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoteBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        notes {
          id
          name
          description
          image
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
