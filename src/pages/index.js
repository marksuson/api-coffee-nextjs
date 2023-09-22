import { useEffect, useState } from "react";
import CoffeeMenu from "../components/CoffeeMenu";

export async function getServerSideProps() {
  const resp = await fetch("https://api.sampleapis.com/coffee/hot");
  const json = await resp.json();

  return {
    props: {
      coffees: json,
    },
  };
}

export default function App({ coffees }) {
  return <CoffeeMenu coffees={coffees} />;
}
