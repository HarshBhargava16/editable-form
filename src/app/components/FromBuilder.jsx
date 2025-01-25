"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addField } from "../store/FormSlice";

const FormBuilder = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.form.fields);

  const [newField, setNewField] = useState({
    label: "",
    type: "text",
  });

  const addNewField = () => {
    if (!newField.label.trim()) {
      alert("Label is required!");
      return;
    }

    const isDuplicate = fields.some((field) => field.label === newField.label);
    if (isDuplicate) {
      alert("Field label must be unique!");
      return;
    }

    dispatch(addField(newField));

    setNewField({
      label: "",
      type: "text",
    });
  };

  return (
    <div className="p-4 rounded-lg border bg-white">
      <h2 className="text-xl text-center font-bold mb-4">Edit Mode</h2>
      <input
        type="text"
        placeholder="Enter Label Field"
        value={newField.label}
        onChange={(e) => setNewField({ ...newField, label: e.target.value })}
        className="border rounded px-2 py-1 mb-2 w-full"
      />
      <select
        value={newField.type}
        className="border rounded px-2 py-2 mb-2 w-full min-h-[40px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setNewField({ ...newField, type: e.target.value })}
      >
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="email">Email</option>
      </select>

      <button
        onClick={addNewField}
        className="bg-blue-600 border rounded text-white px-2 py-1 hover:bg-blue-700"
      >
        Add Field
      </button>
    </div>
  );
};

export default FormBuilder;
