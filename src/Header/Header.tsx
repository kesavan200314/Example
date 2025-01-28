import React from "react";
// import "./Header.css"; // Make sure to import the CSS file

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span> WITH US
        </h1>
      </div>
    </div>
  );
}

export default Header;



// export default Header;
// import React, { useEffect } from "react";
// import "./Header.css"; // Make sure the CSS file is correctly linked

// function Header() {
//   useEffect(() => {
//     // Optional: If you want to dynamically adjust the background image based on the window size
//     const handleResize = () => {
//       // Any logic to change the background or layout dynamically on resize
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div id="main">
//       {/* Add any content you want inside this div */}
//     </div>
//   );
// }

// export default Header;













































// // import React from "react";
// // import { Link } from "react-scroll"; // Correctly import Link
// // // import "./App.css"; // Ensure this file exists
// // import "./Header.css"

// // function Header() {
// //   const [header, setHeader] = useState(false);

// //   const changeBackground = () => {
// //     if (window.scrollY >= 50) {
// //       setHeader(true);
// //     } else {
// //       setHeader(false);
// //     }
// //   };

  
// //     window.addEventListener("scroll", changeBackground);
   

// //   return (
// //     <div id="main" className={header ? "header-active" : ""}>
// //       <div className="header-heading">
// //         <h1>STEP UP YOUR</h1>
// //         <h2>
// //           <span>FITNESS</span> WITH US
// //         </h2>
// //         <p className="details">
// //           Build your Body and Fitness with Professional Touch
// //         </p>
// //         <div className="header-btns">
// //           <a href="/join" className="header-btn">
// //             JOIN US
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;
