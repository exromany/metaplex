/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type { Context } from './../context';
import type { core } from 'nexus';
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    pubkey<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "PublicKey";
    /**
     * GraphQL representation of BigNumber
     */
    bn<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "BN";
    buffer<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "Buffer";
    uint8<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.CommonInputFieldConfig<TypeName, FieldName>,
    ): void; // "Uint8Array";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    pubkey<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "PublicKey";
    /**
     * GraphQL representation of BigNumber
     */
    bn<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "BN";
    buffer<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Buffer";
    uint8<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "Uint8Array";
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {
  AuctionState: 0 | 2 | 1;
  BidStateType: 0 | 1;
  MetadataKey: 7 | 1 | 2 | 6 | 4 | 0;
  MetaplexKey: 7 | 10 | 12 | 2 | 11 | 1 | 5 | 8 | 9 | 6 | 3 | 0 | 4;
  NonWinningConstraint: 2 | 1 | 0;
  PriceFloorType: 2 | 1 | 0;
  TupleNumericType: 1 | 2 | 4 | 8;
  VaultKey: 2 | 1 | 0 | 3;
  VaultState: 1 | 2 | 3 | 0;
  WinningConfigType: 1 | 4 | 2 | 3 | 0;
  WinningConstraint: 0 | 1;
}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  BN: any;
  Buffer: any;
  PublicKey: any;
  Uint8Array: any;
}

