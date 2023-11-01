import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function FarmerSearch({ onSearch }: Props) {
  const [value, setValue] = useState("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(value);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          className="search_text"
          placeholder="Search for farmers..."
          value={value}
          onChange={handleChange}
        />
        <div className="search_submit">
          <button className="button" type="submit">
            {" "}
            Search Farmer
          </button>
        </div>
      </form>
    </>
  );
} 
