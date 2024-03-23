import React from 'react';
import './Foodfat.css'; 
import somtum from './image/somtum.jpg';
import maled from './image/maled.jpg';
import salad from './image/salad.jpg';
import yum from './image/yum.jpg';
function Foodfat() {
  const vegetables = [
    { name: 'ส้มตำ', calories: 300, image: somtum },
    { name: 'ต้มยำกุ้ง', calories: 250, image: yum },
    { name: 'สลัดผัก', calories: 40, image: salad},
    { name: 'เมล็ดธัญพืช', calories: 20, image: maled}
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
