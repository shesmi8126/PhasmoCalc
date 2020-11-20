import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Poltergeist extends Component {
    render() {
        return (
           

            <Container>
                <h1>Poltergeist</h1> 
                <br/>
                    <p><center>One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into its victims.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>A Poltergeist can throw huge amounts of objects at once.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>A Poltergeist is almost ineffective in an empty room.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>Spirit Box</div>
                <div>Fingerprints</div>
                <div>Ghost Orb</div>
            </Container>
        )
    }
}