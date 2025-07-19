const GameContainer = () => {
  return (
    <div className="bg-black h-svh">
      <div className="flex flex-col py-5">
        <h1 className="font-bold text-5xl mb-5 text-white">
          GOTTA Catch 'Em All
        </h1>
        <p className="text-2xl font-medium text-white">Number of Moves: </p>
      </div>
      <div className="">
        <div className="flex gap-5 justify-center shrink-0">
          <div className="grid grid-cols-4 gap-5 shrink-0 bg-zinc-950 shadow-lg mt-10 shadow-gray-500 p-10">
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50   transform hover:scale-90  rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90  rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90   rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90   rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50   transform hover:scale-90  rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90   rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50   transform hover:scale-90  rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90   rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50   transform hover:scale-90  rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90   rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50   transform hover:scale-90  rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90   rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90   rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50  transform hover:scale-90  rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50 w-full bg-gray-500/50 transform hover:scale-90 rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="p-5 shadow-lg shadow-green-500/50  bg-gray-500/50   transform hover:scale-90 w-24 rounded-md cursor-pointer shrink-0 ">
              <span className="text-green-500">?</span>
            </div>
            <div className="content">
                <div className="front">HELLO</div>
                <div className="back">WORLD</div>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <button className="text-white px-7 text-base py-3 shadow-2xl cursor-pointer shadow-white bg-gray-500/50 rounded-md">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
