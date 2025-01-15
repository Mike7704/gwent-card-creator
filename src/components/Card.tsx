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
  return (
    <div className="text-white">
      <Image src={image} alt={`${name} card`} width={75} height={100} className="w-20 h-auto object-contain rounded" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-l italic">{quote}</p>
      <p className="text-l">Faction: {faction}</p>
      <p className="text-l">Type: {type}</p>
      <p className="text-l font-bold">Strength: {strength}</p>
      <p className="text-l">Range: {range}</p>
      <p className="text-l">Ability: {ability}</p>
    </div>
  );
};

export default Card;
