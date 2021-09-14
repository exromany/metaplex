import { AuctionData } from '@oyster/common/dist/lib/actions/auction';
import type {
  MetaState,
  ParsedAccount,
  AuctionManagerV1,
} from '@oyster/common';
import {
  processAccountsIntoAuctionView,
  getAuctionBids as getBids,
  buildListWhileNonZero,
} from '@oyster/common/dist/lib/models/auction';
import {
  MetaplexKey,
  WinningConstraint,
  NonWinningConstraint,
} from '@oyster/common/dist/lib/models/metaplex/index';
import { listWrapPubkey, wrapPubkey } from '../utils/mapInfo';
import { Auction, AuctionManager } from '../sourceTypes';

export const getAuctionMetadata = (auction: Auction, state: MetaState) => {
  const safetyDeposits = Object.values(state.safetyDepositBoxesByVaultAndIndex);

  const vaultId = auction.manager.vault;
  const boxes = safetyDeposits.filter(box => {
    return box.info.vault === vaultId;
  });

  return boxes
    .map(box => {
      let metadata = state.metadataByMint[box.info.tokenMint];
      if (auction.manager.key === MetaplexKey.AuctionManagerV1 && !metadata) {
        // Means is a limited edition v1, so the tokenMint is the printingMint
        const masterEdition =
          state.masterEditionsByPrintingMint[box.info.tokenMint];
        if (masterEdition) {
          metadata = state.metadataByMasterEdition[masterEdition.pubkey];
        }
      }
      return metadata;
    })
    .filter(Boolean);
};

export const getAuctionThumbnail = (auction: Auction, state: MetaState) => {
  const metadata = getAuctionMetadata(auction, state)[0];
  return metadata ? wrapPubkey(metadata) : null;
};

export const getAuctionBids = (auction: Auction, state: MetaState) => {
  return getBids(
    Object.values(state.bidderMetadataByAuctionAndBidder),
    auction.pubkey,
  );
};

export const getVault = (manager: AuctionManager, state: MetaState) => {
  return wrapPubkey(state.vaults[manager.vault]);
};

export const getWinnerAmount = (manager: AuctionManager) => {
  console.log(manager);
};

// getAmountForWinner(winnerIndex: number, safetyDepositBoxIndex: number): BN {
//   if (this.instance.info.key == MetaplexKey.AuctionManagerV1) {
//     return new BN(
//       (this.instance.info as AuctionManagerV1).settings.winningConfigs[
//         winnerIndex
//       ].items.find(i => i.safetyDepositBoxIndex == safetyDepositBoxIndex)
//         ?.amount || 0,
//     );
//   } else {
//     const safetyDepositConfig =
//       this.safetyDepositConfigs[safetyDepositBoxIndex];
//     return safetyDepositConfig.info.getAmountForWinner(new BN(winnerIndex));
//   }
// }

export const getAuctionHighestBid = (auction: Auction, state: MetaState) => {
  const bids = getBids(
    Object.values(state.bidderMetadataByAuctionAndBidder),
    auction.pubkey,
  );
  return bids?.[0];
};

export const getSafetyDepositConfig = (
  manager: AuctionManager,
  state: MetaState,
) => {
  const { safetyDepositConfigsByAuctionManagerAndIndex } = state;
  const configs = buildListWhileNonZero(
    safetyDepositConfigsByAuctionManagerAndIndex,
    manager.pubkey,
  );
  return listWrapPubkey(configs);
};

export const getParticipationConfig = (
  manager: AuctionManager,
  state: MetaState,
) => {
  if (manager.key === MetaplexKey.AuctionManagerV2) {
    const safetyDepositConfigs = getSafetyDepositConfig(manager, state);
    return (
      safetyDepositConfigs
        .filter(s => s.participationConfig)
        .map(s => ({
          winnerConstraint:
            s.participationConfig?.winnerConstraint ||
            WinningConstraint.NoParticipationPrize,
          nonWinningConstraint:
            s.participationConfig?.nonWinningConstraint ||
            NonWinningConstraint.GivenForFixedPrice,
          fixedPrice: s.participationConfig?.fixedPrice || null,
          safetyDepositBoxIndex: s.order.toNumber(),
        }))[0] || null
    );
  } else {
    return (manager as AuctionManagerV1).settings.participationConfig || null;
  }
};

export const auctionView = (
  auction: ParsedAccount<AuctionData>,
  state: MetaState,
) => {
  const {
    auctionManagersByAuction,
    safetyDepositBoxesByVaultAndIndex,
    metadataByMint,
    bidderMetadataByAuctionAndBidder,
    bidderPotsByAuctionAndBidder,
    vaults,
    masterEditions,
    masterEditionsByPrintingMint,
    masterEditionsByOneTimeAuthMint,
    metadataByMasterEdition,
    safetyDepositConfigsByAuctionManagerAndIndex,
    bidRedemptionV2sByAuctionManagerAndWinningIndex,
  } = state;

  const view = processAccountsIntoAuctionView(
    '',
    auction,
    auctionManagersByAuction,
    safetyDepositBoxesByVaultAndIndex,
    metadataByMint,
    bidderMetadataByAuctionAndBidder,
    bidderPotsByAuctionAndBidder,
    bidRedemptionV2sByAuctionManagerAndWinningIndex,
    masterEditions,
    vaults,
    safetyDepositConfigsByAuctionManagerAndIndex,
    masterEditionsByPrintingMint,
    masterEditionsByOneTimeAuthMint,
    metadataByMasterEdition,
    {} as any,
    undefined,
  );
  if (!view) return undefined;

  return {
    auction: wrapPubkey(auction),
    state: view?.state,
    totallyComplete: view.totallyComplete,
    manager: view.auctionManager,
    vault: wrapPubkey(view.vault),
    safetyDepositBoxes: listWrapPubkey(view.safetyDepositBoxes),
    items: view.items,
    participationItem: view.participationItem,
    thumbnail: view.thumbnail,
  };
};
