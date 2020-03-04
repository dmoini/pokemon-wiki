import "./ItemRouter.css";

import React from "react";
import { checkInvalidAccessToPage } from "../../helperFunctions";

export default function ItemRouter({ data }) {
  checkInvalidAccessToPage(data);
  return (
    <div>
      <div>This is a Item Router</div>
      <br />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
