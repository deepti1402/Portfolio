import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
// Compliance page will be created new
import Compliance from './pages/Compliance';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="equipment" element={<Equipment />} />
                    <Route path="compliance" element={<Compliance />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
