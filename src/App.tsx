import React from 'react'
import './App.css'

function App() {
  return (
    <div className="donkart-app">
      <header className="site-header">
        <div className="site-brand">Donkart</div>
        <nav className="site-nav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Donkart</h1>
          <p className="tagline">Shop quality products at great prices — fast delivery, easy returns.</p>
          <div className="cta-row">
            <button className="btn primary">Shop Now</button>
            <button className="btn outline">Browse</button>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80" alt="Donkart hero" />
        </div>
      </main>

      <section className="features">
        <div className="feature">
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature">
          <h3>Secure Payments</h3>
          <p>Trusted payment options</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </section>

      <footer className="site-footer">© {new Date().getFullYear()} Donkart</footer>
    </div>
  )
}

export default App
