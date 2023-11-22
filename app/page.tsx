'use client';

import './globals.css'
import { useState, useEffect } from 'react';
import NavbarGreen from '../components/NavbarGreen';
import NavbarSearch from "@/components/NavbarSearch";
import PackageCardHome from "@/components/PackageCardHome";
import SearchBar from "@/components/SearchBar";
import AboutUs from "@/components/AboutUs";
import ActivitiesCarousel from "@/components/ActivitiesCarousell";
import ReviewCard from "@/components/ReviewCard";
import Space from "@/components/Space";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  const [showNavbarSearch, setShowNavbarSearch] = useState(false);
  const [hideSearchBar, setHideSearchBar] = useState(false);

  useEffect(() => {
    const checkIfHomePage = window.location.pathname === '/';
    const isLargeScreen = window.innerWidth >= 1440;

    setShowNavbarSearch(checkIfHomePage && isLargeScreen);
    setHideSearchBar(isLargeScreen);

    const handleResize = () => {
      setShowNavbarSearch(window.location.pathname === '/' && window.innerWidth >= 1440);
      setHideSearchBar(window.innerWidth >= 1440);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {showNavbarSearch ? <NavbarSearch /> : <NavbarGreen />}
      
      {!hideSearchBar && <SearchBar />}
      
      <SectionHeader text="Tailored Retreats for Every Budget" />
      <PackageCardHome />
      <AboutUs />
      <Space />
      <SectionHeader text="Explore our activities" />
      <ActivitiesCarousel />
      <Space />
      <SectionHeader text="Discover Memorable Retreat Experiences" />
      <Space />
      <ReviewCard />
      <Space />
    </>
  )
}



  

