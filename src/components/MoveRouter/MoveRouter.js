import "./MoveRouter.css";

import { capitalize, checkInvalidAccessToPage } from "../../helperFunctions";

import DiskImage from "../../images/disk.png";
import HomeHeader from "../HomeHeader/HomeHeader";
import React from "react";

export default function MoveRouter({ data }) {
  checkInvalidAccessToPage(data);

  return (
    <div>
      <HomeHeader />
      <div className="body">
        <h2 id="head">
          {capitalize(data.name)}
          <br />
          (#{data.id})
          <br />
          <img
            id="mImage"
            src={DiskImage}
            alt={data.name}
            style={{
              alignContent: "center",
              alignItems: "center",
              flex: 1,
              width: 500,
            }}
          />
        </h2>
        <div className="info">
          <p>
            <b>Power: </b>
            {data.power}
          </p>
          <p>
            <b>PP: </b>
            {data.pp}
          </p>
          <p>
            <b>Type: </b>
            {capitalize(data.type.name)}
          </p>
        </div>
      </div>
    </div>
  );
}
