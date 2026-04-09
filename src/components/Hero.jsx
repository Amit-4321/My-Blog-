import "./Hero.css"

export default function Hero({ setPage }) {
    return (
      <div className="hero">
  
        <div className="navbar">
          <span onClick={() => setPage("home")}>Home</span>
          <span onClick={() => setPage("podcast")}>Podcast</span>
          <span onClick={() => setPage("contact")}>Contact</span>
        </div>
  
        <div className="hero-content">
          <h1>My Weight Loss</h1>
          <h2>Journey</h2>
        </div>
  
        <div className="hero-line"></div>
  
      </div>
    )
  }