import React from "react";
import Foodfat from "./Foodfat"; 
import Foodthin from "./Foodthin"; 
import "./App.css";
function Home() {
    return (
        <div>
            <h1>อาหารสำหรับผู้ที่ต้องการเพิ่มน้ำหนัก</h1>
            <Foodfat />
            <h1>อาหารสำหรับผู้ที่ต้องการลดน้ำหนัก</h1>
            <Foodthin />
        </div>
    );
}

export default Home;
