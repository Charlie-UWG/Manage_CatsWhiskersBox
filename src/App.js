import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [orderDate, setOrderDate] = useState("");
  const onChangeOrderDate = (event) => setOrderDate(event.target.value);

  return (
    <div>
      <div class="dateInputDiv">
        <label>受注日入力</label>
        <input
          placeholder="受注日"
          type="date"
          value={orderDate}
          onChange={onChangeOrderDate}
        />
      </div>
      <div class="orderInputDiv"></div>
    </div>
  );
};
