"use client";

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

  return (
    <div
      className="relative w-[370px] h-[531px] bg-cover bg-center text-white p-4 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${cardImage})` }}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-l italic">&quot;{quote}&quot;</p>
      <p className="text-l">Faction: {faction}</p>
      <p className="text-l">Type: {type}</p>
      <p className="text-l font-bold">Strength: {strength}</p>
      <p className="text-l">Range: {range}</p>
      <p className="text-l">Ability: {ability}</p>
    </div>
  );
};

export default Card;
