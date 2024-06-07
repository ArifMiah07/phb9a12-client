// src/App.js

function App() {
  return (
    <div className="App">
      <section id="home" className="h-screen bg-blue-100 flex items-center justify-center">
        <h2 className="text-3xl">Home Section</h2>
      </section>
      <section id="about" className="h-screen bg-green-100 flex items-center justify-center">
        <h2 className="text-3xl">About Section</h2>
      </section>
      <section id="services" className="h-screen bg-red-100 flex items-center justify-center">
        <h2 className="text-3xl">Services Section</h2>
      </section>
      <section id="contact" className="h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-3xl">Contact Section</h2>
      </section>
    </div>
  );
}

export default App;
