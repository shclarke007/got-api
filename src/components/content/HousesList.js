import React from "react";

const HousesList = ({ houses }) => {
  return houses.map(house => (
    <div className="cards">
      <p>Name: {house.name}</p>
      <p>Region: {house.region}</p>
      <p>Coat of Arms: {house.coatOfArms}</p>
      <p>Words: {house.words}</p>
      <p>Titles: {house.titles + " "}</p>
      <p>Seats: {house.seats + " "}</p>
      <p>Current Lord: {house.currentLord}</p>
      <p>Heir: {house.heir}</p>
      <p>Over Lord: {house.overLord}</p>
      <p>Founded: {house.founded}</p>
      <p>Founder: {house.founder}</p>
      <p>Died out: {house.diedOut}</p>
      <p>Ancestral Weapons: {house.ancestralWeapons + " "}</p>
      <p>Cadet Branches: {house.cadetBranches + " "}</p>
      <p>Sworn Members: {house.swornMembers + " "}</p>
      <br />
    </div>
  ));
};

export default HousesList;
