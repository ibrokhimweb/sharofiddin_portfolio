// Icons
import { BiSun } from "react-icons/bi";
import { IoMoonOutline } from "react-icons/io5";

export const ModeToggle = ({ mode }) => {
  const [isDark, setIsDark] = mode;

  return (
    <div className="">
      <button
        onClick={() =>
          setIsDark((prev) => {
            if (prev) {
              localStorage.setItem("mode", "light");

              return false;
            }

            localStorage.setItem("mode", "dark");

            return true;
          })
        }
        className="p-4 border rounded-2xl box-content bg-white/15 cursor-pointer hover:bg-white/30 duration-300"
      >
        {isDark ? <BiSun /> : <IoMoonOutline />}
      </button>
    </div>
  );
};
