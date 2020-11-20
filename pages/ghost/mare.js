import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Mare extends Component {
    render() {
        return (
           

            <Container>
                <h1>Mare</h1> 
                <br/>
                    <p><center>A Mare is the source of all nightmares, making it most powerful in the dark.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>A Mare will have an increased chance to attack in the dark.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Turning the lights on around the Mare will lower its chance to attack.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>Spirit Box</div>
                <div>Freezing Temperatures</div>
                <div>Ghost Orb</div>
            </Container>
        )
    }
}