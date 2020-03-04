import "./MoveRouter.css";

import React from "react";
import { checkInvalidAccessToPage } from "../../helperFunctions";

export default function MoveRouter({ data }) {
  checkInvalidAccessToPage(data);

  return (
    <div>
      <div>This is a Move Router</div>
      <br />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
