import React, { use, useState } from "react";
import "./componentStyles/SelectSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faChevronDown,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// TODO -> Change to custom select components using framer for animation on arrows.

const SelectSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    condition: "",
    price: "",
  });

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
      <form className="form-container" onSubmit={handleSubmit}>
        <select
          name="condition"
          value={filters.condition}
          onChange={handleChange}
        >
          <option value="used-cars">Used Cars</option>
          <option value="new-cars">New Cars</option>
        </select>
        <FontAwesomeIcon icon={faAngleDown} />
        <hr />
        <select name="make" value={filters.make} onChange={handleChange}>
          <option value="any-make">Any Makes</option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="ram">Ram</option>
          <option value="honda">Honda</option>
          <option value="suburu">Suburu</option>
          <option value="nissan">Nissan</option>
          <option value="jeep">Jeep</option>
          <option value="ford">Ford</option>
          <option value="lexus">Lexus</option>
        </select>
        <FontAwesomeIcon icon={faAngleDown} />
        <hr />
        <select name="model" value={filters.model} onChange={handleChange}>
          <option value="any-model">Any Model</option>
          <option value="suv">SUV</option>
          <option value="pickup_truck">Pickup Truck</option>
          <option value="coupe">Coupe</option>
          <option value="sedan">Sedan</option>
          <option value="hyrid">Hybrid</option>
          <option value="hatchbacks">Hatchbacks</option>
          <option value="minivan_and_vans">Minivans And Vans</option>
        </select>
        <FontAwesomeIcon icon={faChevronDown} />
        <hr />
        <select name="price" value={filters.price} onChange={handleChange}>
          <option value="any-price">All Prices</option>
          <option value="under_10">Under $10,000</option>
          <option value="10-20">$10,000-$20,000</option>
          <option value="20-30">$20,000-$30,000</option>
          <option value="40-50">$40,000-$50,000</option>
          <option value="50-75">$50,000-$75,000</option>
          <option value="75-100">$75,000-$100,000</option>
          <option value="over_100">Over $100,000</option>
        </select>

        <FontAwesomeIcon
          icon={faChevronDown}
          className="fontawesome-icon-price"
        />
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
      </form>
    </div>
  );
};

export default SelectSearch;
