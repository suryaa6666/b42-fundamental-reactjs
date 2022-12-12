import React from "react";

function EmbedExpression() {

  //Create function here
  const getNama = () => {
    let nama;
    nama = prompt("Masukkan nama mu !")
    return `halo nama saya ${nama}`
  }

  //Create a variable here
  // const nama = "Khafidz"

  return (
    // Code Inside div
    <div>
      {/* <h1>{nama}</h1> */}
      <h1>{getNama()}</h1>
    </div>
  );
}

export default EmbedExpression;
