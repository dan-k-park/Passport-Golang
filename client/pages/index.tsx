import axios from "axios";
import React, { useEffect, useState } from "react";
import { RecommendationSection } from "../components/RecommendationSection";
import { Hero } from "../components/Hero";
import { RecentSection } from "../components/RecentSection";
import { Footer } from "../components/Footer";
import Head from "next/head";

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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"true"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <RecommendationSection />
      <RecentSection />
      <Footer />
    </>
  );
};

export default Home;
