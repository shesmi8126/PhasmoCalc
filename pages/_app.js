import "../styles/customTheme.scss";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Container className="container-fluid">
          <Link href="/" passHref>
            <Navbar.Brand>What's Your Ghost?</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="#link" passHref>
                <Nav.Link>Photos</Nav.Link>
              </Link>
              <NavDropdown title="Meet The Ghosts" id="basic-nav-dropdown">
                <Link href="/ghost/spirit" passHref>
                  <NavDropdown.Item>Spirit</NavDropdown.Item>
                </Link>
                <Link href="/ghost/wraith" passHref>
                  <NavDropdown.Item>Wraith</NavDropdown.Item>
                </Link>
                <Link href="/ghost/phantom" passHref>
                  <NavDropdown.Item>Phantom</NavDropdown.Item>
                </Link>
                <Link href="/ghost/poltergeist" passHref>
                  <NavDropdown.Item>Poltergeist</NavDropdown.Item>
                </Link>
                <Link href="/ghost/banshee" passHref>
                  <NavDropdown.Item>Banshee</NavDropdown.Item>
                </Link>
                <Link href="/ghost/jinn" passHref>
                  <NavDropdown.Item>Jinn</NavDropdown.Item>
                </Link>
                <Link href="/ghost/mare" passHref>
                  <NavDropdown.Item>Mare</NavDropdown.Item>
                </Link>
                <Link href="/ghost/revenant" passHref>
                  <NavDropdown.Item>Revenant</NavDropdown.Item>
                </Link>
                <Link href="/ghost/shade" passHref>
                  <NavDropdown.Item>Shade</NavDropdown.Item>
                </Link>
                <Link href="/ghost/demon" passHref>
                  <NavDropdown.Item>Demon</NavDropdown.Item>
                </Link>
                <Link href="/ghost/yurei" passHref>
                  <NavDropdown.Item>Yurei</NavDropdown.Item>
                </Link>
                <Link href="/ghost/oni" passHref>
                  <NavDropdown.Item>Oni</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
