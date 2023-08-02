import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import the default CSS
import "rsuite/dist/rsuite.min.css";
const Issuebook = () => {
  const navigate = useNavigate();

  const [regno, setregno] = useState("");
  const [bname, setbname] = useState("");
  const [product, setproduct] = useState([]);
  const [book, setbook] = useState([]);
  const [found, notfound] = useState("");

  const [formerrors, setformerrors] = useState({});

  useEffect(() => {
    const fetchData = async (regno) => {
      const response = await axios.post("http://localhost:8000/issuebook/", {
        regno,
      });
      console.log(response.data.name);
      if (response.data == "Not Found") {
        setproduct("Not Found");
      } else {
        setproduct(response.data);
      }
    };
    if (regno) {
      fetchData(regno);
    }
  }, [regno]);
  useEffect(() => {
    const fetchData1 = async (bname) => {
      const response = await axios.post("http://localhost:8000/getbook/", {
        bname,
      });
      console.log(response.data);
      if (response.data == "Not Found") {
        setbook("Not Found");
      } else {
        setbook(response.data);
      }
    };
    if (bname) {
      fetchData1(bname);
    }
  }, [bname]);
  const handlesubmit = async (regno, bname) => {
    await axios.post("http://localhost:8000/issue/", { regno, bname });
  };

  return (
    <div>
      <div className="center">
        <h1 style={{ fontSize: "30px" }}>Issue Book</h1>

        <div class="txt_field">
          <input
            name="username"
            onChange={(e) => {
              setregno(e.target.value);
            }}
            type="text"
            placeholder="Regno"
          />
        </div>
        {product.map((item, index) => {
          return (
            <p
              style={{
                marginLeft: "10px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </p>
          );
        })}
        <div class="txt_field" style={{ "margin-top": 20 }}>
          <input
            name="email"
            onChange={(e) => {
              setbname(e.target.value);
            }}
            type="text"
            placeholder="Book Name"
          />
        </div>
        {book.map((item, index) => {
          return (
            <div>
              <p
                style={{
                  marginLeft: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Book Name: {item.bookname}
              </p>
              <p
                style={{
                  marginLeft: "10px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Author: {item.authorname}
              </p>
            </div>
          );
        })}

        <input
          type="submit"
          onClick={() => handlesubmit(regno, bname)}
          value="Register"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        />
      </div>
    </div>
  );
};
export default Issuebook;
