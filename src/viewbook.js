import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavScrollExample from "./Navbar";
import "./viewbook.css";
const Viewbook = () => {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:8000/viewbook");

      setproducts(response.data);
    };
    fetchdata();
  }, []);
  const handleedit = (product) => {
    navigate("/editbook", { state: product });
  };
  const handledelete = async (item) => {
    var bname = item.bookname;
    await axios.post("http://localhost:8000/delete", { bname });
  };
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
                <p
                  style={{
                    marginLeft: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  ISBN Number: {item.isbn}
                </p>
                <p
                  style={{
                    marginLeft: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Author Name: {item.authorname}
                </p>
                <p
                  style={{
                    marginLeft: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Category: {item.category}
                </p>
                <p
                  style={{
                    marginLeft: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Rs.{item.price}
                </p>
                <div class="row">
                  <div class="col-6" style={{ marginBottom: "10px" }}>
                    <div className="row">
                      <div className="col-6">
                        <li class="grey">
                          <button
                            class="button"
                            style={{ fontFamily: "sans-serif" }}
                            onClick={() => handleedit(item)}
                          >
                            Edit
                          </button>
                        </li>
                      </div>
                      <div className="col-6">
                        <li class="grey">
                          <button
                            class="button"
                            style={{ fontFamily: "sans-serif" }}
                            onClick={() => handledelete(item)}
                          >
                            Delete
                          </button>
                        </li>
                      </div>
                    </div>
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
export default Viewbook;
