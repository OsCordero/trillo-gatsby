import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import HotelOverview from "../components/HotelOverview/HotelOverview";
import HotelDetail from "../components/HotelDetail/HotelDetail";
import HotelCTA from "../components/HotelCTA/HotelCTA";

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <HotelOverview />
      <HotelDetail />
      <HotelCTA />
    </Layout>
  );
}