export interface NexusGenObjects {
  Account: {
    // root type
    data?: NexusGenScalars['Buffer'] | null; // Buffer
    lamports?: number | null; // Int
    owner?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionData: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['AuctionData'] | null; // AuctionData
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionDataExtended: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['AuctionDataExtended'] | null; // AuctionDataExtended
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionManagerV1: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['AuctionManagerV1'] | null; // AuctionManagerV1
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionManagerV2: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['AuctionManagerV2'] | null; // AuctionManagerV2
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithBidRedemptionTicket: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['BidRedemptionTicket'] | null; // BidRedemptionTicket
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithBidderMetadata: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['BidderMetadata'] | null; // BidderMetadata
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithBidderPot: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['BidderPot'] | null; // BidderPot
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithEdition: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['Edition'] | null; // Edition
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithMasterEdition: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['MasterEdition'] | null; // MasterEdition
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithMetadata: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['Metadata'] | null; // Metadata
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithPayoutTicket: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['PayoutTicket'] | null; // PayoutTicket
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithPrizeTrackingTicket: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['PrizeTrackingTicket'] | null; // PrizeTrackingTicket
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithSafetyDepositBox: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['SafetyDepositBox'] | null; // SafetyDepositBox
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithSafetyDepositConfig: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['SafetyDepositConfig'] | null; // SafetyDepositConfig
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithStore: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['Store'] | null; // Store
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithVault: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['Vault'] | null; // Vault
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithWhitelistedCreator: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    info?: NexusGenRootTypes['WhitelistedCreator'] | null; // WhitelistedCreator
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AmountRange: {
    // root type
    amount?: NexusGenScalars['BN'] | null; // BN
    length?: NexusGenScalars['BN'] | null; // BN
  };
  AuctionData: {
    // root type
    auctionGap?: NexusGenScalars['BN'] | null; // BN
    authority?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidRedemptionKey?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidState?: NexusGenRootTypes['BidState'] | null; // BidState
    endAuctionAt?: NexusGenScalars['BN'] | null; // BN
    endedAt?: NexusGenScalars['BN'] | null; // BN
    lastBid?: NexusGenScalars['BN'] | null; // BN
    priceFloor?: NexusGenRootTypes['PriceFloor'] | null; // PriceFloor
    state?: NexusGenEnums['AuctionState'] | null; // AuctionState
    tokenMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AuctionDataExtended: {
    // root type
    gapTickSizePercentage?: number | null; // Int
    tickSize?: NexusGenScalars['BN'] | null; // BN
    totalUncancelledBids?: NexusGenScalars['BN'] | null; // BN
  };
  AuctionManagerV1: {
    // root type
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
  AuctionManagerV2: {
    // root type
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
  Bid: {
    // root type
    amount?: NexusGenScalars['BN'] | null; // BN
    key?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  BidRedemptionTicket: {
    // root type
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
  BidState: {
    // root type
    bids?: Array<NexusGenRootTypes['Bid'] | null> | null; // [Bid]
    max?: NexusGenScalars['BN'] | null; // BN
    type?: NexusGenEnums['BidStateType'] | null; // BidStateType
  };
  BidderMetadata: {
    // root type
    auctionPubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
    cancelled?: boolean | null; // Boolean
    lastBid?: NexusGenScalars['BN'] | null; // BN
    lastBidTimestamp?: NexusGenScalars['BN'] | null; // BN
  };
  BidderPot: {
    // root type
    auctionAct?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderAct?: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPot?: NexusGenScalars['PublicKey'] | null; // PublicKey
    emptied?: boolean | null; // Boolean
  };
  Creator: {
    // root type
    address?: NexusGenScalars['PublicKey'] | null; // PublicKey
    share?: number | null; // Int
    verified?: boolean | null; // Boolean
  };
  Data: {
    // root type
    creators?: Array<NexusGenRootTypes['Creator'] | null> | null; // [Creator]
    name?: string | null; // String
    sellerFeeBasisPoints?: number | null; // Int
    symbol?: string | null; // String
    uri?: string | null; // String
  };
  Edition: {
    // root type
    edition?: NexusGenScalars['BN'] | null; // BN
    key?: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    parent?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  MasterEditionV1: {
    // root type
    key?: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply?: NexusGenScalars['BN'] | null; // BN
    oneTimePrintingAuthorizationMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    printingMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    supply?: NexusGenScalars['BN'] | null; // BN
  };
  MasterEditionV2: {
    // root type
    key?: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply?: NexusGenScalars['BN'] | null; // BN
    supply?: NexusGenScalars['BN'] | null; // BN
  };
  Metadata: {
    // root type
    data?: NexusGenRootTypes['Data'] | null; // Data
    edition?: NexusGenScalars['PublicKey'] | null; // PublicKey
    isMutable?: boolean | null; // Boolean
    key?: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    masterEdition?: NexusGenScalars['PublicKey'] | null; // PublicKey
    mint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    primarySaleHappened?: boolean | null; // Boolean
    updateAuthority?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  ParsedAccount: {
    // root type
    account?: NexusGenRootTypes['Account'] | null; // Account
    pubkey?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  ParticipationConfigV2: {
    // root type
    fixedPrice?: NexusGenScalars['BN'] | null; // BN
    nonWinningConstraint?: NexusGenEnums['NonWinningConstraint'] | null; // NonWinningConstraint
    winnerConstraint?: NexusGenEnums['WinningConstraint'] | null; // WinningConstraint
  };
  ParticipationStateV2: {
    // root type
    collectedToAcceptPayment?: NexusGenScalars['BN'] | null; // BN
  };
  PayoutTicket: {
    // root type
    amountPaid?: NexusGenScalars['BN'] | null; // BN
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    recipient?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  PriceFloor: {
    // root type
    hash?: NexusGenScalars['Uint8Array'] | null; // Uint8Array
    minPrice?: NexusGenScalars['BN'] | null; // BN
    type?: NexusGenEnums['PriceFloorType'] | null; // PriceFloorType
  };
  PrizeTrackingTicket: {
    // root type
    expectedRedemptions?: NexusGenScalars['BN'] | null; // BN
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    metadata?: NexusGenScalars['PublicKey'] | null; // PublicKey
    redemptions?: NexusGenScalars['BN'] | null; // BN
    supplySnapshot?: NexusGenScalars['BN'] | null; // BN
  };
  Query: {};
  SafetyDepositBox: {
    // root type
    key?: NexusGenEnums['VaultKey'] | null; // VaultKey
    order?: number | null; // Int
    store?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  SafetyDepositConfig: {
    // root type
    amountRanges?: Array<NexusGenRootTypes['AmountRange'] | null> | null; // [AmountRange]
    amountType?: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    auctionManager?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    lengthType?: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    order?: NexusGenScalars['BN'] | null; // BN
    participationConfig?: NexusGenRootTypes['ParticipationConfigV2'] | null; // ParticipationConfigV2
    participationState?: NexusGenRootTypes['ParticipationStateV2'] | null; // ParticipationStateV2
    winningConfigType?: NexusGenEnums['WinningConfigType'] | null; // WinningConfigType
  };
  Store: {
    // root type
    auctionProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    public?: boolean | null; // Boolean
    tokenMetadataProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenVaultProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  Vault: {
    // root type
    allowFurtherShareCreation?: boolean | null; // Boolean
    authority?: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionMint?: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionTreasury?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: NexusGenEnums['VaultKey'] | null; // VaultKey
    lockedPricePerShare?: NexusGenScalars['BN'] | null; // BN
    pricingLookupAddress?: NexusGenScalars['PublicKey'] | null; // PublicKey
    redeemTreasury?: NexusGenScalars['PublicKey'] | null; // PublicKey
    state?: NexusGenEnums['VaultState'] | null; // VaultState
    tokenProgram?: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenTypeCount?: number | null; // Int
  };
  WhitelistedCreator: {
    // root type
    activated?: boolean | null; // Boolean
    address?: NexusGenScalars['PublicKey'] | null; // PublicKey
    key?: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {
  MasterEdition:
    | NexusGenRootTypes['MasterEditionV1']
    | NexusGenRootTypes['MasterEditionV2'];
}

export type NexusGenRootTypes = NexusGenObjects & NexusGenUnions;

export type NexusGenAllTypes = NexusGenRootTypes &
  NexusGenScalars &
  NexusGenEnums;

export interface NexusGenFieldTypes {
  Account: {
    // field return type
    data: NexusGenScalars['Buffer'] | null; // Buffer
    lamports: number | null; // Int
    owner: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionData: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['AuctionData'] | null; // AuctionData
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionDataExtended: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['AuctionDataExtended'] | null; // AuctionDataExtended
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionManagerV1: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['AuctionManagerV1'] | null; // AuctionManagerV1
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithAuctionManagerV2: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['AuctionManagerV2'] | null; // AuctionManagerV2
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithBidRedemptionTicket: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['BidRedemptionTicket'] | null; // BidRedemptionTicket
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithBidderMetadata: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['BidderMetadata'] | null; // BidderMetadata
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithBidderPot: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['BidderPot'] | null; // BidderPot
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithEdition: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['Edition'] | null; // Edition
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithMasterEdition: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['MasterEdition'] | null; // MasterEdition
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithMetadata: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['Metadata'] | null; // Metadata
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithPayoutTicket: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['PayoutTicket'] | null; // PayoutTicket
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithPrizeTrackingTicket: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['PrizeTrackingTicket'] | null; // PrizeTrackingTicket
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithSafetyDepositBox: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['SafetyDepositBox'] | null; // SafetyDepositBox
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithSafetyDepositConfig: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['SafetyDepositConfig'] | null; // SafetyDepositConfig
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithStore: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['Store'] | null; // Store
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithVault: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['Vault'] | null; // Vault
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AccountWithWhitelistedCreator: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    info: NexusGenRootTypes['WhitelistedCreator'] | null; // WhitelistedCreator
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AmountRange: {
    // field return type
    amount: NexusGenScalars['BN'] | null; // BN
    length: NexusGenScalars['BN'] | null; // BN
  };
  AuctionData: {
    // field return type
    auctionGap: NexusGenScalars['BN'] | null; // BN
    authority: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidRedemptionKey: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidState: NexusGenRootTypes['BidState'] | null; // BidState
    endAuctionAt: NexusGenScalars['BN'] | null; // BN
    endedAt: NexusGenScalars['BN'] | null; // BN
    lastBid: NexusGenScalars['BN'] | null; // BN
    priceFloor: NexusGenRootTypes['PriceFloor'] | null; // PriceFloor
    state: NexusGenEnums['AuctionState'] | null; // AuctionState
    tokenMint: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  AuctionDataExtended: {
    // field return type
    gapTickSizePercentage: number | null; // Int
    tickSize: NexusGenScalars['BN'] | null; // BN
    totalUncancelledBids: NexusGenScalars['BN'] | null; // BN
  };
  AuctionManagerV1: {
    // field return type
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
  AuctionManagerV2: {
    // field return type
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
  Bid: {
    // field return type
    amount: NexusGenScalars['BN'] | null; // BN
    key: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  BidRedemptionTicket: {
    // field return type
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
  BidState: {
    // field return type
    bids: Array<NexusGenRootTypes['Bid'] | null> | null; // [Bid]
    max: NexusGenScalars['BN'] | null; // BN
    type: NexusGenEnums['BidStateType'] | null; // BidStateType
  };
  BidderMetadata: {
    // field return type
    auctionPubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
    cancelled: boolean | null; // Boolean
    lastBid: NexusGenScalars['BN'] | null; // BN
    lastBidTimestamp: NexusGenScalars['BN'] | null; // BN
  };
  BidderPot: {
    // field return type
    auctionAct: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderAct: NexusGenScalars['PublicKey'] | null; // PublicKey
    bidderPot: NexusGenScalars['PublicKey'] | null; // PublicKey
    emptied: boolean | null; // Boolean
  };
  Creator: {
    // field return type
    address: NexusGenScalars['PublicKey'] | null; // PublicKey
    share: number | null; // Int
    verified: boolean | null; // Boolean
  };
  Data: {
    // field return type
    creators: Array<NexusGenRootTypes['Creator'] | null> | null; // [Creator]
    name: string | null; // String
    sellerFeeBasisPoints: number | null; // Int
    symbol: string | null; // String
    uri: string | null; // String
  };
  Edition: {
    // field return type
    edition: NexusGenScalars['BN'] | null; // BN
    key: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    parent: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  MasterEditionV1: {
    // field return type
    key: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply: NexusGenScalars['BN'] | null; // BN
    oneTimePrintingAuthorizationMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    printingMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    supply: NexusGenScalars['BN'] | null; // BN
  };
  MasterEditionV2: {
    // field return type
    key: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    maxSupply: NexusGenScalars['BN'] | null; // BN
    supply: NexusGenScalars['BN'] | null; // BN
  };
  Metadata: {
    // field return type
    data: NexusGenRootTypes['Data'] | null; // Data
    edition: NexusGenScalars['PublicKey'] | null; // PublicKey
    isMutable: boolean | null; // Boolean
    key: NexusGenEnums['MetadataKey'] | null; // MetadataKey
    masterEdition: NexusGenScalars['PublicKey'] | null; // PublicKey
    mint: NexusGenScalars['PublicKey'] | null; // PublicKey
    primarySaleHappened: boolean | null; // Boolean
    updateAuthority: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  ParsedAccount: {
    // field return type
    account: NexusGenRootTypes['Account'] | null; // Account
    pubkey: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  ParticipationConfigV2: {
    // field return type
    fixedPrice: NexusGenScalars['BN'] | null; // BN
    nonWinningConstraint: NexusGenEnums['NonWinningConstraint'] | null; // NonWinningConstraint
    winnerConstraint: NexusGenEnums['WinningConstraint'] | null; // WinningConstraint
  };
  ParticipationStateV2: {
    // field return type
    collectedToAcceptPayment: NexusGenScalars['BN'] | null; // BN
  };
  PayoutTicket: {
    // field return type
    amountPaid: NexusGenScalars['BN'] | null; // BN
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    recipient: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  PriceFloor: {
    // field return type
    hash: NexusGenScalars['Uint8Array'] | null; // Uint8Array
    minPrice: NexusGenScalars['BN'] | null; // BN
    type: NexusGenEnums['PriceFloorType'] | null; // PriceFloorType
  };
  PrizeTrackingTicket: {
    // field return type
    expectedRedemptions: NexusGenScalars['BN'] | null; // BN
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    metadata: NexusGenScalars['PublicKey'] | null; // PublicKey
    redemptions: NexusGenScalars['BN'] | null; // BN
    supplySnapshot: NexusGenScalars['BN'] | null; // BN
  };
  Query: {
    // field return type
    creators: Array<
      NexusGenRootTypes['AccountWithWhitelistedCreator'] | null
    > | null; // [AccountWithWhitelistedCreator]
    creatorsByStore: Array<
      NexusGenRootTypes['AccountWithWhitelistedCreator'] | null
    > | null; // [AccountWithWhitelistedCreator]
    creatorsCount: number | null; // Int
    hello: string | null; // String
    store: NexusGenRootTypes['Store'] | null; // Store
    stores: Array<NexusGenRootTypes['Store'] | null> | null; // [Store]
    storesCount: number | null; // Int
  };
  SafetyDepositBox: {
    // field return type
    key: NexusGenEnums['VaultKey'] | null; // VaultKey
    order: number | null; // Int
    store: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    vault: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  SafetyDepositConfig: {
    // field return type
    amountRanges: Array<NexusGenRootTypes['AmountRange'] | null> | null; // [AmountRange]
    amountType: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    auctionManager: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    lengthType: NexusGenEnums['TupleNumericType'] | null; // TupleNumericType
    order: NexusGenScalars['BN'] | null; // BN
    participationConfig: NexusGenRootTypes['ParticipationConfigV2'] | null; // ParticipationConfigV2
    participationState: NexusGenRootTypes['ParticipationStateV2'] | null; // ParticipationStateV2
    winningConfigType: NexusGenEnums['WinningConfigType'] | null; // WinningConfigType
  };
  Store: {
    // field return type
    auctionProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
    public: boolean | null; // Boolean
    tokenMetadataProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenVaultProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
  };
  Vault: {
    // field return type
    allowFurtherShareCreation: boolean | null; // Boolean
    authority: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionMint: NexusGenScalars['PublicKey'] | null; // PublicKey
    fractionTreasury: NexusGenScalars['PublicKey'] | null; // PublicKey
    key: NexusGenEnums['VaultKey'] | null; // VaultKey
    lockedPricePerShare: NexusGenScalars['BN'] | null; // BN
    pricingLookupAddress: NexusGenScalars['PublicKey'] | null; // PublicKey
    redeemTreasury: NexusGenScalars['PublicKey'] | null; // PublicKey
    state: NexusGenEnums['VaultState'] | null; // VaultState
    tokenProgram: NexusGenScalars['PublicKey'] | null; // PublicKey
    tokenTypeCount: number | null; // Int
  };
  WhitelistedCreator: {
    // field return type
    activated: boolean | null; // Boolean
    address: NexusGenScalars['PublicKey'] | null; // PublicKey
    artworks: Array<NexusGenRootTypes['Metadata'] | null> | null; // [Metadata]
    key: NexusGenEnums['MetaplexKey'] | null; // MetaplexKey
  };
}

export interface NexusGenFieldTypeNames {
  Account: {
    // field return type name
    data: 'Buffer';
    lamports: 'Int';
    owner: 'PublicKey';
  };
  AccountWithAuctionData: {
    // field return type name
    account: 'Account';
    info: 'AuctionData';
    pubkey: 'PublicKey';
  };
  AccountWithAuctionDataExtended: {
    // field return type name
    account: 'Account';
    info: 'AuctionDataExtended';
    pubkey: 'PublicKey';
  };
  AccountWithAuctionManagerV1: {
    // field return type name
    account: 'Account';
    info: 'AuctionManagerV1';
    pubkey: 'PublicKey';
  };
  AccountWithAuctionManagerV2: {
    // field return type name
    account: 'Account';
    info: 'AuctionManagerV2';
    pubkey: 'PublicKey';
  };
  AccountWithBidRedemptionTicket: {
    // field return type name
    account: 'Account';
    info: 'BidRedemptionTicket';
    pubkey: 'PublicKey';
  };
  AccountWithBidderMetadata: {
    // field return type name
    account: 'Account';
    info: 'BidderMetadata';
    pubkey: 'PublicKey';
  };
  AccountWithBidderPot: {
    // field return type name
    account: 'Account';
    info: 'BidderPot';
    pubkey: 'PublicKey';
  };
  AccountWithEdition: {
    // field return type name
    account: 'Account';
    info: 'Edition';
    pubkey: 'PublicKey';
  };
  AccountWithMasterEdition: {
    // field return type name
    account: 'Account';
    info: 'MasterEdition';
    pubkey: 'PublicKey';
  };
  AccountWithMetadata: {
    // field return type name
    account: 'Account';
    info: 'Metadata';
    pubkey: 'PublicKey';
  };
  AccountWithPayoutTicket: {
    // field return type name
    account: 'Account';
    info: 'PayoutTicket';
    pubkey: 'PublicKey';
  };
  AccountWithPrizeTrackingTicket: {
    // field return type name
    account: 'Account';
    info: 'PrizeTrackingTicket';
    pubkey: 'PublicKey';
  };
  AccountWithSafetyDepositBox: {
    // field return type name
    account: 'Account';
    info: 'SafetyDepositBox';
    pubkey: 'PublicKey';
  };
  AccountWithSafetyDepositConfig: {
    // field return type name
    account: 'Account';
    info: 'SafetyDepositConfig';
    pubkey: 'PublicKey';
  };
  AccountWithStore: {
    // field return type name
    account: 'Account';
    info: 'Store';
    pubkey: 'PublicKey';
  };
  AccountWithVault: {
    // field return type name
    account: 'Account';
    info: 'Vault';
    pubkey: 'PublicKey';
  };
  AccountWithWhitelistedCreator: {
    // field return type name
    account: 'Account';
    info: 'WhitelistedCreator';
    pubkey: 'PublicKey';
  };
  AmountRange: {
    // field return type name
    amount: 'BN';
    length: 'BN';
  };
  AuctionData: {
    // field return type name
    auctionGap: 'BN';
    authority: 'PublicKey';
    bidRedemptionKey: 'PublicKey';
    bidState: 'BidState';
    endAuctionAt: 'BN';
    endedAt: 'BN';
    lastBid: 'BN';
    priceFloor: 'PriceFloor';
    state: 'AuctionState';
    tokenMint: 'PublicKey';
  };
  AuctionDataExtended: {
    // field return type name
    gapTickSizePercentage: 'Int';
    tickSize: 'BN';
    totalUncancelledBids: 'BN';
  };
  AuctionManagerV1: {
    // field return type name
    key: 'MetaplexKey';
  };
  AuctionManagerV2: {
    // field return type name
    key: 'MetaplexKey';
  };
  Bid: {
    // field return type name
    amount: 'BN';
    key: 'PublicKey';
  };
  BidRedemptionTicket: {
    // field return type name
    key: 'MetaplexKey';
  };
  BidState: {
    // field return type name
    bids: 'Bid';
    max: 'BN';
    type: 'BidStateType';
  };
  BidderMetadata: {
    // field return type name
    auctionPubkey: 'PublicKey';
    bidderPubkey: 'PublicKey';
    cancelled: 'Boolean';
    lastBid: 'BN';
    lastBidTimestamp: 'BN';
  };
  BidderPot: {
    // field return type name
    auctionAct: 'PublicKey';
    bidderAct: 'PublicKey';
    bidderPot: 'PublicKey';
    emptied: 'Boolean';
  };
  Creator: {
    // field return type name
    address: 'PublicKey';
    share: 'Int';
    verified: 'Boolean';
  };
  Data: {
    // field return type name
    creators: 'Creator';
    name: 'String';
    sellerFeeBasisPoints: 'Int';
    symbol: 'String';
    uri: 'String';
  };
  Edition: {
    // field return type name
    edition: 'BN';
    key: 'MetadataKey';
    parent: 'PublicKey';
  };
  MasterEditionV1: {
    // field return type name
    key: 'MetadataKey';
    maxSupply: 'BN';
    oneTimePrintingAuthorizationMint: 'PublicKey';
    printingMint: 'PublicKey';
    supply: 'BN';
  };
  MasterEditionV2: {
    // field return type name
    key: 'MetadataKey';
    maxSupply: 'BN';
    supply: 'BN';
  };
  Metadata: {
    // field return type name
    data: 'Data';
    edition: 'PublicKey';
    isMutable: 'Boolean';
    key: 'MetadataKey';
    masterEdition: 'PublicKey';
    mint: 'PublicKey';
    primarySaleHappened: 'Boolean';
    updateAuthority: 'PublicKey';
  };
  ParsedAccount: {
    // field return type name
    account: 'Account';
    pubkey: 'PublicKey';
  };
  ParticipationConfigV2: {
    // field return type name
    fixedPrice: 'BN';
    nonWinningConstraint: 'NonWinningConstraint';
    winnerConstraint: 'WinningConstraint';
  };
  ParticipationStateV2: {
    // field return type name
    collectedToAcceptPayment: 'BN';
  };
  PayoutTicket: {
    // field return type name
    amountPaid: 'BN';
    key: 'MetaplexKey';
    recipient: 'PublicKey';
  };
  PriceFloor: {
    // field return type name
    hash: 'Uint8Array';
    minPrice: 'BN';
    type: 'PriceFloorType';
  };
  PrizeTrackingTicket: {
    // field return type name
    expectedRedemptions: 'BN';
    key: 'MetaplexKey';
    metadata: 'PublicKey';
    redemptions: 'BN';
    supplySnapshot: 'BN';
  };
  Query: {
    // field return type name
    creators: 'AccountWithWhitelistedCreator';
    creatorsByStore: 'AccountWithWhitelistedCreator';
    creatorsCount: 'Int';
    hello: 'String';
    store: 'AccountWithStore';
    stores: 'AccountWithStore';
    storesCount: 'Int';
  };
  SafetyDepositBox: {
    // field return type name
    key: 'VaultKey';
    order: 'Int';
    store: 'PublicKey';
    tokenMint: 'PublicKey';
    vault: 'PublicKey';
  };
  SafetyDepositConfig: {
    // field return type name
    amountRanges: 'AmountRange';
    amountType: 'TupleNumericType';
    auctionManager: 'PublicKey';
    key: 'MetaplexKey';
    lengthType: 'TupleNumericType';
    order: 'BN';
    participationConfig: 'ParticipationConfigV2';
    participationState: 'ParticipationStateV2';
    winningConfigType: 'WinningConfigType';
  };
  Store: {
    // field return type name
    auctionProgram: 'PublicKey';
    key: 'MetaplexKey';
    public: 'Boolean';
    tokenMetadataProgram: 'PublicKey';
    tokenProgram: 'PublicKey';
    tokenVaultProgram: 'PublicKey';
  };
  Vault: {
    // field return type name
    allowFurtherShareCreation: 'Boolean';
    authority: 'PublicKey';
    fractionMint: 'PublicKey';
    fractionTreasury: 'PublicKey';
    key: 'VaultKey';
    lockedPricePerShare: 'BN';
    pricingLookupAddress: 'PublicKey';
    redeemTreasury: 'PublicKey';
    state: 'VaultState';
    tokenProgram: 'PublicKey';
    tokenTypeCount: 'Int';
  };
  WhitelistedCreator: {
    // field return type name
    activated: 'Boolean';
    address: 'PublicKey';
    key: 'MetaplexKey';
  };
}

export interface NexusGenArgTypes {
  Query: {
    creators: {
      // args
      id?: string | null; // String
    };
    creatorsByStore: {
      // args
      storeId: string; // String!
    };
    hello: {
      // args
      name?: string | null; // String
    };
    store: {
      // args
      id: string; // String!
    };
  };
}

export interface NexusGenAbstractTypeMembers {
  MasterEdition: 'MasterEditionV1' | 'MasterEditionV2';
}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = 'MasterEdition';

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: true;
    __typename: false;
    isTypeOf: false;
  };
};

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes['inputNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['scalarNames'];
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames'];
  allNamedTypes:
    | NexusGenTypes['allInputTypes']
    | NexusGenTypes['allOutputTypes'];
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string,
  > {}
  interface NexusGenPluginInputFieldConfig<
    TypeName extends string,
    FieldName extends string,
  > {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
