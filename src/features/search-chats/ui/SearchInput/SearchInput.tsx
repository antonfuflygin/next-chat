import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className="flex justify-center px-3">
      <div className="flex h-8 w-full items-center rounded-lg border border-slate-300 px-2">
        <Image src="search.svg" height={16} width={15} alt="search" />
        <input className="ml-2 min-w-0 flex-1 border-0 outline-none" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default SearchInput;
