import React from 'react';

export const SearchInput = () => {
  return (
    <form className="flex lg:max-w-xl w-full h-10 items-center border border-neutral-300 bg-transparent p-0 rounded-full">
      <input
        className="grow px-4 py-2 rounded-full bg-transparent text-sm font-medium placeholder-neutral-600"
        type="text"
        name="search"
        placeholder="¿Qué necesitas?"
        autoComplete="off"
        defaultValue={''}
      />
      <button
        className="h-full px-6 rounded-full bg-stone hover:bg-slate text-neutral-50 text-lg font-semibold"
        type="button"
      >
        Buscar
      </button>
    </form>
  );
};
