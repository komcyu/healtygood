
import React from 'react';
import './Workout.css'; 

function Workout() {
return (
  <div className="schedule">
    <h2>ตารางออกกำลังกาย 30 วัน</h2>
    
    <div className="week">
      <div className="day"><h3>จันทร์</h3></div>
      <div className="day"><h3>อังคาร</h3></div>
      <div className="day"><h3>พุธ</h3></div>
      <div className="day"><h3>พฤหัสบดี</h3></div>
      <div className="day"><h3>ศุกร์</h3></div>
      <div className="day"><h3>เสาร์</h3></div>
      <div className="day"><h3>อาทิตย์</h3></div>
    </div>
    <div className="week">
      <div className="workout">วันที่ 1<br/>คาร์ดิโอ 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="workout">วันที่ 2<br/>หน้าท้อง 30 น.</div>
      <div className="workout">วันที่ 3<br/>ขาและน่องขา 30 น.</div>
      <div className="workout">วันที่ 4<br/>คาร์ดิโอ 30 น.</div>
      <div className="workout">วันที่ 5<br/>ทั่วร่างกาย 30 น.</div>
      <div className="workout">วันที่ 6<br/>คาร์ดิโอ 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="rest">วันที่ 7<br/>พัก</div>
    </div>
    
    
    <div className="week">
      <div className="workout">วันที่ 8<br/>ขาและน่องขา 30 น.</div>
      <div className="workout">วันที่ 9<br/>คาร์ดิโอ 30 น.</div>
      <div className="rest">วันที่ 10<br/>พัก</div>
      <div className="workout">วันที่ 11<br/>ทั่วร่างกาย 30 น.</div>
      <div className="workout">วันที่ 12<br/>หน้าท้อง 30 น.</div>
      <div className="workout">วันที่ 13<br/>คาร์ดิโอ 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="rest">วันที่ 14<br/>พัก</div>
    </div>
    
    
    <div className="week">
      <div className="workout">วันที่ 15<br/>หน้าท้อง 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="workout">วันที่ 16<br/>ขาและน่องขา 30 น.</div>
      <div className="workout">วันที่ 17<br/>คาร์ดิโอ 30 น.</div>
      <div className="workout">วันที่ 18<br/>ทั่วร่างกาย 30 น.</div>
      <div className="workout">วันที่ 19<br/>หน้าท้อง 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="workout">วันที่ 20<br/>โปรแกรม HIIT 20 น.</div>
      <div className="rest">วันที่ 21<br/>พัก</div>
      


    </div>
    
    
    <div className="week">
      <div className="workout">วันที่ 22<br/>คาร์ดิโอ 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="workout">วันที่ 23<br/>ทั่วร่างกาย 30 น.</div>
      <div className="workout">วันที่ 24<br/>หน้าท้อง 30 น.</div>
      <div className="workout">วันที่ 25<br/>หน้าท้อง 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="rest">วันที่ 26<br/>พัก</div>
      <div className="workout">วันที่ 27<br/>คาร์ดิโอ 30 น.<br/>หน้าแขน 15 น.</div>
      <div className="rest">วันที่ 28<br/>พัก</div>
      <div className="workout">วันที่ 29<br/>ทั่วร่างกาย 30 น.</div>
      <div className="workout">วันที่ 30<br/>ขาและน่องขา 30 น.</div>
    </div>
    
   
  </div>
);
}

export default Workout;
