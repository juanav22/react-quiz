import React from 'react';

import Avatar from "./atoms/avatar";
import Badge from "./atoms/badge";
import Card from "./atoms/card";
import Counter from "./atoms/counter";
import Footer from "./atoms/footer";
import Header from "./atoms/header";

import Mariposas from './mariposas.webp'

import './App.css';

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
                <Card title="Epermenioidea" content={<Counter/>}/>
                {/* Badge */}
                <Badge label="Enviar"/>
            </div>

                {/* Footer */}
                <Footer content="Created with ❤️ by Juana"/>
        </div>
    );
}

export default App;