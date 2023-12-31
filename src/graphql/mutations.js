/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const CreateNoteBook = `
  mutation CreateNoteBook($input: CreateNoteBookInput!) {
    createNoteBook(input: $input) {
      id
      name
      createdAt
    }
  }
`


export const CreateNote = `
  mutation CreateNote($input: CreateNoteInput!) {
    createNote(input: $input) {
      id
      name
      description
      notebookID
      createdAt
      updatedAt
    }
  }
`

export const DeleteNoteBook = `
mutation MyMutation($input: DeleteNoteBookInput!) {
  deleteNoteBook(input: $input) {
    id
  }
}
`

export const DeleteNote = `
  mutation MyMutation2($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
      id
      name
    }
  }
`


// export const createNote = /* GraphQL */ `
//   mutation CreateNote(
//     $input: CreateNoteInput!
//     $condition: ModelNoteConditionInput
//   ) {
//     createNote(input: $input, condition: $condition) {
//       id
//       name
//       description
//       image
//       noteBook {
//         id
//         name
//         notes {
//           id
//           name
//           description
//           image
//           notebookID
//           createdAt
//           updatedAt
//           __typename
//         }
//         Notes {
//           nextToken
//           __typename
//         }
//         createdAt
//         updatedAt
//         __typename
//       }
//       notebookID
//       createdAt
//       updatedAt
//       __typename
//     }
//   }
// `;
// export const updateNote = /* GraphQL */ `
//   mutation UpdateNote(
//     $input: UpdateNoteInput!
//     $condition: ModelNoteConditionInput
//   ) {
//     updateNote(input: $input, condition: $condition) {
//       id
//       name
//       description
//       image
//       noteBook {
//         id
//         name
//         notes {
//           id
//           name
//           description
//           image
//           notebookID
//           createdAt
//           updatedAt
//           __typename
//         }
//         Notes {
//           nextToken
//           __typename
//         }
//         createdAt
//         updatedAt
//         __typename
//       }
//       notebookID
//       createdAt
//       updatedAt
//       __typename
//     }
//   }
// `;
// export const deleteNote = /* GraphQL */ `
//   mutation DeleteNote(
//     $input: DeleteNoteInput!
//     $condition: ModelNoteConditionInput
//   ) {
//     deleteNote(input: $input, condition: $condition) {
//       id
//       name
//       description
//       image
//       noteBook {
//         id
//         name
//         notes {
//           id
//           name
//           description
//           image
//           notebookID
//           createdAt
//           updatedAt
//           __typename
//         }
//         Notes {
//           nextToken
//           __typename
//         }
//         createdAt
//         updatedAt
//         __typename
//       }
//       notebookID
//       createdAt
//       updatedAt
//       __typename
//     }
//   }
// `;
// export const createNoteBook = /* GraphQL */ `
//   mutation CreateNoteBook(
//     $input: CreateNoteBookInput!
//     $condition: ModelNoteBookConditionInput
//   ) {
//     createNoteBook(input: $input, condition: $condition) {
//       id
//       name
//       notes {
//         id
//         name
//         description
//         image
//         noteBook {
//           id
//           name
//           createdAt
//           updatedAt
//           __typename
//         }
//         notebookID
//         createdAt
//         updatedAt
//         __typename
//       }
//       Notes {
//         items {
//           id
//           name
//           description
//           image
//           notebookID
//           createdAt
//           updatedAt
//           __typename
//         }
//         nextToken
//         __typename
//       }
//       createdAt
//       updatedAt
//       __typename
//     }
//   }
// `;
// export const updateNoteBook = /* GraphQL */ `
//   mutation UpdateNoteBook(
//     $input: UpdateNoteBookInput!
//     $condition: ModelNoteBookConditionInput
//   ) {
//     updateNoteBook(input: $input, condition: $condition) {
//       id
//       name
//       notes {
//         id
//         name
//         description
//         image
//         noteBook {
//           id
//           name
//           createdAt
//           updatedAt
//           __typename
//         }
//         notebookID
//         createdAt
//         updatedAt
//         __typename
//       }
//       Notes {
//         items {
//           id
//           name
//           description
//           image
//           notebookID
//           createdAt
//           updatedAt
//           __typename
//         }
//         nextToken
//         __typename
//       }
//       createdAt
//       updatedAt
//       __typename
//     }
//   }
// `;
// export const deleteNoteBook = /* GraphQL */ `
//   mutation DeleteNoteBook(
//     $input: DeleteNoteBookInput!
//     $condition: ModelNoteBookConditionInput
//   ) {
//     deleteNoteBook(input: $input, condition: $condition) {
//       id
//       name
//       notes {
//         id
//         name
//         description
//         image
//         noteBook {
//           id
//           name
//           createdAt
//           updatedAt
//           __typename
//         }
//         notebookID
//         createdAt
//         updatedAt
//         __typename
//       }
//       Notes {
//         items {
//           id
//           name
//           description
//           image
//           notebookID
//           createdAt
//           updatedAt
//           __typename
//         }
//         nextToken
//         __typename
//       }
//       createdAt
//       updatedAt
//       __typename
//     }
//   }
// `;
