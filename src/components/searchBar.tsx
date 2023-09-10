import Image from "next/image";

export default function SearchBar() {
  return (
    <section className="m-4">
      <div className="flex flex-row items-center rounded-full bg-sky-100 px-4 py-2 gap-2">
        <div>
          <Image
            src="/img/hamburger.svg"
            alt="Hamburger menu icon"
            width={24}
            height={24}
          />
        </div>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar no Drive"
            className="bg-transparent outline-none placeholder-slate-500"
          />
        </div>
        <div className="ml-auto">
          <div className="w-6 h-6 rounded-full bg-sky-400"></div>
        </div>
      </div>
    </section>
  );
}
