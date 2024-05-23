import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Link from 'next/link';

export default function MainNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>PokeDex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref legacyBehavior><Nav.Link>Pokemon</Nav.Link></Link>
                        <Link href="/about" passHref legacyBehavior><Nav.Link>About The Developer</Nav.Link></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    );
}