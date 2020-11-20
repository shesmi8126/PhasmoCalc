import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Phantom extends Component {
    render() {
        return (
           

            <Container>
                <h1>Phantom</h1> 
                <br/>
                    <p><center>A Phantom is a Ghost that can possess the living, mostly commonly summoned by a Ouija Board. It also induces fear into those
                        around it.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>Looking at a Phantom will considerably drop your sanity.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Taking a photo of the Phantom will make it temporarily disappear.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>EMF Level 5</div>
                <div>Ghost Orb</div>
                <div>Freezing Temperatures</div>
            </Container>
        )
    }
}