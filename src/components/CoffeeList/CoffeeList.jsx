import React from "react";
import "./CoffeeList.css";
import { assets, coffee_description } from "../../assets/assets";
console.log(coffee_description);

function CoffeeList() {
  return (
    <div className="products-section" id="Products">
      <div className="OurProducts">
        <h1 className="Product">Our Products</h1>
        <p>
          Lelise specialty Coffee exports 5,000 tons of Grade 1 quality Specialty
          Yirgachefe, Guji, Sidama and Limu Coffee per year, with all its rich
          and unique taste and flavor to its customers all over the world.
        </p>
      </div>

      <div className="CoffeeList" id="CoffeeList">
        <div className="CoffeList-Right">
          {coffee_description.slice(0, 4).map((item, index) => (
            <div className="items" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="item-textContainer">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="CoffeList-Left">
          {coffee_description.slice(4, 8).map((item, index) => (
            <div className="items" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="item-textContainer">
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoffeeList;
