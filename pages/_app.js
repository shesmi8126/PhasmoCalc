import '../styles/customTheme.scss'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

function MyApp( { Component, pageProps } ) {
    return (
      <>
        <Navbar variant='dark' expand="lg">
        <Container className="container-fluid">
          <Navbar.Brand href="/">What's Your Ghost?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Photos</Nav.Link>
              <NavDropdown title="Meet The Ghosts" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ghost/spirit">Spirit</NavDropdown.Item>
                <NavDropdown.Item href="/ghost/wraith">Wraith</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Phantom</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Poltergeist</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Banshee</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Jinn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Mare</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Revenant</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">Shade</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10">Demon</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.11">Yurei</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.12">Oni</NavDropdown.Item>
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
      <Component { ...pageProps } />
      </>
    )
}

export default MyApp