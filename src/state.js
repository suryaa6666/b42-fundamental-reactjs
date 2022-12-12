import { useState } from "react";

function State() {
  //init State
  let [number, setNumber] = useState(0);
  // let angka = 0;

  //Create Function Add
  function Add() {
    // angka++;
    // console.log(angka);
    setNumber(number + 1);
  }

  //Create Function Less
  function Less() {
    // angka--;
    // console.log(angka);
    // if (number == 0) {
    //   return number
    // } else {
    //   setNumber(number - 1);
    // }
    if (number > 0) {
      setNumber(number - 1);
    }
  }

  return (
    <>
      <h1>Number : {number}</h1>
      {/* <h1>Angka : {angka}</h1> */}
      <button onClick={() => Add()}>Add</button>
      <button onClick={Less}>Less</button>
    </>
  );
}

export default State;
