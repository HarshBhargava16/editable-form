"use client";
import React from "react";
import FormBuilder from "./components/FromBuilder";
import FormPreview from "./components/FormPreview";
import store from "../app/store/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen p-5 bg-gray-200">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-8">
          Application Form
        </h1>

        <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
            <FormBuilder />
          </div>

          <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg">
            <FormPreview />
          </div>
        </section>
      </div>
    </Provider>
  );
};

export default Home;
