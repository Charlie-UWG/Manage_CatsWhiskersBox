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
            <div class="illst mr-10">Image</div>
            <p class="wd-100 mr-10">ミケ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
          <li class="orderRow">
            <div class="illst mr-10">Image</div>
            <p class="wd-100 mr-10">キジ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
        </ul>
        <button>うさぎのひげ</button>
        <ul>
          <li class="orderRow">
            <div class="illst mr-10">Image</div>
            <p class="wd-100 mr-10">ネザーランドドワーフ</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
          <li class="orderRow">
            <div class="illst mr-10">Image</div>
            <p class="wd-100 mr-10">ロップイヤー</p>
            <div>
              <label>注文数</label>
              <input type="number" />
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p>受注確認</p>
        <button>入力確認をする</button>
      </div>
    </div>
  );
};
