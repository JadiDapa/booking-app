import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";

const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This Property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This Property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This Property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This Property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This Property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This Property is in castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Property has camping activites!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This Property is on arctice area!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This Property has is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Property is in a desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This Property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Property is luxurious!",
  },
];

export default categories;
