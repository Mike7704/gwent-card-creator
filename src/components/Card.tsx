"use client";

import Image from "next/image";
import {
  factionBorders,
  typeBorders,
  rangeIcons,
  abilityIcons,
  typePanelNoBanner,
  typePanelBanner,
  typeStrengthIcon,
  factionBanner,
} from "@/constants/cardImagePaths";

interface CardProps {
  name: string;
  quote: string;
  faction: string;
  type: string;
  strength: string;
  range: string;
  ability: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ name, quote, faction, type, strength, range, ability, image }) => {
  const cardImage = image || "/images/ImageNotFound.png";

  const getImage = (images: { [key: string]: string }, key: string, width: number, height: number) => {
    return images[key] ? <Image src={images[key]} alt={`${key} icon`} width={width} height={height} /> : null;
  };

  return (
    <div
      className="relative w-[370px] h-[531px] bg-cover bg-center text-white p-4 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-l italic">&quot;{quote}&quot;</p>
      {faction === "Neutral" ? getImage(typePanelNoBanner, type, 370, 128) : getImage(typePanelBanner, type, 370, 128)}
      {faction !== "Neutral" && getImage(factionBanner, faction, 80, 415)}
      {(type === "Standard" || type === "Hero") && getImage(typeStrengthIcon, type, 103, 115)}
      {type === "Standard" ? getImage(factionBorders, faction, 370, 531) : getImage(typeBorders, type, 370, 531)}
      <p className="text-l font-bold">Strength: {strength}</p>
      {getImage(rangeIcons, range, 103, 115)}
      <p className="text-l">Ability: {ability}</p>
      {getImage(abilityIcons, ability, 103, 115)}
    </div>
  );
};

export default Card;
