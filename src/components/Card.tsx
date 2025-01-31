"use client";
import Image from "next/image";
import { CardData } from "@/constants/cardData";
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

const Card: React.FC<CardData> = ({ name, quote, faction, type, strength, range, ability, image }) => {
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

  const renderTypePanel = () => {
    return faction === "Neutral"
      ? getImage(typePanelNoBanner, type, 370, 128, "absolute bottom-0 left-0")
      : getImage(typePanelBanner, type, 370, 128, "absolute bottom-0 left-0");
  };

  const renderFactionBanner = () => {
    if (faction !== "Neutral") {
      return getImage(factionBanner, faction, 80, 575, "absolute top-0 left-[7px] object-cover h-[575px]");
    }
    return null;
  };

  const renderBorders = () => {
    return type === "Standard"
      ? getImage(factionBorders, faction, 370, 575, "absolute top-0 left-0 h-[575px]")
      : getImage(typeBorders, type, 370, 575, "absolute top-0 left-0 h-[575px]");
  };

  const renderTypeStrengthIcon = () => {
    if (type === "Standard" || type === "Hero") {
      return getImage(typeStrengthIcon, type, 152, 152, "absolute top-0 left-0");
    }
    return null;
  };

  const renderRangeIcon = () => {
    if (type === "Standard" || type === "Hero") {
      return getImage(rangeIcons, range, 103, 115, "absolute top-[120px] left-0");
    }
    return null;
  };

  const renderAbilityIcon = () => {
    return getImage(
      abilityIcons,
      ability,
      103,
      115,
      `absolute ${type === "Standard" || type === "Hero" ? "top-[220px] left-0" : "top-0 left-0"}`
    );
  };

  const renderStrength = () => {
    if (type === "Standard" || type === "Hero") {
      return (
        <p
          className={`absolute top-[21px] left-[52px] transform -translate-x-1/2 text-center font-calibri text-[45px] font-semibold ${
            type === "Hero" ? "text-white" : "text-black"
          }`}
        >
          {strength}
        </p>
      );
    }
    return null;
  };

  const renderName = () => {
    return (
      <p
        className={`absolute top-[456px] left-0 w-full text-center text-black font-calibri text-lg font-semibold ${
          faction !== "Neutral" ? "pl-16" : ""
        }`}
        style={{ textShadow: "3px 1px 1px white" }}
      >
        {name}
      </p>
    );
  };

  const renderQuote = () => {
    return (
      <p
        className={`absolute top-[490px] left-0 px-[10px] w-full text-center text-black font-calibri italic leading-tight ${
          faction !== "Neutral" ? "pl-20 pr-4" : "px-4"
        }`}
        style={{ textShadow: "3px 1px 1px white" }}
      >
        &quot;{quote}&quot;
      </p>
    );
  };

  return (
    <div
      className="relative w-[370px] h-[575px] bg-cover bg-center text-white p-4 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      {renderTypePanel()}
      {renderFactionBanner()}
      {renderBorders()}
      {renderTypeStrengthIcon()}
      {renderRangeIcon()}
      {renderAbilityIcon()}
      {renderStrength()}
      {renderName()}
      {renderQuote()}
    </div>
  );
};

export default Card;
