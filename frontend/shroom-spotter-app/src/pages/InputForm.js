import React, { useState, useEffect } from "react";
import ButtonList from "../components/ButtonList";
import api from "../api";
import { AxiosError } from "axios";
import arrayOf from "../helpers/arrayOf";
import {
  cap_shapes_dict,
  cap_surface_dict,
  cap_color_dict,
  gill_attachment_dict,
  gill_spacing_dict,
  gill_color_dict,
  stem_root_dict,
  stem_surface_dict,
  stem_color_dict,
  veil_color_dict,
  ring_type_dict,
  spore_print_color_dict,
  habitat_dict,
  season_dict,
} from "../helpers/shape_dicts";

const InputForm = () => {
  let cap_shapes = new Set();
  let cap_surfaces = new Set();
  let cap_colors = new Set();
  let gill_attachments = new Set();
  let gill_spacings = new Set();
  let gill_colors = new Set();
  let stem_roots = new Set();
  let stem_surfaces = new Set();
  let stem_colors = new Set();
  let veil_colors = new Set();
  let ring_types = new Set();
  let spore_print_colors = new Set();
  let habitats = new Set();
  let seasons = new Set();

  const [identifications, setIdentifications] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    cap_diameter: "",
    stem_height: "",
    stem_width: "",
    category: "",
    description: "",
    is_income: false,
    date: "",
    cap_shape: [],
    cap_surface: [],
    cap_color: [],
    gill_attachment: [],
    gill_spacing: [],
    gill_color: [],
    stem_root: [],
    stem_surface: [],
    stem_color: [],
    veil_color: [],
    ring_type: [],
    spore_print_color: [],
    habitat: [],
    season: [],
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
      const cap_shape_arr = arrayOf(cap_shapes);
      const cap_surface_arr = arrayOf(cap_surfaces);
      const cap_color_arr = arrayOf(cap_colors);
      const gill_attachment_arr = arrayOf(gill_attachments);
      const gill_spacing_arr = arrayOf(gill_spacings);
      const gill_color_arr = arrayOf(gill_colors);
      const stem_root_arr = arrayOf(stem_roots);
      const stem_surface_arr = arrayOf(stem_surfaces);
      const stem_color_arr = arrayOf(stem_colors);
      const veil_color_arr = arrayOf(veil_colors);
      const ring_type_arr = arrayOf(ring_types);
      const spore_print_color_arr = arrayOf(spore_print_colors);
      const habitat_arr = arrayOf(habitats);
      const season_arr = arrayOf(seasons);
      setFormData({
        ...formData,
        cap_shape: cap_shape_arr,
        cap_surface: cap_surface_arr,
        cap_color: cap_color_arr,
        gill_attachment: gill_attachment_arr,
        gill_spacing: gill_spacing_arr,
        gill_color: gill_color_arr,
        stem_root: stem_root_arr,
        stem_surface: stem_surface_arr,
        stem_color: stem_color_arr,
        veil_color: veil_color_arr,
        ring_type: ring_type_arr,
        spore_print_color: spore_print_color_arr,
        habitat: habitat_arr,
        season: season_arr,
      });
      event.preventDefault();
      await api.post("/identifications/", {
        ...formData,
        cap_shape: cap_shape_arr,
        cap_surface: cap_surface_arr,
        cap_color: cap_color_arr,
        gill_attachment: gill_attachment_arr,
        gill_spacing: gill_spacing_arr,
        gill_color: gill_color_arr,
        stem_root: stem_root_arr,
        stem_surface: stem_surface_arr,
        stem_color: stem_color_arr,
        veil_color: veil_color_arr,
        ring_type: ring_type_arr,
        spore_print_color: spore_print_color_arr,
        habitat: habitat_arr,
        season: season_arr,
      });
      fetchIdentifications();

      // emptyArrays();

      setFormData({
        amount: "",
        cap_diameter: "",
        stem_height: "",
        stem_width: "",
        category: "",
        description: "",
        is_income: false,
        date: "",
        cap_shape: [],
        cap_surface: [],
        cap_color: [],
        gill_attachment: [],
        gill_spacing: [],
        gill_color: [],
        stem_root: [],
        stem_surface: [],
        stem_color: [],
        veil_color: [],
        ring_type: [],
        spore_print_color: [],
        habitat: [],
        season: [],
      });
    } catch (AxiosError) {
      alert("Please fill out all fields with proper input!");
    }
  };

  const emptyArrays = () => {
    cap_shapes = [];
    cap_surfaces = [];
    cap_colors = [];
    gill_attachments = [];
    gill_spacings = [];
    gill_colors = [];
    stem_roots = [];
    stem_surfaces = [];
    veil_colors = [];
    ring_types = [];
    spore_print_colors = [];
    habitats = [];
    seasons = [];
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
            <label htmlFor="stem_height" className="form-label">
              Stem Height
            </label>
            <input
              type="text"
              className="form-control"
              id="stem_height"
              name="stem_height"
              onChange={handleInputChange}
              value={formData.stem_height}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="stem_width" className="form-label">
              Stem Width
            </label>
            <input
              type="text"
              className="form-control"
              id="stem_width"
              name="stem_width"
              onChange={handleInputChange}
              value={formData.stem_width}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="cap_diameter" className="form-label">
              Cap Diameter
            </label>
            <input
              type="text"
              className="form-control"
              id="cap_diameter"
              name="cap_diameter"
              onChange={handleInputChange}
              value={formData.cap_diameter}
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
              nameKeys={arrayOf(cap_shapes_dict.keys())}
              nameDict={cap_shapes_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={cap_surfaces}
              nameKeys={arrayOf(cap_surface_dict.keys())}
              nameDict={cap_surface_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={cap_colors}
              nameKeys={arrayOf(cap_color_dict.keys())}
              nameDict={cap_color_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={gill_attachments}
              nameKeys={arrayOf(gill_attachment_dict.keys())}
              nameDict={gill_attachment_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={gill_spacings}
              nameKeys={arrayOf(gill_spacing_dict.keys())}
              nameDict={gill_spacing_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={gill_colors}
              nameKeys={arrayOf(gill_color_dict.keys())}
              nameDict={gill_color_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={stem_roots}
              nameKeys={arrayOf(stem_root_dict.keys())}
              nameDict={stem_root_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={stem_surfaces}
              nameKeys={arrayOf(stem_surface_dict.keys())}
              nameDict={stem_surface_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={stem_colors}
              nameKeys={arrayOf(stem_color_dict.keys())}
              nameDict={stem_color_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={veil_colors}
              nameKeys={arrayOf(veil_color_dict.keys())}
              nameDict={veil_color_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={ring_types}
              nameKeys={arrayOf(ring_type_dict.keys())}
              nameDict={ring_type_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={spore_print_colors}
              nameKeys={arrayOf(spore_print_color_dict.keys())}
              nameDict={spore_print_color_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={habitats}
              nameKeys={arrayOf(habitat_dict.keys())}
              nameDict={habitat_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="mt-3 mb-5">
            <ButtonList
              exportTo={seasons}
              nameKeys={arrayOf(season_dict.keys())}
              nameDict={season_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <button type="submit" className="submit-fancy">
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
              <th>Cap shape</th>
              <th>Cap surface</th>
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
                <td>{identification.cap_shape}</td>
                <td>{identification.cap_surface}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputForm;
