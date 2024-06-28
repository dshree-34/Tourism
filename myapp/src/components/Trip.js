import "./Trip.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent trips</h1>
      <p>Discover relaxing destinations using Google Maps</p>
      <div className="tripcard">
        <TripData
          image="https://gttp.imgix.net/222039/x/0/15-best-tourist-spots-in-the-philippines-beaches-diving-spots-rivers-waterfalls-historic-sites-4.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
          heading="Calle Crisologo, Vigan"
          text="Travel back in time as you stroll along the streets of Calle Crisologo in Vigan as part of your Ilocos itinerary.  "
        />
        <TripData
          image="https://gttp.imgix.net/222328/x/0/15-best-tourist-spots-in-the-philippines-beaches-diving-spots-rivers-waterfalls-historic-sites-7.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
          heading="Tubbataha Reef, Palawan"
          text="Tubbataha Reef is regarded as one of the top diving spots in the Philippines, and perhaps, the world."
        />
        <TripData
          image="https://gttp.imgix.net/222347/x/0/15-best-tourist-spots-in-the-philippines-beaches-diving-spots-rivers-waterfalls-historic-sites-11.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
          heading="Banaue Rice Terraces"
          text="One of the world's smallest active volcano and beautiful landmarks in the Philippines. The volcano sits on an island within a lake within an island. "
        />
        <TripData
          image="https://images.unsplash.com/photo-1581216061628-2187b387eb5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80"
          heading="Puerto-Princesa Subterranean River National Park"
          text="This park features a spectacular limestone karst landscape with an underground river. The site contains a full 'mountain-to-sea' ecosystem and has some of the most important forests in Asia."
        />
        <TripData
          image="https://gttp.imgix.net/266088/x/0/guide-to-mayon-volcano-in-albay-bicol-world-s-most-perfect-volcanic-cone-3.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
          heading="Mount Mayon"
          text="Mayon Volcano towers above the region, primarily in Legazpi City, and provides a breathtaking backdrop wherever you are in the province. "
        />
      </div>
    </div>
  );
}

export default Trip;