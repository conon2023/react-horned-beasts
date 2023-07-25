import React from "react";
import { Form } from "react-bootstrap";

const FilterDropdown = ({ selectedHornCount, onHornCountChange }) => {
  const handleSelectChange = (event) => {
    const selectedCount = event.target.value;
    onHornCountChange(selectedCount);
  };

  return (
    <Form.Group controlId="filterDropdown">
      <Form.Label>Filter by Horn Count</Form.Label>
      <Form.Control
        as="select"
        value={selectedHornCount}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        <option value="1">1 horn</option>
        <option value="2">2 horns</option>
        <option value="3">3 horns</option>
        <option value="100">100 horns</option>

      </Form.Control>
    </Form.Group>
  );
};

export default FilterDropdown;
