"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import CardInputForm from "@/components/CardInputForm";
import { CardData } from "@/constants/cardData";

export default function Home() {
  const [cardData, setCardData] = useState({
    name: "",
    quote: "",
    faction: "Neutral",
    type: "Standard",
    strength: "0",
    range: "Melee",
    ability: "None",
    image: "/images/ImageNotFound.png",
  });

  const handleInputChange = (formData: CardData) => {
    setCardData(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCardData({ ...cardData, image: event.target?.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <header className="w-full p-2 flex justify-center">
        <Image src={"/images/logo.png"} alt={`logo`} width={321} height={210} />
      </header>
      <main className="container relative mx-auto p-2 flex-grow flex flex-col md:flex-row">
        <div className="flex-1 p-2 flex justify-center items-center">
          <Card {...cardData} />
        </div>
        <div className="flex-1 p-2 flex justify-center items-center">
          <CardInputForm {...cardData} onInputChange={handleInputChange} onImageChange={handleImageChange} />
        </div>
      </main>
      <footer className="w-full p-2 text-center text-white border-t border-white opacity-25">
        <p>Gwent Card Creator 2025 - Michael Cowley</p>
      </footer>
    </div>
  );
}
