import Head from 'next/head'

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import EvidenceBtn from '../components/EvidenceBtn'


const Home = () => (
  <>
    <Head>
      <title>Phasmophobia Evidence</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <Navbar variant='dark' expand="lg">
      <Container className="container-fluid">
        <Navbar.Brand href="#home">What's Your Ghost?</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Meet The Ghosts" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Spirit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Wraith</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Phantom</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<br/>
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
