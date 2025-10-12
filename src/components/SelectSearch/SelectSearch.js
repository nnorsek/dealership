import React, { use, useState } from "react";
import "./SelectSearchStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faChevronDown,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import DropDown from "../DropDownSearchBar/DropDownSearchBar";

// TODO -> Change to custom select components using framer for animation on arrows.

const SelectSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    condition: "",
    price: "",
  });
  // TODO -> Pull from DB using API HTTP GET
  const modelItems = [
    { id: 1, value: "Any Make" },
    { id: 2, value: "Audi" },
    { id: 3, value: "Bmw" },
    { id: 4, value: "Ram" },
    { id: 5, value: "Honda" },
    { id: 6, value: "Suburu" },
    { id: 7, value: "Jeep" },
    { id: 8, value: "Ford" },
    { id: 9, value: "Lexus" },
    { id: 10, value: "Dodge" },
  ];

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log("name: ", name, "value: ", value);
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting Filters: ${JSON.stringify(filters)}`);

    //Submit Search Logic Here
  };

  return (
    <div className="selectSearch-container">
      <div className="form-container">
        <DropDown items={modelItems} buttonText={"Any Condition"} />

        <hr />
        <DropDown items={modelItems} buttonText={"Any Model"} />
        <hr />
        <DropDown items={modelItems} buttonText={"Any Make"} />
        <hr />
        <div className="price-button">
          <DropDown items={modelItems} buttonText={"Any Price"} />
        </div>
        <div className="submit-button">
          <button
            type="submit"
            className="fa-layers fa-fw fa-3x"
            style={{
              border: "none",
              background: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faCircle} className="circle-icon" />
            <FontAwesomeIcon
              icon={faSearch}
              color="white"
              style={{ pointerEvents: "none", fontSize: "medium" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectSearch;
