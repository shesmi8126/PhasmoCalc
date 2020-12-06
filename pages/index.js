import Head from 'next/head'
import { Component } from 'react'

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import EvidenceBtn from '../components/EvidenceBtn'
import Ghostie from '../components/Ghostie';

const ghostInfo = [
  {name: 'Spirit', requiredEvidence: ['writing', 'box', 'prints']},
  {name: 'Wraith', requiredEvidence: ['temps', 'box', 'prints']},
  {name: 'Phantom', requiredEvidence: ['emf', 'orbs', 'temps']},
  {name: 'Poltergeist', requiredEvidence: ['orbs', 'box', 'prints']},
  {name: 'Banshee', requiredEvidence: ['emf', 'temps', 'prints']},
  {name: 'Jinn', requiredEvidence: ['emf', 'orbs', 'box']},
  {name: 'Mare', requiredEvidence: ['orbs', 'temps', 'box']},
  {name: 'Revenant', requiredEvidence: ['emf', 'writing', 'prints']},
  {name: 'Shade', requiredEvidence: ['emf', 'orbs', 'writing']},
  {name: 'Oni', requiredEvidence: ['emf', 'box', 'writing']},
  {name: 'Demon', requiredEvidence: ['writing', 'box', 'temps']},
  {name: 'Yurei', requiredEvidence: ['orbs', 'temps', 'writing']},

];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emf: false,
      orbs: false,
      writing: false,
      temps: false,
      box: false,
      prints: false
    };
  }



  updateEvidence = (key, isFound) => {
    this.setState((state, props) => {
      let evidence = {};
      evidence[key] = isFound;
      return evidence;
  });
  }

  renderGhostie = (info) => {
    return (<Ghostie key={info.name} name={info.name} requiredEvidence={info.requiredEvidence} foundEvidence={Object.entries(this.state).filter(entry => entry[1] === true).map(entry => entry[0])}></Ghostie>);
  }

  render(){
    return (
      <>
        <Head>
          <title>Phasmophobia Evidence</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container>
          <Row>
            <Col></Col>
            <Col xs="auto">
              <EvidenceBtn onEvidenceChange={(found) => (this.updateEvidence('emf', found))}>EMF 5</EvidenceBtn>
              <EvidenceBtn onEvidenceChange={(found) => (this.updateEvidence('orbs', found))}>Ghost Orbs</EvidenceBtn>
              <EvidenceBtn onEvidenceChange={(found) => (this.updateEvidence('writing', found))}>Ghost Writing</EvidenceBtn>
              <EvidenceBtn onEvidenceChange={(found) => (this.updateEvidence('temps', found))}>Freezing Temps</EvidenceBtn>
              <EvidenceBtn onEvidenceChange={(found) => (this.updateEvidence('box', found))}>Spirit Box</EvidenceBtn>
              <EvidenceBtn onEvidenceChange={(found) => (this.updateEvidence('prints', found))}>Finger Prints</EvidenceBtn>
            </Col>
            <Col></Col>
          </Row>
          <br/>
          <Row>
            <Col>
              {ghostInfo.map(this.renderGhostie)}
            </Col>
          </Row>
        </Container>

      </>
    )
  }
}
export default Home
