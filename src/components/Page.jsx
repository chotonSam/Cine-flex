import { useContext } from "react";
import { ThemeContext } from "../context/MyContext";
import CineLIst from "./cine/CineLIst";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Page() {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${isDark ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <CineLIst />
        </div>
      </main>
      <Footer />
    </div>
  );
}
