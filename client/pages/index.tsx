import axios from "axios";
import React, { useEffect, useState } from "react";
import { FavoritedSection } from "../components/FavoritedSection";
import { Hero } from "../components/Hero";
import { PopularSection } from "../components/PopularSection";

const Home = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const results = await axios.get("/api/trips");
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

  return (
    <>
      <Hero />
      <PopularSection />
      <FavoritedSection />
    </>
  );
};

export default Home;
