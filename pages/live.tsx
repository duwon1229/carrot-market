import type { NextPage } from "next";

const Live: NextPage = () => {
  return (
    <div className="py-10 divide-y-2 space-y-4">
      {[...Array(7)].map((_, i: number) => (
        <div className="pt-4 px-4" key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className="text-gray-700 text-lg mt-2">Let`s try potatos</h3>
        </div>
      ))}
      <button className="fixed hover:bg-orange-500 cursor-pointer bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-4 border-transparent text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Live;