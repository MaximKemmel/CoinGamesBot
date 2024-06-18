import { IGame } from "../types/game";

import HamsterKombatIcon from "../assets/hamster_kombat.jpg";
import CatGoldMinerIcon from "../assets/cat_gold_miner.jpg";
import BlumIcon from "../assets/blum.jpg";
import VertusIcon from "../assets/vertus.jpg";
import BcoinIcon from "../assets/bcoin2048.jpg";
import CityHolderGameIcon from "../assets/city_holder_game.jpg";
import CatizenMantleIcon from "../assets/catizen_mantle.jpg";
import CatizenTonIcon from "../assets/catizen_mantle.jpg";
import MemeFiIcon from "../assets/meme_fi.jpg";
import PocketFiIcon from "../assets/pocket_fi.jpg";
import FuelJettonIcon from "../assets/fuel_jetton.jpg";
import BodyPumpIcon from "../assets/body_pump.jpg";

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
  {
    id: 5,
    name: "City Holder Game",
    url: "https://t.me/cityholder?start=kemdeco",
    icon: CityHolderGameIcon,
    show_description: false,
  } as IGame,
  {
    id: 6,
    name: "Catizen Mantle",
    url: "https://t.me/Catizen_Mntbot/gameapp?startapp=r_3093_22018399",
    icon: CatizenMantleIcon,
    show_description: false,
  } as IGame,
  {
    id: 7,
    name: "Catizen TON",
    url: "https://t.me/catizenbot/gameapp?startapp=r_3093_17847050",
    icon: CatizenTonIcon,
    show_description: false,
  } as IGame,
  {
    id: 8,
    name: "MemeFi",
    url: "https://t.me/memefi_coin_bot?start=r_4255932e2e",
    icon: MemeFiIcon,
    show_description: false,
  } as IGame,
  {
    id: 9,
    name: "PocketFi",
    url: "https://t.me/pocketfi_bot/Mining?startapp=ref-406006297-alliance-cryptanci",
    icon: PocketFiIcon,
    show_description: false,
  } as IGame,
  {
    id: 10,
    name: "FuelvJetton",
    url: "https://t.me/fueljetton_bot/app?startapp=406006297",
    icon: FuelJettonIcon,
    show_description: false,
  } as IGame,
  {
    id: 11,
    name: "Body Pump",
    url: "https://t.me/Bodypump_app_bot?start=4c6135d3-5dd6-433b-87be-09143d14d430",
    icon: BodyPumpIcon,
    show_description: false,
  } as IGame,
] as IGame[];
