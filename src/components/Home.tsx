import { useState } from "react";
import DataTable from "./DataTable";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(search);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex flex-col py-24 gap-5 justify-between items-center">
      <h1 className="md:text-5xl lg:text-7xl text-3xl leading-snug font-bold text-white text-center"> 
        Largest <br /> Crypto Marketplace
      </h1>

      <p className="text-center max-w-sm">
        Welcome to the world's largest cryptocurrency marketplace. Sign up to
        explore more about cryptos.
      </p>
      <div className="relative md:w-1/3">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            value={search}
            type="text"
            placeholder="Search for coins"
            className="w-full px-4 py-2 rounded-lg border-none bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 bg-indigo-500/50 rounded-r-lg text-white"
          >
            Search
          </button>
        </form>
      </div>

      <DataTable />
    </div>
  );
};

export default Home;
