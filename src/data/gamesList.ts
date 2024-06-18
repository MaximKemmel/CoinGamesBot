import { IGame } from "../types/game";

import HamsterKombatIcon from "../assets/hamster_kombat.jpg";
import CatGoldMinerIcon from "../assets/cat_gold_miner.jpg";
import BlumIcon from "../assets/blum.jpg";
import VertusIcon from "../assets/vertus.jpg";
import BcoinIcon from "../assets/bcoin2048.jpg";

export const GameList = [
  {
    id: 0,
    name: "Hamster Kombat",
    url: "https://t.me/hAmster_kombat_bot/start?startapp=kentId406006297",
    icon: HamsterKombatIcon,
    show_description: true,
    description_url: "/hamster_kombat",
  } as IGame,
  {
    id: 1,
    name: "Cat Gold Miner",
    url: "https://t.me/catgoldminerbot?start=406006297",
    icon: CatGoldMinerIcon,
    show_description: false,
  } as IGame,
  {
    id: 2,
    name: "Blum",
    url: "https://t.me/BlumCryptoBot/app?startapp=ref_EP3DiBG5yr",
    icon: BlumIcon,
    show_description: false,
  } as IGame,
  {
    id: 3,
    name: "Vertus",
    url: "https://t.me/vertus_app_bot/app?startapp=406006297",
    icon: VertusIcon,
    show_description: false,
  } as IGame,
  {
    id: 4,
    name: "Bcoin 2048",
    url: "https://t.me/Bcoin2048bot/app?startapp=ref_pCH7Qj5YUGFV6b36B7tcRwkE",
    icon: BcoinIcon,
    show_description: false,
  } as IGame,
] as IGame[];
