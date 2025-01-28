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

  const getImage = (
    images: { [key: string]: string },
    key: string,
    width: number,
    height: number,
    className?: string
  ) => {
    return images[key] ? (
      <Image src={images[key]} alt={`${key} icon`} width={width} height={height} className={className} />
    ) : null;
  };

  return (
    <div
      className="relative w-[370px] h-[575px] bg-cover bg-center text-white p-4 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      {faction === "Neutral"
        ? getImage(typePanelNoBanner, type, 370, 128, "absolute bottom-0 left-0")
        : getImage(typePanelBanner, type, 370, 128, "absolute bottom-0 left-0")}
      {faction !== "Neutral" &&
        getImage(factionBanner, faction, 80, 575, "absolute top-0 left-[7px] object-cover h-[575px]")}
      {type === "Standard"
        ? getImage(factionBorders, faction, 370, 575, "absolute top-0 left-0 h-[575px]")
        : getImage(typeBorders, type, 370, 575, "absolute top-0 left-0 h-[575px]")}
      {(type === "Standard" || type === "Hero") && getImage(typeStrengthIcon, type, 152, 152, "absolute top-0 left-0")}
      {(type === "Standard" || type === "Hero") && getImage(rangeIcons, range, 103, 115, "absolute top-[120px] left-0")}
      {getImage(abilityIcons, ability, 103, 115, "absolute top-[220px] left-0")}
      {(type === "Standard" || type === "Hero") && (
        <p
          className={`absolute top-[18px] left-[52px] transform -translate-x-1/2 text-center font-calibri text-[50px] ${
            type === "Hero" ? "text-white" : "text-black"
          }`}
        >
          {strength}
        </p>
      )}
      <p
        className="absolute top-[456px] left-0 w-full text-center text-black font-calibri text-lg font-semibold"
        style={{ textShadow: "3px 1px 1px white" }}
      >
        {name}
      </p>
      <p
        className="absolute top-[490px] left-0 px-[10px] w-full text-center text-black font-calibri italic leading-tight"
        style={{ textShadow: "3px 1px 1px white" }}
      >
        &quot;{quote}&quot;
      </p>
    </div>
  );
};

export default Card;
