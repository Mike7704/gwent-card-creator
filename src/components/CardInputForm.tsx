"use client";
import { useState, useEffect } from "react";
import { CardData } from "@/constants/cardData";

interface CardInputFormProps {
  name: string;
  quote: string;
  faction: string;
  type: string;
  strength: string;
  range: string;
  ability: string;
  image: string;
  onInputChange: (formData: CardData) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardInputForm: React.FC<CardInputFormProps> = ({
  name,
  quote,
  faction,
  type,
  strength,
  range,
  ability,
  image,
  onInputChange,
  onImageChange,
}) => {
  const [formData, setFormData] = useState({
    name,
    quote,
    faction,
    type,
    strength,
    range,
    ability,
    image,
  });

  useEffect(() => {
    onInputChange(formData); // Call the passed in onInputChange prop with the updated formData
  }, [formData, onInputChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      if (name === "strength") {
        if (Number(value) > 99) {
          updatedData.strength = "99";
        } else if (Number(value) < -99) {
          updatedData.strength = "-99";
        }
      }
      if (name === "type") {
        if (value === "Special") {
          updatedData.range = "None";
          updatedData.ability = "Clear";
        } else if ((value === "Hero" || value === "Standard") && formData.type === "Special") {
          updatedData.range = "Melee";
          updatedData.ability = "None";
        }
      }
      return updatedData;
    });
  };

  return (
    <form className="card-input-form flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 font-semibold text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          maxLength={28}
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="quote" className="mb-2 font-semibold text-white">
          Quote
        </label>
        <textarea
          name="quote"
          value={formData.quote}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="flex space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="faction" className="mb-2 font-semibold text-white">
            Faction
          </label>
          <select
            name="faction"
            value={formData.faction}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="Neutral">Neutral</option>
            <option value="Northern Realms">Northern Realms</option>
            <option value="Nilfgaard">Nilfgaard</option>
            <option value="ScoiaTael">Scoia&apos;Tael</option>
            <option value="Monsters">Monsters</option>
            <option value="Skellige">Skellige</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="type" className="mb-2 font-semibold text-white">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
          >
            <option value="Standard">Standard</option>
            <option value="Hero">Hero</option>
            <option value="Special">Special</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="strength" className="mb-2 font-semibold text-white">
            Strength
          </label>
          <input
            type="number"
            name="strength"
            min={-99}
            max={99}
            value={formData.strength}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="range" className="mb-2 font-semibold text-white">
            Range
          </label>
          <select
            name="range"
            value={formData.range}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
          >
            {formData.type === "Special" ? (
              <option value="None">None</option>
            ) : (
              <>
                <option value="Melee">Melee</option>
                <option value="Agile">Agile</option>
                <option value="Ranged">Ranged</option>
                <option value="Siege">Siege</option>
              </>
            )}
          </select>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="ability" className="mb-2 font-semibold text-white">
            Ability
          </label>
          <select
            name="ability"
            value={formData.ability}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full"
          >
            {formData.type === "Special" ? (
              <>
                <option value="Clear">Clear</option>
                <option value="Frost">Frost</option>
                <option value="Fog">Fog</option>
                <option value="Rain">Rain</option>
                <option value="Storm">Storm</option>
                <option value="Decoy">Decoy</option>
                <option value="Horn2">Horn</option>
                <option value="Mardroeme2">Mardroeme</option>
                <option value="Scorch2">Scorch</option>
              </>
            ) : (
              <>
                <option value="None">None</option>
                <option value="Avenger">Avenger</option>
                <option value="Bond">Bond</option>
                <option value="Horn">Horn</option>
                <option value="Mardroeme">Mardroeme</option>
                <option value="Medic">Medic</option>
                <option value="Morale">Morale</option>
                <option value="Morph">Morph</option>
                <option value="Muster">Muster</option>
                <option value="Scorch">Scorch</option>
                <option value="ScorchRow">Scorch Row</option>
                <option value="Spy">Spy</option>
              </>
            )}
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="image" className="mb-2 font-semibold text-white">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            onChange={onImageChange}
            className="p-1 border border-gray-300 rounded w-full bg-white text-black"
          />
        </div>
      </div>
    </form>
  );
};

export default CardInputForm;
