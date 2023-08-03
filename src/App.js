import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import carousel component

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;

  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Result = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

const CarouselContainer = styled.div`
  margin-bottom: 20px;
`;

const carouselImages = [
  "https://assets.newatlas.com/dims4/default/3bd8eb2/2147483647/strip/true/crop/7360x4912+0+0/resize/2880x1922!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F10%2F7f%2F5e48f79245c0b831a58d7cf8fb1d%2Fdepositphotos-228244172-xl.jpg",
  "https://www.biospectrumindia.com/uploads/articles/istock_921720384-15226.jpg",
  "https://www.endocrine.org/-/media/endocrine/images/patient-engagement-webpage/condition-page-images/diabetes-and-glucose-metabolism/diabetes_treatments_pe_1796x9432.jpg",
];

const App = () => {
  const [formData, setFormData] = useState({
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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://diabss.onrender.com/predictdata";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setResult(responseData.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.iaea.org/sites/default/files/diabetes.jpg")',
        backgroundSize: "cover",
      }}
    >
      <Container>
        <CarouselContainer>
          <Carousel>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Carousel Image ${index}`} />
              </div>
            ))}
          </Carousel>
        </CarouselContainer>

        <form onSubmit={handleSubmit}>
          <Label htmlFor="Pregnancies">Pregnancies:</Label>
          <Input
            type="number"
            id="Pregnancies"
            name="Pregnancies"
            value={formData.Pregnancies}
            onChange={handleChange}
          />
          <Label htmlFor="Glucose">Glucose:</Label>
          <Input
            type="number"
            id="Glucose"
            name="Glucose"
            value={formData.Glucose}
            onChange={handleChange}
          />
          <Label htmlFor="BloodPressure">BloodPressure:</Label>
          <Input
            type="number"
            id="BloodPressure"
            name="BloodPressure"
            value={formData.BloodPressure}
            onChange={handleChange}
          />
          <Label htmlFor="SkinThickness">SkinThickness:</Label>
          <Input
            type="number"
            id="SkinThickness"
            name="SkinThickness"
            value={formData.SkinThickness}
            onChange={handleChange}
          />
          <Label htmlFor="Insulin">Insulin:</Label>
          <Input
            type="number"
            id="Insulin"
            name="Insulin"
            value={formData.Insulin}
            onChange={handleChange}
          />
          <Label htmlFor="BMI">BMI:</Label>
          <Input
            type="number"
            id="BMI"
            name="BMI"
            value={formData.BMI}
            onChange={handleChange}
          />
          <Label htmlFor="DiabetesPedigreeFunction">
            DiabetesPedigreeFunction:
          </Label>
          <Input
            type="number"
            id="DiabetesPedigreeFunction"
            name="DiabetesPedigreeFunction"
            value={formData.DiabetesPedigreeFunction}
            onChange={handleChange}
          />
          <Label htmlFor="Age">Age:</Label>
          <Input
            type="number"
            id="Age"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
          />

          <Button type="submit">Predict</Button>
        </form>

        {result && <Result>Result: {result}</Result>}
      </Container>
    </div>
  );
};

export default App;
