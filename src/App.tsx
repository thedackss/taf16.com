import "./styles/App.scss";

function App() {
    return (
        <div className="app">
            <nav className="nav">
                <div className="nav-container">
                    <div className="logo">taf16.com</div>
                    <div className="nav-links">
                        <a href="#about">About</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            <main className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="title-line">Building Digital</span>
                        <span className="title-line accent">Experiences</span>
                    </h1>
                    <p className="hero-description">
                        Crafting modern, elegant solutions for the web
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </div>
            </main>

            <section className="features" id="about">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">◆</div>
                        <h3>Minimalist Design</h3>
                        <p>Clean, focused interfaces that put content first</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">◆</div>
                        <h3>Modern Stack</h3>
                        <p>Built with cutting-edge technologies</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">◆</div>
                        <h3>Performance</h3>
                        <p>Optimized for speed and efficiency</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© 2024 taf16.com. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
