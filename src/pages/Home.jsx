import React from 'react';
import Hero from '../components/Hero';
import BookSection from '../components/BookSection';
import About from '../components/About';

const Home = () => {
    return (
        <main>
            <Hero />
            <div id="books">
                <BookSection />
            </div>
            <div id="about">
                <About />
            </div>
        </main>
    );
};

export default Home;
