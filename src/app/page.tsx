"use client";

import Image from "next/image";
import Card from "@/components/Card";
import CardInputForm from "@/components/CardInputForm";

export default function Home() {
  async function handleFormInput() {
    console.log("Test");
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <header className="w-full p-4 flex justify-center">
        <Image src={"/images/logo.png"} alt={`logo`} width={321} height={210} />
      </header>
      <main className="container mx-auto p-4 flex-grow flex">
        <div className="w-1/2 p-4">
          <Card
            name="Name"
            quote="Quote"
            faction="Monsters"
            type="Hero"
            strength="10"
            range="Melee"
            ability="Morale"
            image="/images/ImageNotFound.png"
          />
        </div>
        <div className="w-1/2 p-4">
          <CardInputForm
            name=""
            quote=""
            strength=""
            faction=""
            type=""
            range=""
            ability=""
            image=""
            onInputChange={handleFormInput}
            onImageChange={handleFormInput}
          />
        </div>
      </main>
      <footer className="w-full p-4 text-center text-white">
        <p>Michael Cowley</p>
      </footer>
    </div>
  );
}
