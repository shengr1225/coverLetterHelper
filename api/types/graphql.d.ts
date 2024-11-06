import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { User as PrismaUser } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Byte: Buffer;
  Date: Date | string;
  DateTime: Date | string;
  File: File;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
};

export type Auction = {
  __typename?: 'Auction';
  bids: Array<Bid>;
  highestBid?: Maybe<Bid>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Bid = {
  __typename?: 'Bid';
  amount: Scalars['Int'];
};

export type BidInput = {
  amount: Scalars['Int'];
  auctionId: Scalars['ID'];
};

export type ChatCompletionInput = {
  aboutCompany: Scalars['String'];
  aboutJob: Scalars['String'];
  resume: Scalars['String'];
};

export type Choice = {
  __typename?: 'Choice';
  delta?: Maybe<Delta>;
};

export type CompletionChunk = {
  __typename?: 'CompletionChunk';
  choices: Array<Maybe<Choice>>;
};

export type Delta = {
  __typename?: 'Delta';
  content?: Maybe<Scalars['String']>;
  role?: Maybe<ROLE>;
  tool_calls?: Maybe<Array<Maybe<ToolCall>>>;
};

export type Function = {
  __typename?: 'Function';
  arguments?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  body?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bid?: Maybe<Bid>;
  sendMessage: Message;
};


export type MutationbidArgs = {
  input: BidInput;
};


export type MutationsendMessageArgs = {
  input: SendMessageInput;
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  ChatCompletion: Array<Maybe<CompletionChunk>>;
  /**
   * A field that spells out the letters of the alphabet
   * Maybe you want to @stream this field ;)
   */
  alphabet: Array<Scalars['String']>;
  auction?: Maybe<Auction>;
  /** A field that resolves fast. */
  fastField: Scalars['String'];
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  room: Array<Message>;
  /**
   * A field that resolves slowly.
   * Maybe you want to @defer this field ;)
   */
  slowField?: Maybe<Scalars['String']>;
};


/** About the Redwood queries. */
export type QueryChatCompletionArgs = {
  input?: InputMaybe<ChatCompletionInput>;
};


/** About the Redwood queries. */
export type QueryauctionArgs = {
  id: Scalars['ID'];
};


/** About the Redwood queries. */
export type QueryroomArgs = {
  id: Scalars['ID'];
};


/** About the Redwood queries. */
export type QueryslowFieldArgs = {
  waitFor?: Scalars['Int'];
};

export type ROLE =
  | 'assistant'
  | 'user';

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type SendMessageInput = {
  body: Scalars['String'];
  from: Scalars['String'];
  roomId: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  countdown: Scalars['Int'];
  newMessage: Message;
};


export type SubscriptioncountdownArgs = {
  from: Scalars['Int'];
  interval: Scalars['Int'];
};


export type SubscriptionnewMessageArgs = {
  roomId: Scalars['ID'];
};

export type ToolCall = {
  __typename?: 'ToolCall';
  function?: Maybe<Function>;
};

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auction: ResolverTypeWrapper<Auction>;
  Bid: ResolverTypeWrapper<Bid>;
  BidInput: BidInput;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  ChatCompletionInput: ChatCompletionInput;
  Choice: ResolverTypeWrapper<Choice>;
  CompletionChunk: ResolverTypeWrapper<CompletionChunk>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Delta: ResolverTypeWrapper<Delta>;
  File: ResolverTypeWrapper<Scalars['File']>;
  Function: ResolverTypeWrapper<Function>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ROLE: ROLE;
  Redwood: ResolverTypeWrapper<Redwood>;
  SendMessageInput: SendMessageInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  ToolCall: ResolverTypeWrapper<ToolCall>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auction: Auction;
  Bid: Bid;
  BidInput: BidInput;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Byte: Scalars['Byte'];
  ChatCompletionInput: ChatCompletionInput;
  Choice: Choice;
  CompletionChunk: CompletionChunk;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Delta: Delta;
  File: Scalars['File'];
  Function: Function;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Message: Message;
  Mutation: {};
  Query: {};
  Redwood: Redwood;
  SendMessageInput: SendMessageInput;
  String: Scalars['String'];
  Subscription: {};
  Time: Scalars['Time'];
  ToolCall: ToolCall;
};

export type liveDirectiveArgs = {
  if?: Maybe<Scalars['Boolean']>;
  throttle?: Maybe<Scalars['Int']>;
};

