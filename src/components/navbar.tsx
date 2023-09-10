import {
  MdHomeFilled,
  MdOutlineFolderOpen,
  MdPeople,
  MdStarBorder,
} from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 right-0 left-0 bg-sky-100">
      <ul className="grid grid-rows-1 grid-cols-4 py-3 items-center list-none justify-between text-xs font-bold">
        <li className="flex flex-col gap-2 items-center cursor-pointer">
          <div>
            <MdHomeFilled className="w-5 h-5" />
          </div>
          <div>Início</div>
        </li>
        <li className="flex flex-col gap-2 items-center cursor-pointer">
          <div>
            <MdStarBorder className="w-5 h-5" />
          </div>
          <div>Com estrela</div>
        </li>
        <li className="flex flex-col gap-2 items-center cursor-pointer">
          <div>
            <MdPeople className="w-5 h-5" />
          </div>
          <div>Compartilhado</div>
        </li>
        <li className="flex flex-col gap-2 items-center cursor-pointer">
          <div>
            <MdOutlineFolderOpen className="w-5 h-5" />
          </div>
          <div>Arquivos</div>
        </li>
      </ul>
    </nav>
  );
}
