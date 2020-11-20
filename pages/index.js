import Head from 'next/head'

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import EvidenceBtn from '../components/EvidenceBtn'


const Home = () => (
  <>
    <Head>
      <title>Phasmophobia Evidence</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container >
      <Row >
        <Col></Col>
        <Col xs="auto">
          <EvidenceBtn>EMF 5</EvidenceBtn>
          <EvidenceBtn>Ghost Orbs</EvidenceBtn>
          <EvidenceBtn>Ghost Writing</EvidenceBtn>
          <EvidenceBtn>Freezing Temps</EvidenceBtn>
          <EvidenceBtn>Spirit Box</EvidenceBtn>
          <EvidenceBtn>Finger Prints</EvidenceBtn>
        </Col>
        <Col></Col>
      </Row>
    </Container>

  </>
)

export default Home
