/* eslint-disable */
// this is an auto generated file. This will be overwritten

// 
export const ListNoteBooks = /* GraphQL */ `
  query listNoteBooks($filter: ModelNoteBookFilterInput = {}) {
    listNoteBooks(filter: $filter) {
      items {
        id
        name
        createdAt
        updatedAt
        Notes{
          items{
            id
            name
          }
        }
      }
    }
  }
`;


export const GetNoteBook = /* GraphQL */`
  query GetNoteBook($id: ID! ) {
    getNoteBook(id: $id) {
      id
      name
      Notes {
        items {
          id
          name
          description
          createdAt
        }
      }
    }
  }
`

export const GetNote = `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      notebookID
    }
  }
`








// export const getNote = /* GraphQL */ `
// //   query GetNote($id: ID!) {
// //     getNote(id: $id) {
// //       id
// //       name
// //       description
// //       image
// //       noteBook {
// //         id
// //         name
// //         notes {
// //           id
// //           name
// //           description
// //           image
// //           notebookID
// //           createdAt
// //           updatedAt
// //           __typename
// //         }
// //         Notes {
// //           nextToken
// //           __typename
// //         }
// //         createdAt
// //         updatedAt
// //         __typename
// //       }
// //       notebookID
// //       createdAt
// //       updatedAt
// //       __typename
// //     }
// //   }
// // `;
// export const listNotes = /* GraphQL */ `
//   query ListNotes(
//     $filter: ModelNoteFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
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
//       nextToken
//       __typename
//     }
//   }
// `;
// export const notesByNotebookID = /* GraphQL */ `
//   query NotesByNotebookID(
//     $notebookID: ID!
//     $sortDirection: ModelSortDirection
//     $filter: ModelNoteFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     notesByNotebookID(
//       notebookID: $notebookID
//       sortDirection: $sortDirection
//       filter: $filter
//       limit: $limit
//       nextToken: $nextToken
//     ) {
//       items {
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
//       nextToken
//       __typename
//     }
//   }
// `;
// // export const getNoteBook = /* GraphQL */ `
// //   query GetNoteBook($id: ID!) {
// //     getNoteBook(id: $id) {
// //       id
// //       name
// //       notes {
// //         id
// //         name
// //         description
// //         image
// //         noteBook {
// //           id
// //           name
// //           createdAt
// //           updatedAt
// //           __typename
// //         }
// //         notebookID
// //         createdAt
// //         updatedAt
// //         __typename
// //       }
// //       Notes {
// //         items {
// //           id
// //           name
// //           description
// //           image
// //           notebookID
// //           createdAt
// //           updatedAt
// //           __typename
// //         }
// //         nextToken
// //         __typename
// //       }
// //       createdAt
// //       updatedAt
// //       __typename
// //     }
// //   }
// // `;