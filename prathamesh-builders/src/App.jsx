import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function Home() {
  return (
    <main>
      <section
        style={{
          height: "100vh",
          background:
            "linear-gradient(135deg, #111111 0%, #1f1f1f 50%, #c89b3c 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Prathamesh Builders & Developers
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Building Trust. Creating Legacy.
          </p>
        </div>
      </section>

      <section
        style={{
          height: "120vh",
          padding: "80px 20px",
          background: "#f8f8f8",
        }}
      >
        <h2>Navbar Scroll Test</h2>

        <p>
          Scroll this page to test:
        </p>

        <ul>
          <li>Sticky Navbar</li>
          <li>Scroll Shadow</li>
          <li>Logo Scaling</li>
          <li>Responsive Menu</li>
        </ul>
      </section>
    </main>
  );
}

function Placeholder({ title }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        fontSize: "2rem",
        fontWeight: "600",
      }}
    >
      {title} Page
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/legacy" element={<Placeholder title="Legacy" />} />
        <Route path="/projects" element={<Placeholder title="Projects" />} />
        <Route path="/gallery" element={<Placeholder title="Gallery" />} />
        <Route path="/services" element={<Placeholder title="Services" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
      </Routes>
    </Router>
  );
}

export default App;