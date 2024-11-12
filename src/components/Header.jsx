import { useContext, useState } from "react";
import { MovieContext, ThemeContext } from "../context/MyContext";
import CardModal from "./CardModal";

export default function Header() {
  const [IsCardModal, setIsCardModal] = useState(false);
  const { state, dispatch } = useContext(MovieContext);
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header>
      {IsCardModal && (
        <CardModal
          cardMovie={state.cardMovie}
          dispatch={dispatch}
          onClose={() => {
            setIsCardModal(false);
          }}
        />
      )}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <h1 className="text-3xl font-extrabold tracking-wide flex items-center space-x-2">
            {/* Film Strip Icon with Gradient Border */}
            <span className="w-7 h-7 rounded border-4 border-gradient-to-br from-yellow-400 to-orange-500 p-1 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-gray-900 rounded flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-300 rounded-full m-0.5"></div>
                <div className="w-1 h-1 bg-gray-300 rounded-full m-0.5"></div>
              </div>
            </span>

            {/* "CineFlex" Text with Gradient Gold */}
            <span className="text-3xl font-display font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              CineFlex
            </span>
          </h1>
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src="./assets/ring.svg" width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setIsDark((isDark) => !isDark)}
            >
              <img
                src={
                  isDark ? "./assets/icons/sun.svg" : "./assets/icons/moon.svg"
                }
                width="24"
                height="24"
                alt=""
              />
            </button>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => {
                setIsCardModal(true);
              }}
            >
              <img
                src="./assets/shopping-cart.svg"
                width="24"
                height="24"
                alt=""
              />
              <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                {state.cardMovie.length}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
