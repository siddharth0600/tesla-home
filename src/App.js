import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money Back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons={true}
          first
        />
        <Item
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Money-Back Guarantee"
          descLink=""
          backgroundImg={Model3}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for new roofs"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={Accessories}
          leftBtnTxt="Shop Now"
          leftBtnLink=""
          rightBtnTxt="Learn More"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
      {/* Items => Snapping */}
      {/* Items => Snapping */}
      {/* Items => Snapping */}
      {/* Items => Snapping */}
    </div>
  );
}

export default App;
