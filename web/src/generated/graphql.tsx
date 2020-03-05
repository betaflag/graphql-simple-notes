import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Upload: any,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateNoteInput = {
  title: Scalars['String'],
  content: Scalars['String'],
};


export type Mutation = {
   __typename?: 'Mutation',
  createNote: Note,
  updateNote: Note,
  deleteNote?: Maybe<Scalars['Boolean']>,
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID']
};

export type Note = {
   __typename?: 'Note',
  id: Scalars['ID'],
  title: Scalars['String'],
  content: Scalars['String'],
  date: Scalars['DateTime'],
};

export type Query = {
   __typename?: 'Query',
  note: Note,
  notes: Array<Note>,
  selectedNote?: Maybe<Scalars['ID']>,
};


export type QueryNoteArgs = {
  id: Scalars['ID']
};


export type QueryNotesArgs = {
  query?: Maybe<Scalars['String']>
};

export type UpdateNoteInput = {
  id: Scalars['ID'],
  title: Scalars['String'],
  content: Scalars['String'],
};


export type DeleteNoteMutationVariables = {
  id: Scalars['ID']
};


export type DeleteNoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteNote'>
);

export type NoteQueryVariables = {
  id: Scalars['ID']
};


export type NoteQuery = (
  { __typename?: 'Query' }
  & { note: (
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'content' | 'date'>
  ) }
);

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput
};


export type UpdateNoteMutation = (
  { __typename?: 'Mutation' }
  & { updateNote: (
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'content' | 'date'>
  ) }
);

export type SelectedNoteQueryVariables = {};


export type SelectedNoteQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'selectedNote'>
);

export type CreateNoteMutationVariables = {
  input: CreateNoteInput
};


export type CreateNoteMutation = (
  { __typename?: 'Mutation' }
  & { createNote: (
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'content' | 'date'>
  ) }
);

export type NotesQueryVariables = {
  query?: Maybe<Scalars['String']>
};


export type NotesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'selectedNote'>
  & { notes: Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'content' | 'date'>
  )> }
);


export const DeleteNoteDocument = gql`
    mutation deleteNote($id: ID!) {
  deleteNote(id: $id)
}
    `;
export type DeleteNoteMutationFn = ApolloReactCommon.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, baseOptions);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = ApolloReactCommon.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const NoteDocument = gql`
    query note($id: ID!) {
  note(id: $id) {
    id
    title
    content
    date
  }
}
    `;

/**
 * __useNoteQuery__
 *
 * To run a query within a React component, call `useNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNoteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NoteQuery, NoteQueryVariables>) {
        return ApolloReactHooks.useQuery<NoteQuery, NoteQueryVariables>(NoteDocument, baseOptions);
      }
export function useNoteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NoteQuery, NoteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NoteQuery, NoteQueryVariables>(NoteDocument, baseOptions);
        }
export type NoteQueryHookResult = ReturnType<typeof useNoteQuery>;
export type NoteLazyQueryHookResult = ReturnType<typeof useNoteLazyQuery>;
export type NoteQueryResult = ApolloReactCommon.QueryResult<NoteQuery, NoteQueryVariables>;
export const UpdateNoteDocument = gql`
    mutation updateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
    id
    title
    content
    date
  }
}
    `;
export type UpdateNoteMutationFn = ApolloReactCommon.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, baseOptions);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = ApolloReactCommon.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const SelectedNoteDocument = gql`
    query selectedNote {
  selectedNote
}
    `;

/**
 * __useSelectedNoteQuery__
 *
 * To run a query within a React component, call `useSelectedNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectedNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectedNoteQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectedNoteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectedNoteQuery, SelectedNoteQueryVariables>) {
        return ApolloReactHooks.useQuery<SelectedNoteQuery, SelectedNoteQueryVariables>(SelectedNoteDocument, baseOptions);
      }
export function useSelectedNoteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectedNoteQuery, SelectedNoteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SelectedNoteQuery, SelectedNoteQueryVariables>(SelectedNoteDocument, baseOptions);
        }
export type SelectedNoteQueryHookResult = ReturnType<typeof useSelectedNoteQuery>;
export type SelectedNoteLazyQueryHookResult = ReturnType<typeof useSelectedNoteLazyQuery>;
export type SelectedNoteQueryResult = ApolloReactCommon.QueryResult<SelectedNoteQuery, SelectedNoteQueryVariables>;
export const CreateNoteDocument = gql`
    mutation createNote($input: CreateNoteInput!) {
  createNote(input: $input) {
    id
    title
    content
    date
  }
}
    `;
export type CreateNoteMutationFn = ApolloReactCommon.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, baseOptions);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = ApolloReactCommon.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const NotesDocument = gql`
    query notes($query: String) {
  notes(query: $query) {
    id
    title
    content
    date
  }
  selectedNote @client
}
    `;

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useNotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NotesQuery, NotesQueryVariables>) {
        return ApolloReactHooks.useQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
      }
export function useNotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NotesQuery, NotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
        }
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>;
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>;
export type NotesQueryResult = ApolloReactCommon.QueryResult<NotesQuery, NotesQueryVariables>;