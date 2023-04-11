import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Corkboard from "./components/Corkboard/Corkboard";
import "./App.css";

function App() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBSMU22BGHJAASO_p_2048x.jpg?v=1659679665",
      x: 200,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBSMU22SVSLAAMT_p_2048x.jpg?v=1680588388",
      x: 300,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBSMU22SVSLLDMB_p_2048x.jpg?v=1680588378",
      x: 400,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBVAR62BGHRNYAJ_p_2048x.jpg?v=1666247013",
      x: 500,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBSMU23BGHJNMPA_p_large.jpg?v=1680588368",
      x: 600,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBVNSHSTSPFT_p_64108cc1-6a74-4595-b247-5c807268f182_2048x.jpg?v=1668579273",
      x: 700,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBSMU23BGHJMBCY_p_2048x.jpg?v=1679724297",
      x: 800,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBSMU4XPTGLSCDYM_p_2048x.jpg?v=1671775926",
      x: 900,
      y: 200,
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2578/8918/products/BHMBSMU23CTCNABRA_g4_2048x.jpg?v=1680847520",
      x: 1000,
      y: 200,
    },
  ]);

  const moveImage = (id, x, y) => {
    setImages((prevState) =>
      prevState.map((image, index) =>
        index === id ? { ...image, x, y } : image
      )
    );
  };

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Corkboard images={images} moveImage={moveImage} />
      </DndProvider>
    </div>
  );
}

export default App;
