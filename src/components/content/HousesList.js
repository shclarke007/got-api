import React from "react";

const HousesList = ({ houses }) => {
  return houses.map(house => (
    <div className="cards">
      <p>
        <span className="boldText">Name: </span> {house.name}
      </p>
      <p>
        <span className="boldText">Region:</span> {house.region}
      </p>
      <p>
        <span className="boldText">Coat of Arms:</span> {house.coatOfArms}
      </p>
      <p>
        <span className="boldText">Words: </span>
        {house.words}
      </p>
      <p>
        <span className="boldText">Titles:</span> {house.titles + " "}
      </p>
      <p>
        <span className="boldText">Seats: </span> {house.seats + " "}
      </p>
      <p>
        <span className="boldText">Current Lord: </span>
        {house.currentLord}
      </p>
      <p>
        <span className="boldText">Heir: </span> {house.heir}
      </p>
      <p>
        <span className="boldText">Over Lord:</span> {house.overLord}
      </p>
      <p>
        <span className="boldText">Founded:</span> {house.founded}
      </p>
      <p>
        <span className="boldText">Founder:</span> {house.founder}
      </p>
      <p>
        <span className="boldText">Died out:</span> {house.diedOut}
      </p>
      <p>
        <span className="boldText">Ancestral Weapons:</span>{" "}
        {house.ancestralWeapons + " "}
      </p>
      <p>
        <span className="boldText">Cadet Branches:</span>{" "}
        {house.cadetBranches + " "}
      </p>
      <p>
        <span className="boldText">Sworn Members:</span>{" "}
        {/*would insert another map to display each sworm members with link */}
        <a href={house.swornMembers}>List of Sworn Members</a>
      </p>
      <br />
    </div>
  ));
};

export default HousesList;