export type liveDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = liveDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuctionResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Auction'] = ResolversParentTypes['Auction']> = {
  bids: OptArgsResolverFn<Array<ResolversTypes['Bid']>, ParentType, ContextType>;
  highestBid: OptArgsResolverFn<Maybe<ResolversTypes['Bid']>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['ID'], ParentType, ContextType>;
  title: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Auction'] = ResolversParentTypes['Auction']> = {
  bids?: RequiredResolverFn<Array<ResolversTypes['Bid']>, ParentType, ContextType>;
  highestBid?: RequiredResolverFn<Maybe<ResolversTypes['Bid']>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['ID'], ParentType, ContextType>;
  title?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Bid'] = ResolversParentTypes['Bid']> = {
  amount: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BidRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Bid'] = ResolversParentTypes['Bid']> = {
  amount?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type ChoiceResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Choice'] = ResolversParentTypes['Choice']> = {
  delta: OptArgsResolverFn<Maybe<ResolversTypes['Delta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChoiceRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Choice'] = ResolversParentTypes['Choice']> = {
  delta?: RequiredResolverFn<Maybe<ResolversTypes['Delta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompletionChunkResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CompletionChunk'] = ResolversParentTypes['CompletionChunk']> = {
  choices: OptArgsResolverFn<Array<Maybe<ResolversTypes['Choice']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompletionChunkRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['CompletionChunk'] = ResolversParentTypes['CompletionChunk']> = {
  choices?: RequiredResolverFn<Array<Maybe<ResolversTypes['Choice']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeltaResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Delta'] = ResolversParentTypes['Delta']> = {
  content: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role: OptArgsResolverFn<Maybe<ResolversTypes['ROLE']>, ParentType, ContextType>;
  tool_calls: OptArgsResolverFn<Maybe<Array<Maybe<ResolversTypes['ToolCall']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeltaRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Delta'] = ResolversParentTypes['Delta']> = {
  content?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: RequiredResolverFn<Maybe<ResolversTypes['ROLE']>, ParentType, ContextType>;
  tool_calls?: RequiredResolverFn<Maybe<Array<Maybe<ResolversTypes['ToolCall']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

export type FunctionResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Function'] = ResolversParentTypes['Function']> = {
  arguments: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FunctionRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Function'] = ResolversParentTypes['Function']> = {
  arguments?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MessageResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  body: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  body?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  bid: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<MutationbidArgs, 'input'>>;
  sendMessage: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationsendMessageArgs, 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  bid?: RequiredResolverFn<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<MutationbidArgs, 'input'>>;
  sendMessage?: RequiredResolverFn<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationsendMessageArgs, 'input'>>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ChatCompletion: Resolver<Array<Maybe<ResolversTypes['CompletionChunk']>>, ParentType, ContextType, Partial<QueryChatCompletionArgs>>;
  alphabet: OptArgsResolverFn<Array<ResolversTypes['String']>, ParentType, ContextType>;
  auction: Resolver<Maybe<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryauctionArgs, 'id'>>;
  fastField: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  room: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryroomArgs, 'id'>>;
  slowField: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryslowFieldArgs, 'waitFor'>>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ChatCompletion?: RequiredResolverFn<Array<Maybe<ResolversTypes['CompletionChunk']>>, ParentType, ContextType, Partial<QueryChatCompletionArgs>>;
  alphabet?: RequiredResolverFn<Array<ResolversTypes['String']>, ParentType, ContextType>;
  auction?: RequiredResolverFn<Maybe<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<QueryauctionArgs, 'id'>>;
  fastField?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  room?: RequiredResolverFn<Array<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryroomArgs, 'id'>>;
  slowField?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryslowFieldArgs, 'waitFor'>>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  countdown: SubscriptionResolver<ResolversTypes['Int'], "countdown", ParentType, ContextType, RequireFields<SubscriptioncountdownArgs, 'from' | 'interval'>>;
  newMessage: SubscriptionResolver<ResolversTypes['Message'], "newMessage", ParentType, ContextType, RequireFields<SubscriptionnewMessageArgs, 'roomId'>>;
};

export type SubscriptionRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  countdown: SubscriptionResolver<ResolversTypes['Int'], "countdown", ParentType, ContextType, RequireFields<SubscriptioncountdownArgs, 'from' | 'interval'>>;
  newMessage: SubscriptionResolver<ResolversTypes['Message'], "newMessage", ParentType, ContextType, RequireFields<SubscriptionnewMessageArgs, 'roomId'>>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type ToolCallResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ToolCall'] = ResolversParentTypes['ToolCall']> = {
  function: OptArgsResolverFn<Maybe<ResolversTypes['Function']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ToolCallRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ToolCall'] = ResolversParentTypes['ToolCall']> = {
  function?: RequiredResolverFn<Maybe<ResolversTypes['Function']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  Auction: AuctionResolvers<ContextType>;
  Bid: BidResolvers<ContextType>;
  BigInt: GraphQLScalarType;
  Byte: GraphQLScalarType;
  Choice: ChoiceResolvers<ContextType>;
  CompletionChunk: CompletionChunkResolvers<ContextType>;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  Delta: DeltaResolvers<ContextType>;
  File: GraphQLScalarType;
  Function: FunctionResolvers<ContextType>;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Message: MessageResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  Subscription: SubscriptionResolvers<ContextType>;
  Time: GraphQLScalarType;
  ToolCall: ToolCallResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  live: liveDirectiveResolver<any, any, ContextType>;
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
