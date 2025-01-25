import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../store/FormSlice";

const EditTheme = ({ closeEditor }) => {
  const theme = useSelector((state) => state.form.theme);
  const dispatch = useDispatch();

  const updateThemeSetting = (key, value) => {
    dispatch(updateTheme({ [key]: value })); // Ensure the payload is an object
  };

  return (
    <div className="p-4 rounded-lg shadow-lg border bg-white">
      <h2 className="text-xl font-bold mb-4">Theme Customization</h2>
      <div className="mb-4">
        <label>Color</label>
        <input
          type="color"
          value={theme.color || "#000000"}
          onChange={(e) => updateThemeSetting("color", e.target.value)}
          className="ml-2"
        />
      </div>
      <div className="mb-4">
        <label>Background Color</label>
        <input
          type="color"
          value={theme.backgroundColor || "#ffffff"}
          onChange={(e) =>
            updateThemeSetting("backgroundColor", e.target.value)
          }
          className="ml-2"
        />
      </div>
      <div className="mb-4">
        <label>Font Size</label>
        <input
          type="number"
          value={parseInt(theme.fontSize)||16}
          onChange={(e) =>
            updateThemeSetting("fontSize", e.target.value + "px")
          }
          className="ml-2 border px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label>Font Family</label>
        <input
          type="text"
          value={theme.fontFamily}
          onChange={(e) => updateThemeSetting("fontFamily", e.target.value)}
          className="ml-2 border px-2 py-1"
        />
      </div>
      <button
        onClick={closeEditor}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Close
      </button>
    </div>
  );
};

export default EditTheme;
