import React, { useState, useEffect } from "react";
import ButtonList from "../components/ButtonList";
import api from "../api";
import { AxiosError } from "axios";
import arrayOf from "../helpers/arrayOf";
import { useNavigate } from "react-router-dom";

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
  veil_type_dict,
  similarity_score,
  most_similar,
} from "../helpers/shape_dicts";

const InputForm = () => {
  const navigate = useNavigate();

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
  let veil_types = new Set();

  const [identifications, setIdentifications] = useState([]);
  const [formData, setFormData] = useState({
    cap_diameter: "",
    stem_height: "",
    stem_width: "",
    bruise_or_bleed: false,
    has_ring: false,
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
    veil_type: [],
    similarity_score: 0,
    most_similar: "ERROR",
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
      const veil_type_arr = arrayOf(veil_types);
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
        veil_type: veil_type_arr,
        similarity_score: 0,
        most_similar: "ERROR",
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
        veil_type: veil_type_arr,
        similarity_score: 0,
        most_similar: "ERROR",
      });
      // fetchIdentifications();

      navigate("/score")

      // emptyArrays();

      setFormData({
        cap_diameter: "",
        stem_height: "",
        stem_width: "",
        bruise_or_bleed: false,
        has_ring: false,
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
        veil_type: [],
        similarity_score: 0,
        most_similar: "ERROR",
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
    veil_types = [];
  };

  return (
    <body className="bg-main base-font">
    <div>

      <div className="container">
        <form onSubmit={handleFormSubmit}>

          <div className="prompt-sector">
            <h3 className="question-prompt">Stem Height</h3>
            <input
              type="text"
              className="question-input"
              id="stem_height"
              name="stem_height"
              onChange={handleInputChange}
              value={formData.stem_height}
            />
          </div>

          <div className="prompt-sector">
            <h3 className="question-prompt">Stem Width</h3>
            <input
              type="text"
              className="question-input"
              id="stem_width"
              name="stem_width"
              onChange={handleInputChange}
              value={formData.stem_width}
            />
          </div>

          <div className="prompt-sector">
            <h3 className="question-prompt">Cap Diameter</h3>
            <input
              type="text"
              className="question-input"
              id="cap_diameter"
              name="cap_diameter"
              onChange={handleInputChange}
              value={formData.cap_diameter}
            />
          </div>

          <div className="horizontal-container prompt-sector">
            <h3 className="question-prompt">Mushroom bruises or bleeds upon touch</h3>
            <div className="checkbox-wrapper-23" style={{ "--size": "40px" }}>
              <input
                type="checkbox"
                id="bruise_or_bleed"
                name="bruise_or_bleed"
                onChange={handleInputChange}
                value={formData.bruise_or_bleed}
              />
              <label htmlFor="bruise_or_bleed">
                <svg viewBox="0 0 50 50">
                  <path d="M5 30 L20 45 L45 5"></path>
                </svg>
              </label>
            </div>
          </div>
        
          <div className="horizontal-container prompt-sector">
            <h3 className="question-prompt">Mushroom Has Ring</h3>
            <div className="checkbox-wrapper-23" style={{ "--size": "40px" }}>
              <input
                type="checkbox"
                id="has_ring"
                name="has_ring"
                onChange={handleInputChange}
                value={formData.has_ring}
              />
              <label htmlFor="has_ring">
                <svg viewBox="0 0 50 50">
                  <path d="M5 30 L20 45 L45 5"></path>
                </svg>
              </label>
            </div>
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={cap_shapes}
              nameKeys={arrayOf(cap_shapes_dict.keys())}
              nameDict={cap_shapes_dict}
              prompt={"Mushroom Cap Shape"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={cap_surfaces}
              nameKeys={arrayOf(cap_surface_dict.keys())}
              nameDict={cap_surface_dict}
              prompt={"Mushroom Cap Surface"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={cap_colors}
              nameKeys={arrayOf(cap_color_dict.keys())}
              nameDict={cap_color_dict}
              prompt={"Mushroom Cap Color"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={gill_attachments}
              nameKeys={arrayOf(gill_attachment_dict.keys())}
              nameDict={gill_attachment_dict}
              prompt={"Gill Attachment Style"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={gill_spacings}
              nameKeys={arrayOf(gill_spacing_dict.keys())}
              nameDict={gill_spacing_dict}
              prompt={"Gill Spacing Style"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={gill_colors}
              nameKeys={arrayOf(gill_color_dict.keys())}
              nameDict={gill_color_dict}
              prompt={"Gill Color"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={stem_roots}
              nameKeys={arrayOf(stem_root_dict.keys())}
              nameDict={stem_root_dict}
              prompt={"Stem Root Style"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={stem_surfaces}
              nameKeys={arrayOf(stem_surface_dict.keys())}
              nameDict={stem_surface_dict}
              prompt={"Stem Surface"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={stem_colors}
              nameKeys={arrayOf(stem_color_dict.keys())}
              nameDict={stem_color_dict}
              prompt={"Stem Color"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={veil_types}
              nameKeys={arrayOf(veil_type_dict.keys())}
              nameDict={veil_type_dict}
              prompt={"Veil Type"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={veil_colors}
              nameKeys={arrayOf(veil_color_dict.keys())}
              nameDict={veil_color_dict}
              prompt={"Veil Color"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={ring_types}
              nameKeys={arrayOf(ring_type_dict.keys())}
              nameDict={ring_type_dict}
              prompt={"Ring Type"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={spore_print_colors}
              nameKeys={arrayOf(spore_print_color_dict.keys())}
              nameDict={spore_print_color_dict}
              prompt={"Spore Print Color"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={habitats}
              nameKeys={arrayOf(habitat_dict.keys())}
              nameDict={habitat_dict}
              prompt={"Habitat of Mushroom"}
            />
          </div>

          <div className="prompt-sector">
            <ButtonList
              exportTo={seasons}
              nameKeys={arrayOf(season_dict.keys())}
              nameDict={season_dict}
              prompt={"Current Season"}
            />
          </div>
          <div className="submit-container">
            <button type="submit" className="submit-fancy">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </body>
  );
};

export default InputForm;
