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
          // placeholder="受注日"
          type="date"
          value={orderDate}
          onChange={onChangeOrderDate}
        />
      </div>
      <div class="orderInputDiv">
        <button>猫のひげ</button>
        <ul>
          <li>
            <p>1</p>
            <div>Image</div>
            <p>ミケ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
          <li>
            <p>2</p>
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
            <p>1</p>
            <div>Image</div>
            <p>ネザーランドドワーフ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
          <li>
            <p>2</p>
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
