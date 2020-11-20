import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Jinn extends Component {
    render() {
        return (
           

            <Container>
                <h1>Jinn</h1> 
                <br/>
                    <p><center>A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>A Jinn will travel at a faster speed if its victim is far away.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Turning off the locations power source will prevent the Jinn from using its ability.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>Spirit Box</div>
                <div>EMF Level 5</div>
                <div>Ghost Orb</div>
            </Container>
        )
    }
}