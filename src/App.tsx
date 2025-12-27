
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Equipment from './components/Equipment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Equipment />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
