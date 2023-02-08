// import Book logo
import { GiWhiteBook } from "react-icons/gi";

// import components
import Fontselect from "./fontSelect";
import ThemeMode from "./themeSelect";

export default function nav() {
  return (
    <nav className="flex items-center justify-between">
      <GiWhiteBook size={50} />

      <div className="flex gap-6 items-center">
      <Fontselect />
      <ThemeMode />
      </div>
    </nav>
  );
}
