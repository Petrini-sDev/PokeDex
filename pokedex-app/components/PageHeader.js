import { Card } from "react-bootstrap"

export default function PageHeader(prop) {
    return (
        <>
            <Card className="bg-light">
                <Card.Body>{prop.name}</Card.Body>
            </Card>
            <br />
        </>
    );
}