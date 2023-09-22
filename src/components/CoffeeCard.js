import Image from "next/image";

function CoffeeCard({ coffee }) {
  return (
    <div className="p-4 h-5/6 bg-white shadow-lg rounded-lg">
      <div className="w-64 h-64 relative">
        <Image
          src={coffee.image}
          alt={coffee.title}
          fill
          sizes="100%"
          priority
          className="object-cover rounded"
        />
      </div>
      <div>
        <h2 className="text-gray-700  text-2xl font-bold mb-2">
          {coffee.title}
        </h2>
        <p className="text-gray-700 mb-4">{coffee.description}</p>
        <ul className="list-disc list-inside">
          {coffee.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoffeeCard;
