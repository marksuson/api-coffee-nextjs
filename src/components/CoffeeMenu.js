import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

function CoffeeMenu({ coffees }) {
  const [selectedCoffee, setSelectedCoffee] = useState(coffees[0]);

  return (
    <div className="flex">
      <ul className="w-1/3">
        {coffees.map((coffee, index) => (
          <li
            className="cursor-pointer text-aliceblue text-xl mb-2"
            key={index}
            onClick={() => setSelectedCoffee(coffee)}
          >
            {coffee.title}
          </li>
        ))}
      </ul>

      <div className="w-2/3">
        {selectedCoffee && <CoffeeCard coffee={selectedCoffee} />}
      </div>
    </div>
  );
}

export default CoffeeMenu;
