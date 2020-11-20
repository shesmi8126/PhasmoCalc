import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Shade extends Component {
    render() {
        return (
           

            <Container>
                <h1>Shade</h1> 
                <br/>
                    <p><center>A Shade is known to be a Shy Ghost. There is evidence that a shade will stop all paranormal activity if there are multiple people nearyby.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>Being shy means the Ghost will be harder to find.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>The Ghost will not enter hunting mode if there are multiple people nearby.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>EMF Level 5</div>
                <div>Ghost Writing</div>
                <div>Ghost Orb</div>
            </Container>
        )
    }
}