// src/App.js
import './App.css'
// import { useState, useEffect } from 'react';
function App() {
  return (
    <div className="App grid grid-cols-4 ">
      <section id="home" className=" col-span-3 block-c h-screen bg-blue-100 flex items-center justify-center">
        <h2 className="text-3xl">Home Section</h2>
      </section>
      <section id="about" className="block-c h-screen bg-green-100 flex items-center justify-center">
        <h2 className="text-3xl">About Section</h2>
      </section>
      <section id="services" className="block-c h-screen bg-red-100 flex items-center justify-center">
        <h2 className="text-3xl">Services Section</h2>
      </section>
      <section id="contact" className="col-span-3 block-c h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-3xl">Contact Section</h2>
      </section>

    </div>
  );
}

export default App;



// export function App2() {
//   const [showDiv, setShowDiv] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight;
//       const divOffsetTop = document.getElementById('animated-div').offsetTop;
//       const divHeight = document.getElementById('animated-div').offsetHeight;

//       if (scrollPosition > divOffsetTop + divHeight / 2) {
//         setShowDiv(true);
//       } else {
//         setShowDiv(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="content h-screen relative">
//       <div
//         id="animated-div"
//         className={`animated-div bg-blue-500 w-32 h-32 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
//           showDiv ? 'scale-100' : 'scale-50'
//         }`}
//       >
//       </div>
//     </div>
//   );
// }


