import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [orderDate, setOrderDate] = useState("");
  const onChangeOrderDate = (event) => setOrderDate(event.target.value);

  return (
    <div>
      <div class="dateInputDiv">
        <label class="label">受注日入力</label>
        <input
          // placeholder="受注日"
          type="date"
          value={orderDate}
          onChange={onChangeOrderDate}
        />
      </div>
      <div class="orderInputDiv">
        <button>猫のひげ</button>
        <ul>
          <li class="orderRow">
            <div class="illst">Image</div>
            <p>ミケ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
          <li>
            <div>Image</div>
            <p>キジ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
        </ul>
        <button>うさぎのひげ</button>
        <ul>
          <li>
            <div>Image</div>
            <p>ネザーランドドワーフ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
          <li>
            <div>Image</div>
            <p>ロップイヤー</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
