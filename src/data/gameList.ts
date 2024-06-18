import { IGame } from "../types/game";

import HamsterKombatIcon from "../assets/hamster_kombat.jpg";
import CatGoldMinerIcon from "../assets/cat_gold_miner.jpg";

export const GameList = [
  {
    id: 0,
    name: "Hamster Kombat",
    url: "https://t.me/hAmster_kombat_bot/start?startapp=kentId406006297",
    icon: HamsterKombatIcon,
  } as IGame,
  {
    id: 1,
    name: "Cat Gold Miner",
    url: "https://t.me/catgoldminerbot?start=club_1002132956701_406006297",
    icon: CatGoldMinerIcon,
  } as IGame,
] as IGame[];
