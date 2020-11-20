import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Revenant extends Component {
    render() {
        return (
           

            <Container>
                <h1>Revenant</h1> 
                <br/>
                    <p><center>A Revenant is a slow but violent Ghost that will attack indiscriminately. It has been rumoured to travel at a significantly high speed when hunting.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>A Revenant will travel at a significantly faster speed when hunting a victim.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Hiding from the Revenant will cause it to move very slowly.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>EMF Level 5</div>
                <div>Fingerprints</div>
                <div>Ghost Writing</div>
            </Container>
        )
    }
}