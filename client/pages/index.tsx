import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const fetchTrips = async () => {
    try {
      const results = await axios.get("http://localhost:4000" + "/trips");
      setTrips(results.data.data.data);
      console.log(trips);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const renderTripItem = (trip: any) => {
    return (
      <li>
        <p>{trip.country}</p>
        <br />
        <p>{trip.traveler}</p>
      </li>
    );
  };

  return (
    <ul>
      {trips.map((trip) => {
        {
          renderTripItem(trip);
        }
      })}
    </ul>
  );
};

export default Home;
