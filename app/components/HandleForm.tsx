"use client";
import React, { SyntheticEvent } from "react";
import { useState } from "react";

type Props = {};

interface Iitems {
  id_: number;
  label: string;
  value: string[];
  [key: string]: string[] | string | number;
}

const HandleForm = (props: Props) => {
  const items: Iitems[] = [
    {
      id_: 1,
      label: "Makanan",
      value: [],
    },
    {
      id_: 2,
      label: "Minuman",
      value: [],
    },
    {
      id_: 3,
      label: "Cemilan",
      value: [],
    },
    {
      id_: 4,
      label: "Manisan",
      value: [],
    },
  ];

  const [data, setData] = useState<Iitems[]>(items);
  const [input, setInput] = useState<string>("");
  const [changeOption, setChangeOption] = useState<number>(1);

  const length_items = Object.keys(items).length;

  const handleAdd = (e: SyntheticEvent) => {
    e.preventDefault();
    if (input === "") {
      alert("input tidak boleh kosong");
      return;
    }

    setData((prev) => {
      const newData = prev.map((item) => {
        if (item.id_ === changeOption) {
          return { ...item, value: [...item.value, input] };
        }
        return item;
      });
      return newData;
    });
    setInput("");
  };
  console.log(data);

  const handleDelete = (
    index_value: number,
    id_items: number,
    value: string
  ) => {
    console.log(index_value);

    const newData = data.map((item) => {
      if (item.id_ === id_items) {
        const i_of = item.value.indexOf(value);
        item.value.splice(i_of, 1);
      }
      return item;
    });
    setData(newData);
  };
  return (
    <div className={`grid grid-cols-2`}>
      <form className="my-2" onSubmit={handleAdd}>
        <div className="flex gap-3 justify-center items-center">
          <select
            id="category"
            onChange={(e) => setChangeOption(Number(e.target.value))}
          >
            {data &&
              data.map((it) => {
                return (
                  <option key={it.id_} value={it.id_}>
                    {it.label}
                  </option>
                );
              })}
          </select>
          <input
            type="text"
            className="px-2 py-2 border outline-none rounded-xl"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button
            type="submit"
            className="border py-2 px-5 rounded-md bg-purple-500 text-white"
          >
            add
          </button>
        </div>
      </form>

      <div className={`grid grid-cols-${length_items} mt-2`}>
        {data &&
          data.map((item) => (
            <div key={item.id_}>
              <h1>{item.label}</h1>
              <ol className="flex flex-col">
                {item.value &&
                  item.value.map((v, index) => (
                    <li key={index}>
                      <div className="flex justify-between w-1/2">
                        <p>{v}</p>
                        <button
                          onClick={() => handleDelete(index, item.id_, v)}
                        >
                          x
                        </button>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HandleForm;
