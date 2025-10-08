import React from "react";
import "./componentStyles/SelectSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const SelectSearch = () => {
  return (
    <div className="selectSearch-container">
      <form className="form-container">
        <select className="filter1">
          <option>Used Cars</option>
        </select>
        <FontAwesomeIcon icon={faAngleDown} />
        <hr />
        <select className="filter2">
          <option>Any Makes</option>
        </select>
        <FontAwesomeIcon icon={faAngleDown} />
        <hr />
        <select className="filter3">
          <option>Any Models </option>
        </select>
        <FontAwesomeIcon icon={faAngleDown} />
        <hr />
        <select className="filter4">
          <option>All Prices</option>
        </select>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SelectSearch;
