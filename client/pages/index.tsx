import axios from "axios";
import React, { useEffect, useState } from "react";
import { RecommendationSection } from "../components/RecommendationSection";
import { Hero } from "../components/Hero";
import { PopularSection } from "../components/PopularSection";
import { Footer } from "../components/Footer";

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
      <RecommendationSection />
      <PopularSection />
      <Footer />
    </>
  );
};

export default Home;
