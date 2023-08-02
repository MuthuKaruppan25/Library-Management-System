import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./dropdown";
import "./adminlogin.css";
import axios from "axios";
import { Axios } from "axios";
const Addbook = () => {
  const [drop, setdrop] = useState("");
  const [name, setname] = useState("");
  const [aname, setaname] = useState("");
  const [num, setnum] = useState("");
  const [price, setprice] = useState("");
  const [quan, setquan] = useState("");
  const [formerrors, setformerrors] = useState({});
  const options = [
    { label: "Programming", value: "Programming" },

    { label: "Communication", value: "Communication" },

    { label: "Electronics", value: "Electronics" },
  ];
  const [value, setValue] = React.useState("Programming");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    setformerrors(validate(name, aname, value, num, price));
    Adduser(name, aname, value, num, price, quan);
  };
  const errors = {};
  const validate = (name, aname, value, num, price) => {
    if (!name) {
      errors.name = "Book Name is required";
    }
    if (!aname) {
      errors.aname = "Author Name is required";
    }
    if (!value) {
      errors.value = "Category is required";
    }
    if (!num) {
      errors.num = "ISBN Number is required";
    }

    if (!price) {
      errors.price = "Price is required";
    }
    if (!quan) {
      errors.quan = "Quantity is required";
    }
    return errors;
  };
  const Adduser = (name, aname, value, num, price, quan) => {
    try {
      axios
        .post("http://localhost:8000/addbook", {
          name,
          aname,
          value,
          num,
          price,
          quan,
        })
        .then((res) => {
          if (res.data == "exist") {
          } else if (res.data == "notexist") {
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {}
  };
  return (
    <div>
      <div class="center">
        <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
          Add Book
        </h1>

        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="email"
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            placeholder="Book Name"
          />
        </div>
        <p>{formerrors.name}</p>
        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="password"
            onChange={(e) => {
              setaname(e.target.value);
            }}
            type="text"
            placeholder="Author Name"
          />
        </div>
        <p>{formerrors.aname}</p>
        <Dropdown
          label="Category"
          options={options}
          value={value}
          onChange={handleChange}
        />
        <p>{formerrors.value}</p>

        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="password"
            onChange={(e) => {
              setnum(e.target.value);
            }}
            type="text"
            placeholder="ISBN Number"
          />
        </div>
        <p>{formerrors.num}</p>
        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="password"
            onChange={(e) => {
              setprice(e.target.value);
            }}
            type="text"
            placeholder="Price"
          />
        </div>
        <p>{formerrors.price}</p>
        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="password"
            onChange={(e) => {
              setquan(e.target.value);
            }}
            type="text"
            placeholder="Quantity"
          />
        </div>
        <p>{formerrors.quan}</p>

        <input
          type="submit"
          value="Add Book"
          onClick={handleSubmit}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        />
      </div>
    </div>
  );
};
export default Addbook;
