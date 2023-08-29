import React from "react";


const IconsPage: React.FC = () => {
  return (
    <div
      style={{ maxWidth: "100%" }}
      className="flex justify-center page-height text-zinc-50 pb-1 mx-auto d-block pt-10 lg:pt-40 d-flex flex-grow-0 flex-wrap h-screen"
    >
      <div className="flex flex-col svg-icon flex-wrap items-center text-white space-y-2  mb-10    mont lg:mr-20 mr-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16vh"
          viewBox="0 0 640 512"
          fill="aliceblue"
          className="svg-icon" 
        >
          <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
        </svg>

        <p style={{ fontSize: "5vh" }}>5</p>
        <p style={{ fontSize: "4vh" }}>Departments</p>
      </div>
      <div className="flex flex-col items-center svg-icon space-y-2 lg:mr-20 mr-0  mb-10 md:mr-20 mont mr-0">
        <div className="mx-auto d-block svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16vh"
            viewBox="0 0 448 512"
            fill="aliceblue"
            className="svg-icon" 
          >
            <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
          </svg>
        </div>
        <p style={{ fontSize: "5vh", paddingLeft: "10%" }}>30+</p>
        <p style={{ fontSize: "4vh" }}>Events</p>
      </div>
      <div className="flex flex-col items-center svg-icon space-y-2  space-x-4 mont mr-20 icon ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16vh"
            viewBox="0 0 512 512"
            fill="aliceblue"
            className="svg-icon" 

          >
            <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z" />
          </svg>
        </div>
        <p style={{ fontSize: "5vh" }}>100+</p>
        <p style={{ fontSize: "4vh" }}>Colleges</p>
      </div>
      <p className="text-lg lg:p-20 lg:-mt-10 p-10 mobile-para text-justify mb-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quasi
        quaerat, praesentium earum minus eius aperiam adipisci sequi nesciunt!
        Distinctio aperiam,  temporibus vero adipisci ea eos possimus minima
        explicabo maiores illum, tenetur rerum neque laborum. Ab laborum odit
        sed id veritatis dolores, unde illo libero minima hic rerum culpa itaque
        quisquam cum laboriosam, incidunt voluptate ut consectetur natus, eaque
        mollitia laudantium! Error amet hic ullam ab quo sequi aliquid illum
        expedita qui explicabo cum rem, deserunt velit quibusdam vitae ipsum
        eius! Tempora voluptas odio impedit quas illum porro accusamus dolores
        ex.
      </p>
    </div>
  );
};

export default IconsPage;
