import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import Container from "@material-ui/core/Container";
import Carousel from "./components/Carousel";
import SimpleCard from "./components/SimpleCard";
import SimpleCardBrand from "./components/SimpleCardBrand";
import MediaCard from "./components/test";

function App() {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        height: "-webkit-fill-available",
        justifyContent: "center"
      }}
    >
      <div
        className="App"
        style={{
          minWidth: "500px",
          border: "1px #e8eaf6 solid",
          height: 930
        }}
      >
        <div
          align="center"
          className="Card1"
          style={{
            height: "220px",
            width: "500px",
            padding: "5px 5px 0px 5px"
          }}
        >
          <SearchAppBar />
          <Carousel />
        </div>

        <div className="Card2" style={{ marginTop: "60px" }}>
          <h5 style={{ marginBottom: "0px" }}>
            <strong>Category</strong>
          </h5>
          <SimpleCard />
        </div>

        <div className="card3">
          <h5 style={{ marginBottom: "-8px" }}>
            <strong>Brand</strong>
          </h5>
          <SimpleCardBrand />
        </div>

        <div className="card4">
          <h5 style={{ fontWeight: "bold" }}>Produk Terlaris</h5>
          <MediaCard />
        </div>
        <SimpleBottomNavigation />
      </div>
    </Container>
  );
}

export default App;
