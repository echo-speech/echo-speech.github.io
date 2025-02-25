import React from "react";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Curriculums from "./components/Curriculums";
import Contact from "./components/Contact";
import CustomCursor from "./utils/CursorAnimation";

export default function App() {
    return (
        <div className="font-sora scroll-smooth overflow-x-hidden">
            <CustomCursor />
            <Navbar />
            <Home />
            <Skills />
            <About />
            <Curriculums />
            <Contact />

            <Footer />
        </div>
    );
}
