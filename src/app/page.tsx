import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }}>
      <main className="">
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
      </main>
      <footer className="text-white">
        <p>Michael Cowley</p>
      </footer>
    </div>
  );
}
