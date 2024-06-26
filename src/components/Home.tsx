import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { coins, currency, setCurrency } = useContext(CoinContext);

  const slicedData = coins.slice(0, 10);
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
        <input
          type="text"
          placeholder="Search for coins"
          className="w-full px-4 py-2 rounded-lg border-none bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        />
        <button className="absolute right-0 top-0 h-full px-4 bg-indigo-500/50 rounded-r-lg text-white">
          Search
        </button>
      </div>

      {/* <div className="max-w-[800px] w-full mx-auto rounded-md my-5 bg-indigo-600/50 p-5">
        <div className="flex justify-between">
          <p className="w-8 text-center">#</p>
          <p className="flex-1 text-center">Coins</p>
          <p className="flex-1 text-center">Price</p>
          <p className="flex-1 text-center">24H change</p>
          <p className="flex-1 text-center">Market Cap</p>
        </div>
        <div className="flex flex-col text-center ">
          {slicedData.map((coin, index) => (
            <div key={coin.id} className="flex justify-between w-full my-2">
              <p className="w-8 text-center">{index + 1}</p>
              <div className="flex-1 flex items-center">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-8 h-8 mr-2"
                />
                <p>{coin.name}</p>
              </div>
              <p className="flex-1 text-center flex gap-x-2">
                {currency.symbol}
                {coin.current_price}
              </p>
              <p className="flex-1 text-center">{coin.high_24h}</p>
              <p className="flex-1 text-center">
                {currency.symbol}
                {coin.market_cap}
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* use table instead for above */}
      <div className="max-w-[800px] w-full mx-auto rounded-md my-5 bg-indigo-600/50 p-5">
        <table className="w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Coins</th>
              <th>Price</th>
              <th>24H change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {slicedData.map((coin, index) => (
            
            <tr key={coin.id}>
                <td>{index + 1}</td>
                <Link to={`/coin/${coin.id}`}>
                <td className="flex items-center ml-5">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-8 h-8 mr-2"
                  />
                  {coin.name}
                </td></Link>
                <td>
                  {currency.symbol}
                  {coin.current_price}
                </td>
                <td>{coin.high_24h}</td>
                <td>
                  {currency.symbol}
                  {coin.market_cap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Home;
