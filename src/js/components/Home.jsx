import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 mx-4">
        <Jumbotron />
      </div>

      <div className="row">
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
