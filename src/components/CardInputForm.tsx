interface CardInputFormProps {
  name: string;
  quote: string;
  faction: string;
  type: string;
  strength: string;
  range: string;
  ability: string;
  image: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
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
  onInputChange,
  onImageChange,
}) => {
  return (
    <form className="card-input-form flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 font-semibold text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          className="input-field p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="quote" className="mb-2 font-semibold text-white">
          Quote
        </label>
        <textarea
          name="quote"
          value={quote}
          onChange={onInputChange}
          className="input-field p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="flex space-x-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="faction" className="mb-2 font-semibold text-white">
            Faction
          </label>
          <select
            name="faction"
            value={faction}
            onChange={onInputChange}
            className="input-field p-2 border border-gray-300 rounded w-full"
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
            value={type}
            onChange={onInputChange}
            className="input-field p-2 border border-gray-300 rounded w-full"
          >
            <option value="Standard">Standard</option>
            <option value="Hero">Hero</option>
            <option value="Special">Special</option>
            <option value="Leader">Leader</option>
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
            value={strength}
            onChange={onInputChange}
            className="input-field p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="range" className="mb-2 font-semibold text-white">
            Range
          </label>
          <select
            name="range"
            value={range}
            onChange={onInputChange}
            className="input-field p-2 border border-gray-300 rounded w-full"
          >
            <option value="Melee">Melee</option>
            <option value="Agile">Agile</option>
            <option value="Ranged">Ranged</option>
            <option value="Siege">Siege</option>
            <option value="None">None</option>
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
            value={ability}
            onChange={onInputChange}
            className="input-field p-2 border border-gray-300 rounded w-full"
          >
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
            <option value="Clear">Clear</option>
            <option value="Frost">Frost</option>
            <option value="Fog">Fog</option>
            <option value="Rain">Rain</option>
            <option value="Storm">Storm</option>
            <option value="Decoy">Decoy</option>
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
            className="input-field p-2 border border-gray-300 rounded w-full"
          />
        </div>
      </div>
    </form>
  );
};

export default CardInputForm;
