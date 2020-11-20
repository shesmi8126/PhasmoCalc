import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Banshee extends Component {
    render() {
        return (
           

            <Container>
                <h1>Banshee</h1> 
                <br/>
                    <p><center>A Banshee is a natural hunter and will attack anything. It has been known to stalk its prey one at a time until making its kill.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>A Banshee will only target one person at a time.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Banshees fear Crucifix and will be less aggressive when near one.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>EMF Level 5</div>
                <div>Fingerprints</div>
                <div>Temperatures</div>
            </Container>
        )
    }
}