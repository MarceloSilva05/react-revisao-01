import React from 'react';
import "./Cards.css"
import img1 from './01.jpg';
import img2 from './02.jpg';
import img3 from './03.jpg';
export default function Cards() {
    return (
        <main className="conteudoCards">
            <div className="cards">
                <img src={img1}></img>
                <h2>Paisagem1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                <a className="ver">VER</a>
            </div>
            <div className="cards">
                <img src={img2}></img>
                <h2>Paisagem2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                <a className="ver">VER</a>
            </div>
            <div className="cards">
                <img src={img3}></img>
                <h2>Paisagem3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                <a className="ver" href="#">VER</a>
            </div>

        </main>
    )
}