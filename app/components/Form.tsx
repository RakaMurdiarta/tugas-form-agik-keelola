"use client";
import React, { SyntheticEvent } from "react";
import { IdataForm } from "@/app/page";
import { useState } from "react";

type Props = {
  data: IdataForm[];
};

interface Iinput {
  volvo: string[];
  saab: string[];
  [key: string]: string[];
}

const Form = ({ data }: Props) => {
  const [input, setInput] = useState<Iinput>({
    saab: [],
    volvo: [],
  });

  const [changeOption, setChangeOption] = useState<string>("volvo");
  const [inputChange, setInputChange] = useState<string>("");

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputChange === "") {
      alert("input tidak boleh kosong");
      return;
    }
    setInput((prev) => {
      return {
        ...prev,
        [changeOption]: [...prev[changeOption], inputChange],
      };
    });

    setInputChange("");
  };

  console.log(input);
  return (
    <div className="grid grid-cols-2">
      <form className="my-2" onSubmit={onSubmit}>
        <div className="flex gap-3 justify-center items-center">
          <select
            id="category"
            onChange={(e) => setChangeOption(e.target.value)}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </select>
          <input
            type="text"
            className="px-2 py-2 border outline-none rounded-xl"
            onChange={(e) => {
              setInputChange(e.target.value);
            }}
            value={inputChange}
          />
          <button
            type="submit"
            className="border py-2 px-5 rounded-md bg-purple-500 text-white"
          >
            add
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 mt-2">
        <div className="flex flex-col">
          <h1>Volvo</h1>
          <ol>
            {input &&
              input.volvo.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ol>
        </div>
        <div className="flex flex-col">
          <h1>Saab</h1>
          <ol>
            {input &&
              input.saab.map((item, index) => {
                return <ol key={index}>{item}</ol>;
              })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Form;
