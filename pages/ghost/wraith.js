import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Wraith extends Component {
    render() {
        return (
           

            <Container>
                <h1>Wraith</h1> 
                <br/>
                    <p><center>A wraith is one of the most dangerous Ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known
                        to travel through walls.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>Wraiths almost never touch the ground meaning it can't be tracked by footsteps.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Wraiths have a toxic reaction to Salt
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>Fingerprints</div>
                <div>Freezing Temperatures</div>
                <div>Spirit Box</div>
            </Container>
        )
    }
}