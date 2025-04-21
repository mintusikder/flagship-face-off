import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import PhonesContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const phones = useLoaderData();
  const [phone, setPhone] = useState(phones);
  useEffect(() => {
    setPhone(phones);
  }, [phones]);
  const handelSearch = (e, text) => {
    e.preventDefault();
    if (text === "") return setPhone(phones);
    const searchPhone = phone.filter(
      (pho) =>
        pho.name?.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        pho.brand?.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhone(searchPhone);
  };

  return (
    <div>
      <Hero handelSearch={handelSearch}> </Hero>
      <PhonesContainer phones={phone}></PhonesContainer>
    </div>
  );
};

export default Home;
