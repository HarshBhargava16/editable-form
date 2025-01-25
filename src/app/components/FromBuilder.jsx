'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addField} from '../store/FormSlice'
const FromBuilder = () => {

  const dispatch = useDispatch();

  const [newField, setNewField] = useState({
    label: "",
    type: "text",
    value: "",
  });

  const AddField = () =>
    {
      dispatch(addField(newField));
      setNewField({
        label: "",
        type: "text",
        value: "",
      });
    }

  return (
    <div className="p-4 rounded-lg  border bg-white">
      <h2 className="text-xl text-center font-bold mb-4 ">Edit Mode</h2>
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
        onClick={AddField}
        className="bg-blue-600 border rounded text-white px-2 py-1 hover:bg-blue-700"
      >
        Add Filed
      </button>
    </div>
  );
}

export default FromBuilder
