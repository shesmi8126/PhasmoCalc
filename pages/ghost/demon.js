import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Demon extends Component {
    render() {
        return (
           

            <Container>
                <h1>Demon</h1> 
                <br/>
                    <p><center>A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>Demons will attack more often than any other Ghost.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Asking a Demon successful questions on the Ouija Board won't lower the users sanity.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>Spirit Box</div>
                <div>Ghost Writing</div>
                <div>Freezing Temperatures</div>
            </Container>
        )
    }
}