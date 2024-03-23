import React from 'react';
import './Foodfat.css'; 
import munkai from './image/munkai.png';
import kapoew from './image/kapoew.jpg';
import yokuit from './image/yokuit.png';
import whey from './image/whey.jpg';
function Foodfat() {
  const vegetables = [
    { name: 'ข้าวมันไก่', calories: 300, image: munkai },
    { name: 'ผัดกระเพรา', calories: 250, image: kapoew },
    { name: 'โยเกิร์ต', calories: 40, image: yokuit},
    { name: 'เวย์โปรตีน', calories: 20, image: whey}
  ];

  return (
    <div className="container">
      {vegetables.map((veg, index) => (
        <div key={index} className={`veg-item ${veg.name.toLowerCase()}`}>
          <img src={veg.image} alt={veg.name} />
          <h2>{veg.name}</h2>
          <p>กิโลแคลอรี่: {veg.calories} กิโลแคลอรี่</p>
        </div>
      ))}
    </div>
  );
}

export default Foodfat;
