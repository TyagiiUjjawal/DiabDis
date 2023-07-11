import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/predictdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Pregnancies">Pregnancies:</label>
        <input
          type="number"
          id="Pregnancies"
          name="Pregnancies"
          value={form.Pregnancies}
          onChange={handleChange}
        />

        <label htmlFor="Glucose">Glucose:</label>
        <input
          type="number"
          id="Glucose"
          name="Glucose"
          value={form.Glucose}
          onChange={handleChange}
        />

        <label htmlFor="BloodPressure">Blood Pressure:</label>
        <input
          type="number"
          id="BloodPressure"
          name="BloodPressure"
          value={form.BloodPressure}
          onChange={handleChange}
        />

        <label htmlFor="SkinThickness">Skin Thickness:</label>
        <input
          type="number"
          id="SkinThickness"
          name="SkinThickness"
          value={form.SkinThickness}
          onChange={handleChange}
        />

        <label htmlFor="Insulin">Insulin:</label>
        <input
          type="number"
          id="Insulin"
          name="Insulin"
          value={form.Insulin}
          onChange={handleChange}
        />

        <label htmlFor="BMI">BMI:</label>
        <input
          type="number"
          id="BMI"
          name="BMI"
          value={form.BMI}
          onChange={handleChange}
        />

        <label htmlFor="DiabetesPedigreeFunction">
          Diabetes Pedigree Function:
        </label>
        <input
          type="number"
          id="DiabetesPedigreeFunction"
          name="DiabetesPedigreeFunction"
          value={form.DiabetesPedigreeFunction}
          onChange={handleChange}
        />

        <label htmlFor="Age">Age:</label>
        <input
          type="number"
          id="Age"
          name="Age"
          value={form.Age}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {result && (
        <div className="result">
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
