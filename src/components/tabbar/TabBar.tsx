'use client';

import { useState } from 'react';

import { setCookie } from 'cookies-next';

export const TabBar = ({
  currentTab = 1,
  options = [1, 2, 3, 4, 5],
}: {
  currentTab?: number;
  options?: number[];
}) => {
  const [selected, setSelected] = useState(currentTab);

  return (
    <div
      className={`grid w-full grid-cols-5 space-x-4 rounded-xl bg-gray-200 p-2 gap-10`}
    >
      {options.map(num => (
        <div key={num}>
          <input
            type="radio"
            onChange={() => {}}
            id={`${num}`}
            checked={selected === num}
            className="peer hidden"
          />
          <label
            className={`block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white`}
            onClick={() => {
              setSelected(num);
              setCookie('tab', num.toString());
            }}
          >
            {num}
          </label>
        </div>
      ))}
    </div>
  );
};
