"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditTheme from "./EditTheme";

const FormPreview = () => {
  const fields = useSelector((state) => state.form.fields);
  const theme = useSelector((state) => state.form.theme);
  const [isEditingTheme, setIsEditingTheme] = useState(false);

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, label) => {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [label]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [label]: value.trim() === "" ? "This field is required" : null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    fields.forEach((field) => {
      if (!formData[field.label] || formData[field.label].trim() === "") {
        newErrors[field.label] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Please fill all required fields before submitting.");
      return;
    }

    alert("Form Submitted Successfully");
    console.log("Form Data:", formData);
  };

  return (
    <div className="p-4 rounded-lg border">
      <h2 className="text-lg text-center font-bold mb-4">Preview Form</h2>
      <hr />
      <button
        onClick={() => setIsEditingTheme(true)}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit Theme
      </button>
      {isEditingTheme && (
        <EditTheme closeEditor={() => setIsEditingTheme(false)} />
      )}
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded-lg border"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        {fields && fields.length > 0 ? (
          <>
            {fields.map((field, id) => (
              <div key={id} className="mb-4">
                <label
                  style={{
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSize,
                  }}
                >
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  className="border rounded px-2 py-1 w-full"
                  type={field.type}
                  value={formData[field.label] || ""}
                  onChange={(e) => handleChange(e, field.label)}
                />
                {errors[field.label] && (
                  <p className="text-red-500 text-sm">{errors[field.label]}</p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </>
        ) : (
          <p className="text-gray-500">No fields to preview.</p>
        )}
      </form>
    </div>
  );
};

export default FormPreview;
