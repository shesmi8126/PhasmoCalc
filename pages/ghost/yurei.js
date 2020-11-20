import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Yurei extends Component {
    render() {
        return (
           

            <Container>
                <h1>Yurei</h1> 
                <br/>
                    <p><center>A Yurei is a Ghost that has returned to the physical world, usually for the purpose of revenge or hatred.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>Yurei's have been known to have a stronger effect on people sanity.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Smudging the Yurei's room will cause it to not wander around the location for a long time.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>Ghost Writing</div>
                <div>Freezing Temperatures</div>
                <div>Ghost Orb</div>
            </Container>
        )
    }
}