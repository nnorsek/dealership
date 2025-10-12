import React, { useState, useRef, useEffect } from "react";
import "./DropDownSearchBarStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const DropDown = ({ buttonText, items }) => {
  console.log("Items", items);
  console.log("Button Text", buttonText);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedOption(item.value);
    setIsOpen(!isOpen);
  };

  const toggleDropDown = () => setIsOpen(!isOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  console.log("Toggle Drop Down", isOpen);
  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropDown}>
        {selectedOption || buttonText}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {(items || []).map((item) => (
            <li
              className="dropdown-item"
              key={item.id}
              onClick={() => handleItemClick(item)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
      {!isOpen ? (
        <FontAwesomeIcon icon={faAngleDown} onClick={toggleDropDown} />
      ) : (
        <FontAwesomeIcon icon={faAngleUp} onClick={toggleDropDown} />
      )}
    </div>
  );
};

export default DropDown;
