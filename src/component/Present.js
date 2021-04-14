import React from "react";

const Present = (props) => {
  return (
    <div>
      <ul className="tab-contact-2">
        <li></li>
        <li></li>
      </ul>
      <ul className="box-present">
        <li>
          <span>
          <i className="fas fa-pepper-hot"></i>
          <i className="fas fa-carrot"></i>
          </span>
          <span>{props.title_1}</span>
        </li>
        <li>
          <span>
            <i className="fas fa-seedling"></i>
          </span>
          <span>{props.title_2}</span>
        </li>
        <li>
          <span>
            <i className="fas fa-store-alt"></i>
          </span>
          <span>{props.title_3}</span>
        </li>
        <li>
          <span>
          <i className="fas fa-hand-holding-heart"></i>
          </span>
          <span>{props.title_4}</span>
        </li>
        <li>
          <span>
            <i className="fas fa-history"></i>
          </span>
          <span>{props.title_5}</span>
        </li>
      </ul>
    </div>
  );
};

export default Present;
