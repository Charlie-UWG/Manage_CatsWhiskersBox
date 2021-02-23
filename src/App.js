import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [orderDate, setOrderDate] = useState("");
  const onChangeOrderDate = (event) => setOrderDate(event.target.value);

  const [buttonNames, setButtonNames] = useState(["猫のひげ",　"ウサギのひげ"]);

  const itemNames = ["ミケ","キジ","ノビノビ","ジャンプ"];

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
        {buttonNames.map((buttonName) => {
          return (
            <>
              <button key={buttonName} >{buttonName}</button>
              <ul>
                {itemNames.map((item) => {
                  return (
                    <>
                    <li class="orderRow">
                      <div class="illst mr-10">Image</div>
                      <p class="wd-100 mr-10">{item}</p>
                      <div>
                        <label>注文数</label>
                        <input type="number" />
                      </div>
                    </li>
                    </>
                  )
                })}
              </ul>
            </>
          );
        })}

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
