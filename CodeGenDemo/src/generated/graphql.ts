import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any,
  JSON: any,
  Upload: any,
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: any,
  /** The `Date` scalar represents an ISO-8601 compliant date type. */
  Date: any,
  /** The built-in `Decimal` scalar type. */
  Decimal: any,
  /** 
 * The `Long` scalar type represents non-fractional signed whole 64-bit numeric
   * values. Long can represent values between -(2^63) and 2^63 - 1.
 **/
  Long: any,
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any,
  /** The name scalar represents a valid GraphQL name as specified in the spec and can be used to refer to fields or types. */
  Name: any,
  /** 
 * The `Short` scalar type represents non-fractional signed whole 16-bit numeric
   * values. Short can represent values between -(2^15) and 2^15 - 1.
 **/
  Short: any,
  Url: any,
  Uuid: any,
};










export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Cat = {
   __typename?: 'Cat',
  birthDate: Scalars['DateTime'],
  breed?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type Comment = {
   __typename?: 'Comment',
  CommentText?: Maybe<Scalars['String']>,
  created_at: Scalars['DateTime'],
  id: Scalars['ID'],
  testomonial?: Maybe<Testomonial>,
  updated_at: Scalars['DateTime'],
};

export type CommentInput = {
  CommentText?: Maybe<Scalars['String']>,
  testomonial?: Maybe<Scalars['ID']>,
};

export type Continent = {
   __typename?: 'Continent',
  code?: Maybe<Scalars['String']>,
  countries?: Maybe<Array<Maybe<Country>>>,
  name?: Maybe<Scalars['String']>,
};

export type Country = {
   __typename?: 'Country',
  code?: Maybe<Scalars['String']>,
  continent?: Maybe<Continent>,
  currency?: Maybe<Scalars['String']>,
  emoji?: Maybe<Scalars['String']>,
  emojiU?: Maybe<Scalars['String']>,
  languages?: Maybe<Array<Maybe<Language>>>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
};

export type CreateCommentInput = {
  data?: Maybe<CommentInput>,
};

export type CreateCommentPayload = {
   __typename?: 'createCommentPayload',
  comment?: Maybe<Comment>,
};

export type CreateDogInput = {
  birthDate: Scalars['DateTime'],
  breed?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type CreateRestaurantInput = {
  data?: Maybe<RestaurantInput>,
};

export type CreateRestaurantPayload = {
   __typename?: 'createRestaurantPayload',
  restaurant?: Maybe<Restaurant>,
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>,
};

export type CreateRolePayload = {
   __typename?: 'createRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type CreateTestomonialInput = {
  data?: Maybe<TestomonialInput>,
};

export type CreateTestomonialPayload = {
   __typename?: 'createTestomonialPayload',
  testomonial?: Maybe<Testomonial>,
};

export type CreateUserInput = {
  data?: Maybe<UserInput>,
};

export type CreateUserPayload = {
   __typename?: 'createUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};




export type DeleteCommentInput = {
  where?: Maybe<InputId>,
};

export type DeleteCommentPayload = {
   __typename?: 'deleteCommentPayload',
  comment?: Maybe<Comment>,
};

export type DeleteRestaurantInput = {
  where?: Maybe<InputId>,
};

export type DeleteRestaurantPayload = {
   __typename?: 'deleteRestaurantPayload',
  restaurant?: Maybe<Restaurant>,
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>,
};

export type DeleteRolePayload = {
   __typename?: 'deleteRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type DeleteTestomonialInput = {
  where?: Maybe<InputId>,
};

export type DeleteTestomonialPayload = {
   __typename?: 'deleteTestomonialPayload',
  testomonial?: Maybe<Testomonial>,
};

export type DeleteUserInput = {
  where?: Maybe<InputId>,
};

export type DeleteUserPayload = {
   __typename?: 'deleteUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};

export type Dog = {
   __typename?: 'Dog',
  birthDate: Scalars['DateTime'],
  breed?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type EditCommentInput = {
  CommentText?: Maybe<Scalars['String']>,
  testomonial?: Maybe<Scalars['ID']>,
};

export type EditFileInput = {
  ext?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  mime?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
  sha256?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type EditRestaurantInput = {
  addressLine1?: Maybe<Scalars['String']>,
  addressLine2?: Maybe<Scalars['String']>,
  City?: Maybe<Scalars['String']>,
  Code?: Maybe<Scalars['String']>,
  Country?: Maybe<Scalars['String']>,
  PostalCode?: Maybe<Scalars['String']>,
  Title?: Maybe<Scalars['String']>,
};

export type EditRoleInput = {
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  type?: Maybe<Scalars['String']>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

export type EditTestomonialInput = {
  Author?: Maybe<Scalars['String']>,
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>,
  Content?: Maybe<Scalars['String']>,
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
};

export type FileInput = {
  ext?: Maybe<Scalars['String']>,
  hash: Scalars['String'],
  mime: Scalars['String'],
  name: Scalars['String'],
  provider: Scalars['String'],
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Scalars['ID']>>>,
  sha256?: Maybe<Scalars['String']>,
  size: Scalars['String'],
  url: Scalars['String'],
};

export type InputId = {
  id: Scalars['ID'],
};


export type Language = {
   __typename?: 'Language',
  code?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  native?: Maybe<Scalars['String']>,
  rtl?: Maybe<Scalars['Int']>,
};


export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | Comment | CreateCommentPayload | UpdateCommentPayload | DeleteCommentPayload | Restaurant | CreateRestaurantPayload | UpdateRestaurantPayload | DeleteRestaurantPayload | Testomonial | CreateTestomonialPayload | UpdateTestomonialPayload | DeleteTestomonialPayload | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;


export type Mutation = {
   __typename?: 'Mutation',
  createComment?: Maybe<CreateCommentPayload>,
  createDog?: Maybe<Scalars['String']>,
  createRestaurant?: Maybe<CreateRestaurantPayload>,
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>,
  createTestomonial?: Maybe<CreateTestomonialPayload>,
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>,
  deleteComment?: Maybe<DeleteCommentPayload>,
  deleteRestaurant?: Maybe<DeleteRestaurantPayload>,
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>,
  deleteTestomonial?: Maybe<DeleteTestomonialPayload>,
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>,
  login: UsersPermissionsLoginPayload,
  multipleUpload: Array<Maybe<UploadFile>>,
  register: UsersPermissionsLoginPayload,
  updateComment?: Maybe<UpdateCommentPayload>,
  updateRestaurant?: Maybe<UpdateRestaurantPayload>,
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>,
  updateTestomonial?: Maybe<UpdateTestomonialPayload>,
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>,
  upload: UploadFile,
};


export type MutationCreateCommentArgs = {
  input?: Maybe<CreateCommentInput>
};


export type MutationCreateDogArgs = {
  input?: Maybe<CreateDogInput>
};


export type MutationCreateRestaurantArgs = {
  input?: Maybe<CreateRestaurantInput>
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>
};


export type MutationCreateTestomonialArgs = {
  input?: Maybe<CreateTestomonialInput>
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>
};


export type MutationDeleteCommentArgs = {
  input?: Maybe<DeleteCommentInput>
};


export type MutationDeleteRestaurantArgs = {
  input?: Maybe<DeleteRestaurantInput>
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>
};


export type MutationDeleteTestomonialArgs = {
  input?: Maybe<DeleteTestomonialInput>
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
};


export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>,
  files: Array<Maybe<Scalars['Upload']>>,
  ref?: Maybe<Scalars['String']>,
  refId?: Maybe<Scalars['ID']>,
  source?: Maybe<Scalars['String']>
};


export type MutationRegisterArgs = {
  input: UserInput
};


export type MutationUpdateCommentArgs = {
  input?: Maybe<UpdateCommentInput>
};


export type MutationUpdateRestaurantArgs = {
  input?: Maybe<UpdateRestaurantInput>
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>
};


export type MutationUpdateTestomonialArgs = {
  input?: Maybe<UpdateTestomonialInput>
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>
};


export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>,
  file: Scalars['Upload'],
  ref?: Maybe<Scalars['String']>,
  refId?: Maybe<Scalars['ID']>,
  source?: Maybe<Scalars['String']>
};


export type Query = {
   __typename?: 'Query',
  cats?: Maybe<Array<Maybe<Cat>>>,
  comment?: Maybe<Comment>,
  comments?: Maybe<Array<Maybe<Comment>>>,
  continent?: Maybe<Continent>,
  continents?: Maybe<Array<Maybe<Continent>>>,
  countries?: Maybe<Array<Maybe<Country>>>,
  country?: Maybe<Country>,
  dogs?: Maybe<Array<Maybe<Dog>>>,
  files?: Maybe<Array<Maybe<UploadFile>>>,
  language?: Maybe<Language>,
  languages?: Maybe<Array<Maybe<Language>>>,
  me?: Maybe<UsersPermissionsMe>,
  ping?: Maybe<Scalars['String']>,
  restaurant?: Maybe<Restaurant>,
  restaurants?: Maybe<Array<Maybe<Restaurant>>>,
  role?: Maybe<UsersPermissionsRole>,
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>,
  testomonial?: Maybe<Testomonial>,
  testomonials?: Maybe<Array<Maybe<Testomonial>>>,
  user?: Maybe<UsersPermissionsUser>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
};


export type QueryCatsArgs = {
  search?: Maybe<Scalars['String']>
};


export type QueryCommentArgs = {
  id: Scalars['ID']
};


export type QueryCommentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryContinentArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryCountryArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryDogsArgs = {
  search?: Maybe<Scalars['String']>
};


export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryLanguageArgs = {
  code?: Maybe<Scalars['String']>
};


export type QueryRestaurantArgs = {
  id: Scalars['ID']
};


export type QueryRestaurantsArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryRoleArgs = {
  id: Scalars['ID']
};


export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryTestomonialArgs = {
  id: Scalars['ID']
};


export type QueryTestomonialsArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

/** collection that contains all restaurants */
export type Restaurant = {
   __typename?: 'Restaurant',
  addressLine1?: Maybe<Scalars['String']>,
  addressLine2?: Maybe<Scalars['String']>,
  City?: Maybe<Scalars['String']>,
  Code?: Maybe<Scalars['String']>,
  Country?: Maybe<Scalars['String']>,
  created_at: Scalars['DateTime'],
  id: Scalars['ID'],
  PostalCode?: Maybe<Scalars['String']>,
  Title?: Maybe<Scalars['String']>,
  updated_at: Scalars['DateTime'],
};

export type RestaurantInput = {
  addressLine1?: Maybe<Scalars['String']>,
  addressLine2?: Maybe<Scalars['String']>,
  City?: Maybe<Scalars['String']>,
  Code?: Maybe<Scalars['String']>,
  Country?: Maybe<Scalars['String']>,
  PostalCode?: Maybe<Scalars['String']>,
  Title?: Maybe<Scalars['String']>,
};

export type RoleInput = {
  description?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>,
  type?: Maybe<Scalars['String']>,
  users?: Maybe<Array<Maybe<Scalars['ID']>>>,
};


export type Testomonial = {
   __typename?: 'Testomonial',
  Author?: Maybe<Scalars['String']>,
  comments?: Maybe<Array<Maybe<Comment>>>,
  Content?: Maybe<Scalars['String']>,
  created_at: Scalars['DateTime'],
  id: Scalars['ID'],
  updated_at: Scalars['DateTime'],
};


export type TestomonialCommentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type TestomonialInput = {
  Author?: Maybe<Scalars['String']>,
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>,
  Content?: Maybe<Scalars['String']>,
};

export type UpdateCommentInput = {
  data?: Maybe<EditCommentInput>,
  where?: Maybe<InputId>,
};

export type UpdateCommentPayload = {
   __typename?: 'updateCommentPayload',
  comment?: Maybe<Comment>,
};

export type UpdateRestaurantInput = {
  data?: Maybe<EditRestaurantInput>,
  where?: Maybe<InputId>,
};

export type UpdateRestaurantPayload = {
   __typename?: 'updateRestaurantPayload',
  restaurant?: Maybe<Restaurant>,
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>,
  where?: Maybe<InputId>,
};

export type UpdateRolePayload = {
   __typename?: 'updateRolePayload',
  role?: Maybe<UsersPermissionsRole>,
};

export type UpdateTestomonialInput = {
  data?: Maybe<EditTestomonialInput>,
  where?: Maybe<InputId>,
};

export type UpdateTestomonialPayload = {
   __typename?: 'updateTestomonialPayload',
  testomonial?: Maybe<Testomonial>,
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>,
  where?: Maybe<InputId>,
};

export type UpdateUserPayload = {
   __typename?: 'updateUserPayload',
  user?: Maybe<UsersPermissionsUser>,
};


export type UploadFile = {
   __typename?: 'UploadFile',
  created_at: Scalars['DateTime'],
  ext?: Maybe<Scalars['String']>,
  hash: Scalars['String'],
  id: Scalars['ID'],
  mime: Scalars['String'],
  name: Scalars['String'],
  provider: Scalars['String'],
  provider_metadata?: Maybe<Scalars['JSON']>,
  related?: Maybe<Array<Maybe<Morph>>>,
  sha256?: Maybe<Scalars['String']>,
  size: Scalars['String'],
  updated_at: Scalars['DateTime'],
  url: Scalars['String'],
};


export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  email: Scalars['String'],
  password?: Maybe<Scalars['String']>,
  provider?: Maybe<Scalars['String']>,
  resetPasswordToken?: Maybe<Scalars['String']>,
  role?: Maybe<Scalars['ID']>,
  username: Scalars['String'],
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'],
  password: Scalars['String'],
  provider?: Maybe<Scalars['String']>,
};

export type UsersPermissionsLoginPayload = {
   __typename?: 'UsersPermissionsLoginPayload',
  jwt: Scalars['String'],
  user: UsersPermissionsUser,
};

export type UsersPermissionsMe = {
   __typename?: 'UsersPermissionsMe',
  blocked?: Maybe<Scalars['Boolean']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  email: Scalars['String'],
  id: Scalars['ID'],
  role?: Maybe<UsersPermissionsMeRole>,
  username: Scalars['String'],
};

export type UsersPermissionsMeRole = {
   __typename?: 'UsersPermissionsMeRole',
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  type?: Maybe<Scalars['String']>,
};

export type UsersPermissionsPermission = {
   __typename?: 'UsersPermissionsPermission',
  action: Scalars['String'],
  controller: Scalars['String'],
  enabled: Scalars['Boolean'],
  id: Scalars['ID'],
  policy?: Maybe<Scalars['String']>,
  role?: Maybe<UsersPermissionsRole>,
  type: Scalars['String'],
};

export type UsersPermissionsRole = {
   __typename?: 'UsersPermissionsRole',
  description?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>,
  type?: Maybe<Scalars['String']>,
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>,
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  start?: Maybe<Scalars['Int']>,
  where?: Maybe<Scalars['JSON']>
};

export type UsersPermissionsUser = {
   __typename?: 'UsersPermissionsUser',
  blocked?: Maybe<Scalars['Boolean']>,
  confirmed?: Maybe<Scalars['Boolean']>,
  created_at: Scalars['DateTime'],
  email: Scalars['String'],
  id: Scalars['ID'],
  provider?: Maybe<Scalars['String']>,
  role?: Maybe<UsersPermissionsRole>,
  updated_at: Scalars['DateTime'],
  username: Scalars['String'],
};


export type FindAllRestaurantQueryVariables = {
  id: Scalars['ID']
};


export type FindAllRestaurantQuery = (
  { __typename?: 'Query' }
  & { restaurant: Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'Code' | 'id'>
  )> }
);

export type GetAllRestaurantsQueryVariables = {};


export type GetAllRestaurantsQuery = (
  { __typename?: 'Query' }
  & { restaurants: Maybe<Array<Maybe<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'Code' | 'id'>
  )>>> }
);


export const FindAllRestaurantDocument = gql`
    query findAllRestaurant($id: ID!) {
  restaurant(id: $id) {
    Code
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindAllRestaurantGQL extends Apollo.Query<FindAllRestaurantQuery, FindAllRestaurantQueryVariables> {
    document = FindAllRestaurantDocument;
    
  }
export const GetAllRestaurantsDocument = gql`
    query getAllRestaurants {
  restaurants {
    Code
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllRestaurantsGQL extends Apollo.Query<GetAllRestaurantsQuery, GetAllRestaurantsQueryVariables> {
    document = GetAllRestaurantsDocument;
    
  }