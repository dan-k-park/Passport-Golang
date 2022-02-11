import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const results = await axios.get("http://localhost:4000" + "/trips");
        if (results) {
          setLoading(false);
          setTrips(results.data.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrips();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderTripItem = (trip: any) => {
    console.log(trip.country);
    return (
      <li>
        <p>{trip.country}</p>

        <p>{trip.traveler}</p>
      </li>
    );
  };

  return (
    <ul>
      {trips.map((trip) => {
        return renderTripItem(trip);
      })}
    </ul>
  );
};

export default Home;
