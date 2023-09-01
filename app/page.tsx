import Form from "@/app/components/Form";
import React from "react";
import HandleForm from "./components/HandleForm";

export type IdataForm = {
  name: string;
  email: string;
};

const dataForm: IdataForm[] = [
  {
    name: "I Dewa Gd Raka Murdiarta",
    email: "dewaumurdiarta@gmail.com",
  },
];
const Home = () => {
  console.log(dataForm);
  return (
    <div className="">
      {/* <Form data={dataForm} /> */}
      <HandleForm />
    </div>
  );
};

export default Home;
