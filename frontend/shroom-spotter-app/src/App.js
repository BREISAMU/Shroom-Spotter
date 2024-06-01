import React, { useState, useEffect, useRef } from "react";
import ButtonList from "./components/ButtonList";
import api from "./api";
import { AxiosError } from "axios";

const App = () => {
  let cap_shapes = new Set();
  let cap_shapes_dict = new Map([
    ["b", "Bell"],
    ["c", "Conical"],
    ["x", "Convex"],
    ["f", "Flat"],
    ["s", "Sunken"],
    ["p", "Spherical"],
    ["o", "Other"],
  ]);

  let array_fields = [cap_shapes];

  const [identifications, setIdentifications] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    is_income: false,
    date: "",
  });

  const fetchIdentifications = async () => {
    const response = await api.get("identifications");
    setIdentifications(response.data);
  };

  useEffect(() => {
    fetchIdentifications();
  }, []);

  const handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      await api.post("/identifications/", formData);
      fetchIdentifications();

      setFormData({
        amount: "",
        category: "",
        description: "",
        is_income: false,
        date: "",
      });
    } catch (AxiosError) {
      alert("Please fill out all fields with proper input!");
    }
  };

  const emptyArrays = () => {
    cap_shapes = [];
    console.log(cap_shapes);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shroom Spotter
          </a>
        </div>
      </nav>

      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="mt-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              onChange={handleInputChange}
              value={formData.amount}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              onChange={handleInputChange}
              value={formData.category}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={handleInputChange}
              value={formData.description}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="is_income" className="form-label">
              Income?
            </label>
            <input
              type="checkbox"
              id="is_income"
              name="is_income"
              onChange={handleInputChange}
              value={formData.is_income}
            />
          </div>

          <div className="mt-3">
            <h3 className="question-prompt">Date</h3>
            <input
              type="text"
              className="question-input"
              id="date"
              name="date"
              onChange={handleInputChange}
              value={formData.date}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={cap_shapes}
              nameKeys={["b", "c", "x", "f", "s", "p", "o"]}
              nameDict={cap_shapes_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <button type="submit" className="submit-fancy" onClick={emptyArrays}>
            Submit
          </button>
        </form>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Income?</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {identifications.map((identification) => (
              <tr key={identification.id}>
                <td>{identification.amount}</td>
                <td>{identification.category}</td>
                <td>{identification.description}</td>
                <td>{identification.is_income ? "Yes" : "No"}</td>
                <td>{identification.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
