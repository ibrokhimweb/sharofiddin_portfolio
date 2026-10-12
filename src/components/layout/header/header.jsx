import { HiTranslate } from "react-icons/hi";
import { RiMenu4Line } from "react-icons/ri";
import { ModeToggle } from "../../others";

export const Header = (props) => {
  const { mode } = props;
  const [isDark] = mode;

  return (
    <div
      className={`w-full h-18 sticky top-0  ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="w-full h-full container mx-auto">
        <div
          className={`w-full h-full flex justify-between items-center px-12 font-bold text-2xl`}
        >
          {/* Logo componentga olib chiqing */}
          <h1>Header</h1>

          <div className="flex items-center justify-between w-1/2 max-xl:hidden">
            {/* w-4/6 */}
            <div className="font-medium">
              <ul className="flex items-center justify-between gap-10">
                <li className="hover:underline">
                  <a href="#about">About</a>
                </li>
                <li className="hover:underline">
                  <a href="#projects ">Projects</a>
                </li>
                <li className="hover:underline">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="">
                <HiTranslate className="p-4 border rounded-2xl box-content bg-white/15" />
              </div>
              <ModeToggle mode={mode} />
            </div>
          </div>
          <div className="flex items-center gap-4 xl:hidden">
            <ModeToggle mode={mode} />
            <RiMenu4Line className="p-4 border rounded-2xl box-content bg-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
};
