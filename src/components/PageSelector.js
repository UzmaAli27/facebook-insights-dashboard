import { useState } from "react";

const PageSelector = ({ pages, onSelect }) => {
  const [selectedPage, setSelectedPage] = useState("");

  const handleSubmit = () => {
    const page = pages.find((p) => p.id === selectedPage);
    onSelect(page);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <select
        className="p-2 border rounded w-64"
        onChange={(e) => setSelectedPage(e.target.value)}
      >
        <option value="">Select a Page</option>
        {pages.map((page) => (
          <option key={page.id} value={page.id}>
            {page.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit
      </button>
    </div>
  );
};

export default PageSelector;