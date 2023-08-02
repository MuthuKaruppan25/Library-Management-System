import axios from "axios";
import { useState, useEffect } from "react";
import NavScrollExample from "./Navbar";
import { useNavigate } from "react-router-dom";
const Managebook = () => {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.post("http://localhost:8000/managebook");
      console.log(response.data);
      setproducts(response.data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <div className="">
        <NavScrollExample />
        <h2 style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
          Books
        </h2>
        {products.map((item, index) => {
          item.quantity = 0;
          return (
            <div class="columns" key={item.id}>
              <ul class="price">
                <div class="imagewrapper">
                  <img
                    style={{ height: "230px", width: "100%" }}
                    src="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>

                <li
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginTop: "50px",
                    paddingTop: "10px",
                    marginLeft: "4px",
                    fontFamily: "sans-serif",
                    color: "black",
                  }}
                >
                  {item.bookname}
                </li>
                <li
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginTop: "50px",
                    paddingTop: "10px",
                    marginLeft: "4px",
                    fontFamily: "sans-serif",
                    color: "black",
                  }}
                >
                  {item.isbnn}
                </li>
                <li
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    marginTop: "50px",
                    paddingTop: "10px",
                    marginLeft: "4px",
                    fontFamily: "sans-serif",
                    color: "black",
                  }}
                >
                  {item.regno}
                </li>

                <div class="row">
                  <div class="col-6" style={{ marginBottom: "10px" }}>
                    <li class="grey">
                      <button
                        class="button"
                        style={{ fontFamily: "sans-serif" }}
                        onClick=""
                      >
                        Return
                      </button>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Managebook;
