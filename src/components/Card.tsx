"use client";

import Image from "next/image";

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

  const factionBorders = {
    "Northern Realms": "/images/border/border_northern_realms.png",
    Nilfgaard: "/images/border/border_nilfgaard.png",
    ScoiaTael: "/images/border/border_scoiatael.png",
    Monsters: "/images/border/border_monsters.png",
    Skellige: "/images/border/border_skellige.png",
    Neutral: "/images/border/border_neutral.png",
  };

  const typeBorders = {
    Hero: "/images/border/border_hero.png",
    Special: "/images/border/border_special.png",
  };

  const rangeIcons = {
    Melee: "/images/range/card_row_close.png",
    Agile: "/images/range/card_row_agile.png",
    Ranged: "/images/range/card_row_ranged.png",
    Siege: "/images/range/card_row_siege.png",
  };

  const abilityIcons = {
    Avenger: "/images/ability/card_ability_avenger.png",
    Bond: "/images/ability/card_ability_bond.png",
    Horn: "/images/ability/card_ability_horn.png",
    Mardroeme: "/images/ability/card_ability_mardroeme.png",
    Medic: "/images/ability/card_ability_medic.png",
    Morale: "/images/ability/card_ability_morale.png",
    Morph: "/images/ability/card_ability_morph.png",
    Muster: "/images/ability/card_ability_muster.png",
    Scorch: "/images/ability/card_ability_scorch.png",
    ScorchRow: "/images/ability/card_ability_scorch_row.png",
    Spy: "/images/ability/card_ability_spy.png",
    Clear: "/images/ability/card_ability_clear.png",
    Frost: "/images/ability/card_ability_frost.png",
    Fog: "/images/ability/card_ability_fog.png",
    Rain: "/images/ability/card_ability_rain.png",
    Storm: "/images/ability/card_ability_storm.png",
    Decoy: "/images/ability/card_ability_decoy.png",
  };

  const getIcon = (icons: { [key: string]: string }, key: string) => {
    return icons[key] ? <Image src={icons[key]} alt={`${key} icon`} width={103} height={115} /> : null;
  };

  const getImage = (images: { [key: string]: string }, key: string) => {
    return images[key] ? <Image src={images[key]} alt={`${key} border`} width={370} height={531} /> : null;
  };

  return (
    <div
      className="relative w-[370px] h-[531px] bg-cover bg-center text-white p-4 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-l italic">&quot;{quote}&quot;</p>
      {type === "Standard" ? getImage(factionBorders, faction) : getImage(typeBorders, type)}
      <p className="text-l">Type: {type}</p>
      <p className="text-l font-bold">Strength: {strength}</p>
      {getIcon(rangeIcons, range)}
      <p className="text-l">Ability: {ability}</p>
      {getIcon(abilityIcons, ability)}
    </div>
  );
};

export default Card;
