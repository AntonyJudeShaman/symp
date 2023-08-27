import React from "react";
import Image from "next/image";
import Icon1 from ".//dept.png";
import Icon2 from ".//event.png";
import Icon3 from ".//college.png";

const IconsPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-zinc-50 via-blue-50 to-zinc-50">
      <div className="flex flex-col flex-wrap items-center space-y-4 tiltneon mr-20">
        
          <Image className="w-40 h-40" src={Icon1} alt="Icon 1" />
        
        <p style={{fontSize:'8vh'}}>5</p>
        <p style={{fontSize:'5vh'}}>Departments</p>
      </div>
      <div className="flex flex-col items-center space-y-4 tiltneon mr-20">
        <div >
          <Image src={Icon2} className="w-40 h-40" alt="Icon 2" />
        </div>
        <p style={{fontSize:'8vh',paddingLeft:'10%'}} >30+</p>
        <p style={{fontSize:'5vh'}}>Events</p>
      </div>
      <div className="flex flex-col items-center space-y-4 tiltneon mr-20">
        <div >
          <Image className="w-40 h-40" src={Icon3} alt="Icon 3" />
        </div>
        <p style={{fontSize:'8vh'}}>100+</p>
        <p style={{fontSize:'5vh'}}>Colleges</p>
      </div>
    </div>
  );
};

export default IconsPage;
