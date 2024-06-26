import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

const Navbar = () => {
  const { currency, setCurrency } = useContext(CoinContext);

  const handleCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency({
      name: e.target.value,
      symbol:
        e.target.value === "usd" ? "$" : e.target.value === "euro" ? "€" : "₨",
    });
  };
  return (
    <div className="text-white p-4 h-[100px] border-b-2 border-white/30">
      <div className="xl:container mx-auto flex items-center justify-between h-full">
        <div>
          <img src="/image.png" className="object-cover " alt="" />
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="flex">
          <select
            name="currency"
            onChange={handleCurrency}
            value={currency.name}
            className="text-black md:p-2 p-1 bg-white focus:outline-none rounded-none"
          >
            <option value="usd">USD</option>
            <option value="euro">EURO</option>
            <option value="pkr">PKR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
