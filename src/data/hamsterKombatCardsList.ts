import { IHamsterKombatCard } from "../types/hamsterKombatCard";

import FanTokensIcon from "../assets/hamster_kombat/fan_tokens.png";
import StakingIcon from "../assets/hamster_kombat/staking.svg";
import BTCPairsIcon from "../assets/hamster_kombat/btc_pairs.svg";
import ETHPairsIcon from "../assets/hamster_kombat/eth_pairs.svg";
import TOP10CmcPairsIcon from "../assets/hamster_kombat/top10_cmc_pairs.svg";
import GameFiTokensIcon from "../assets/hamster_kombat/gamefi_tokens.svg";
import AntiMoneyLounderingIcon from "../assets/hamster_kombat/anti_money_loundering.svg";
import LicenceIndonesiaIcon from "../assets/hamster_kombat/licence_indonesia.png";
import Top10GlobalRankingIcon from "../assets/hamster_kombat/top10_global.png";

export const HamsterKombatCardsList = [
  {
    name: "Fan tokens",
    icon: FanTokensIcon,
    group: "Markets",
    isActive: false,
  } as IHamsterKombatCard,
  {
    name: "Staking",
    icon: StakingIcon,
    group: "Markets",
    isActive: false,
  } as IHamsterKombatCard,
  {
    name: "BTC pairs",
    icon: BTCPairsIcon,
    group: "Markets",
    isActive: false,
  } as IHamsterKombatCard,
  {
    name: "ETH pairs",
    icon: ETHPairsIcon,
    group: "Markets",
    isActive: false,
  } as IHamsterKombatCard,
  {
    name: "Top 10 cmc pairs",
    icon: TOP10CmcPairsIcon,
    group: "Markets",
    isActive: false,
  } as IHamsterKombatCard,
  {
    name: "GameFi tokens",
    icon: GameFiTokensIcon,
    group: "Markets",
    isActive: false,
  } as IHamsterKombatCard,
  {
    name: "Anti money loundering",
    icon: AntiMoneyLounderingIcon,
    group: "Legal",
    isActive: true,
  } as IHamsterKombatCard,
  {
    name: "Licence Indonesia",
    icon: LicenceIndonesiaIcon,
    group: "Legal",
    isActive: true,
  } as IHamsterKombatCard,
  {
    name: "Top 10 Global Ranking",
    icon: Top10GlobalRankingIcon,
    group: "Specials",
    isActive: true,
  },
] as IHamsterKombatCard[];
