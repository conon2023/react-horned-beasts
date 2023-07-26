import React from "react";

const FilterDropdown = ({ handleSelectChange }) => {
  

  return (
    <form>
      <label>Filter by Horn Count</label>
      <select

        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        <option value="1">1 horn</option>
        <option value="2">2 horns</option>
        <option value="3">3 horns</option>
        <option value="100">100 horns</option>

      </select>
    </form>
  );
};

export default FilterDropdown;
