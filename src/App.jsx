import React from 'react';

import './App.css';
import Header from "./atoms/header";
import Footer from "./atoms/footer";
import Avatar from "./atoms/avatar";
import Card from "./atoms/card";
import Badge from "./atoms/badge";

import Mariposas from './mariposas.webp'

function App() {
    return (
        <div className="App">
                {/* Header */}
                <Header title="Mariposas" />
            <div className="container">
                {/* Avatar */}
                <Avatar 
                imageSrc={Mariposas}
                description= "Tipos de mariposas"/>

                {/* Card */}
                <Card title="Bombycoidea" content="La fascinante migración de las mariposas"/>
                <Card title="Copromorphoidea" content="la fascinante migración de una especie "/>
                <Card title="Epermenioidea" content="Las decisivas manchas blancas "/>

                {/* Badge */}
                <Badge label="Beautiful"/>
            </div>

                {/* Footer */}
                <Footer content="Created with ❤️ by Juana"/>
        </div>
    );
}

export default App;