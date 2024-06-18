const consoantes = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "L",
  "M",
  "N",
  "P",
  "R",
  "S",
  "T",
  "V",
  "Ç"
];
const vogais = ["A", "E", "I", "O", "U"];
const silabas: Array<string> = [];

for (const c of consoantes) {
  for (const v of vogais) {
    silabas.push(c + v);
  }
}

const getRandomSyllables = () => {
  const result = [];
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * silabas.length);
    result.push(silabas[randomIndex]);
  }

  return result;
};

export default getRandomSyllables;
