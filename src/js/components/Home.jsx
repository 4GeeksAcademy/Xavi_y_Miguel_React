import Navbar from "./Navbar";
import Alert from "./Alert";
import Card from "./Card";

//create your first component
const Home = () => {
	const cardsDetails = [
		{
			title: "Card title 1",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "cualquierimagen1",
			btnText: "Go somewhere 1",
		},
		{
			title: "Card title 2",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "cualquierimagen2",
			btnText: "Go somewhere 2",
		},
		{
			title: "Card title 3",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "cualquierimagen3",
			btnText: "Go somewhere 3",
		},
		{
			title: "Card title 4",
			text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
			imgSrc: "cualquierimagen4",
			btnText: "Go somewhere 4",
		},
	];

  return (
    <div>
      <Navbar />
      <Alert />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <Card />
          </div>
          <div className="col-12 col-md-3">
            <Card />
          </div>
          <div className="col-12 col-md-3">
            <Card />
          </div>
          <div className="col-12 col-md-3">
            <Card />
          </div>
        </div>
				<p className="mt-5">Estos cards han sido generados con un map:</p>
        <div className="row">
					{cardsDetails.map((card, index) => {
						return (
              <div className="col-12 col-md-3" key={index}>
                <Card />
              </div>
            );
					})}
        </div>
      </div>
    </div>
  );
};

export default Home;