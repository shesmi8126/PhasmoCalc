import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class Oni extends Component {
    render() {
        return (
           

            <Container>
                <h1>Oni</h1> 
                <br/>
                    <p><center>Oni's are a cousin to the Demon and possess extreme strenghts. There have been rumours that they become more active around their prey.
                    </center>
                    </p>
                <h4>Unique Strengths</h4>
                <p>Oni's are more active when people are enearby and have been seend moving objects at great speeds.</p>
                <br/>
                <h4>Weaknesses</h4>
                <p>Being more active will make the Oni easier to find and identify.
                </p>
                <br/>
                <h4>Evidence</h4>
                <div>Spirit Box</div>
                <div>EMF Level 5</div>
                <div>Ghost Writing</div>
            </Container>
        )
    }
}