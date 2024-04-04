const Header = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between text-[16px]">
        <div className="title ml-20 text-[20px] mt-5 text-black cursor-pointer">
          <h1>
            <span className="font-extrabold text-[30px] ">HD Book </span>
            Store
          </h1>
        </div>
        <div className="items-center mr-15 mt-5">
          <ul className="flex items-center gap-10 text-white">
            <li className="hover:text-[17px] hover:border-b-2">
              <a>Explorer</a>
            </li>
            <li className="hover:text-[17px] hover:border-b-2">
              <a>Shop</a>
            </li>
            <li className="hover:text-[17px] hover:border-b-2">
              <a>Blog</a>
            </li>
            <li>
              <button className="bg-neutral-950 text-white px-8 py-3 rounded-[20px] hover:bg-slate-600">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="search flex-col items-center mt-[200px]">
        <h1 className="uppercase font-extrabold text-[30px]">
          Discover Your Favorite Book.
        </h1>
        <h3 className="font-semibold text-[25px]">
          Find your favorite book and read it free.
        </h3>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Which book are you looking for?"
            className="w-[500px] p-4 outline-none text-black rounded-xl focus:border-b-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
