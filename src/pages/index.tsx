import Dice from "../components/Dice";
import generateRandomSyllables from "../helpers/generateRandomSyllables";
import { useState } from "react";

function App() {
  const [syllable, setSyllable] = useState<Array<string>>([]);

  return (
    <main
      style={{
        backgroundImage: "url(/images/pinturas.png)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "30px",
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h1>Sílaba e Companhia</h1>
        {syllable.length === 0 && <p>Clique no botão para gerar as sílabas</p>}
        {syllable.length > 0 && (
          <div>
            <div>
              <Dice text={syllable[0]} />
              <Dice text={syllable[1]} />
            </div>
            <p
              style={{
                border: "2px solid gray",
                width: "fit-content",
                padding: "5px 70px",
                margin: "10px auto",
                fontWeight: "bold",
              }}
            >
              {syllable}
            </p>
          </div>
        )}
        <button
          style={{ width: "150px", padding: "15x 20px" }}
          onClick={() => {
            setSyllable(generateRandomSyllables());
          }}
        >
          GERAR
        </button>
      </div>
    </main>
  );
}

export default App;
