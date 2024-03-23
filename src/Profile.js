import React, { useState } from "react";
import "./Profile.css";

function BMICalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [status, setStatus] = useState('');

    const handleClick = () => {
        if (!height || !weight || height <= 0 || weight <= 0) {
          
          return;
      }
        const calculatedBMI = calculateBMI();
        setBmi(calculatedBMI);
        setStatus(determineStatus(parseFloat(calculatedBMI)));
    };

    const calculateBMI = () => {
        const heightInMeters = parseFloat(height) / 100; 
        const weightInKilograms = parseFloat(weight); 
        return ((weightInKilograms / (heightInMeters * heightInMeters)) || 0).toFixed(2);
    };

    const determineStatus = (bmi) => {
        if (bmi < 18.5) return 'น้ำหนักน้อย/ผอม';
        if (bmi >= 18.5 && bmi < 25) return 'อยู่ในเกณต์/ปกติ';
        if (bmi >= 25 && bmi < 30) return 'อ้วน';
        return 'อ้วนมาก';
    };

    return (
        <div className="container">
            <input 
                type="text"
                placeholder="ส่วนสูงของคุณ"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <input 
                type="text"
                placeholder="น้ำหนักของคุณ"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <button onClick={handleClick}>คำนวณหาค่า BMI</button>
            {bmi && <div>BMI: {bmi} ({status})</div>}
        </div>
    );
}

export default BMICalculator;
