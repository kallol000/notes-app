/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
          notebookID
          createdAt
          updatedAt
          __typename
        }
        Notes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      notebookID
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
      noteBook {
        id
        name
        notes {
          id
          name
          description
          image
          notebookID
          createdAt
          updatedAt
          __typename
        }
        Notes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      notebookID
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
      noteBook {
        id
        name
        notes {
          id
          name
          description
          image
          notebookID
          createdAt
          updatedAt
          __typename
        }
        Notes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      notebookID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNoteBook = /* GraphQL */ `
  subscription OnCreateNoteBook($filter: ModelSubscriptionNoteBookFilterInput) {
    onCreateNoteBook(filter: $filter) {
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
        notebookID
        createdAt
        updatedAt
        __typename
      }
      Notes {
        items {
          id
          name
          description
          image
          notebookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNoteBook = /* GraphQL */ `
  subscription OnUpdateNoteBook($filter: ModelSubscriptionNoteBookFilterInput) {
    onUpdateNoteBook(filter: $filter) {
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
        notebookID
        createdAt
        updatedAt
        __typename
      }
      Notes {
        items {
          id
          name
          description
          image
          notebookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNoteBook = /* GraphQL */ `
  subscription OnDeleteNoteBook($filter: ModelSubscriptionNoteBookFilterInput) {
    onDeleteNoteBook(filter: $filter) {
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
        notebookID
        createdAt
        updatedAt
        __typename
      }
      Notes {
        items {
          id
          name
          description
          image
          notebookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
