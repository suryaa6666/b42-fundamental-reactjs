import React from "react";
import Hutang from "./components/list";

//Import Components

function Props() {
  return (
    // Code Inside div
    // passing data
    <>
    <Hutang name="Sholeh" hutang={"4000000"} barang="triplek" bunga="2x ISA" />
    <Hutang name="Bambang" hutang={1000} barang="gorengan" bunga={"0%"}/>
    </>
  );
}

export default Props;
