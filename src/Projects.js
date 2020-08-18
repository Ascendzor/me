import React from 'react';
import { Link } from "react-router-dom";

const projects = [
    {
        source: 'https://github.com/Ascendzor/mandelbrot-explorer',
        play: 'https://ascendzor.github.io/mandelbrot-explorer',
        title: 'mandelbrot set explorer',
        image: '/mandelbrot.png',
        content: <div>
            <p>This project is designed to let people explore the mandelbrot in the easiest possible way, by using map technology.</p>
            <p>
                I have a strong appreciation for nature's mathematical expressions, and there was no simple click and use mandelbrot set tool.
                I used Leaflet, which is a map technology like Google Maps, so drag, double click, phones, everything just works.
                I take advantage of the x,y,z properties such that I know where each tile is on the x-axis and the y-axis.
                Each and every single pixel really does apply the mandelbrot set function! In fact, not just once, but 4 random samples within the pixel and then it renders the averaged colour.
            </p>
            <p>
                Technologies: Leaflet, bitcoin for donation button.
            </p>
            <p></p>
        </div>
    },
    {
        source: 'https://github.com/Ascendzor/fractal-clock',
        play: 'https://ascendzor.github.io/fractal-clock',
        title: 'fractal clock',
        image: '/fractalclock.png',
        content: <div>
            <p>This project was me playing around with fractals, and I wanted to see how browsers can handle animating SVGs.</p>
            <p>
                Technologies: just raw svg and some mathematics.
            </p>
        </div>
    },
    {
        source: 'https://github.com/Ascendzor/pretty-easy-privacy',
        play: 'https://ascendzor.github.io/pretty-easy-privacy/',
        title: 'pretty easy privacy',
        image: '/prettyeasyprivacy.png',
        content: <div>
            <p>The goal is to show people what asymmetric cryptography is, so that they can be just one step closer towards trusting cryptographic systems.</p>
            <p>
                Technologies: react, joyride, rsa.
            </p>
        </div>
    }
]

export default () => {
    return <div>
        <div style={{marginBottom: 20}} className='breadcrumb'><Link to='/'>Home</Link> / <Link to='/projects'>projects</Link></div>
        {projects.map(project => {
            return <div style={{backgroundColor: 'white', borderRadius: 5, padding: 5, marginBottom: 10, boxShadow: '1px 1px 5px', backgroundImage: 'url(/darkhoneycomb.jpg)'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{fontSize: '1.2em', fontWeight: 600}}>{project.title}</div>
                    <div style={{width: '100%', textAlign: 'left', paddingLeft: 100}}>
                        <div style={{width: 50}}>
                            Play
                        </div>
                        <a target="_blank" href={project.source}><div style={{display: 'inline-block', fontSize: '0.8em'}}>{project.play}</div></a>
                        <div style={{height: 10}} />
                        <div style={{width: 50}}>
                            Source
                        </div>
                        <a target="_blank" href={project.source}><div style={{display: 'inline-block', fontSize: '0.8em'}}>{project.source}</div></a>
                    </div>
                    <div style={{height: 10}} />
                    <img src={project.image} style={{height: 200}} />
                </div>
                <div style={{padding: 10}}>{project.content}</div>
            </div>
        })}
    </div>
}