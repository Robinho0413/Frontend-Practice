

export default function Home() {
  return (
    <div className="bg-hero bg-no-repeat">
      <h1 className="text-3xl font-bold underline mt-80">
        Hello world!
      </h1>
      <div className="font-monextBlack text-2xl">Texte en Monument Extended Black</div>
      <div className="font-monextLightItalic text-lg">
        Texte en Monument Extended Light Italic
      </div>
      <div style={{ fontFamily: "var(--font-monext-black)" }}>
        Texte en Monument Extended Black
      </div>
    </div>
  );
}
