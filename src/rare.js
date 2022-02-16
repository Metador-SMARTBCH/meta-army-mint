import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/rare.module.css"
import { Container, Row, Col, Card } from "react-bootstrap";

// RARE IMAGES
import Rare1 from "./images/rare1.png";
import Rare2 from "./images/rare2.png";
import Rare3 from "./images/rare3.png";
import Rare4 from "./images/rare4.png";
import Rare5 from "./images/rare5.png";
import Rare6 from "./images/rare6.png";

const cardInfo = [
    {
        id: 1,
        cardImage: Rare1,
        cardTitle: 'Rare 1',
        cardNumber: 3500,
        cardText: 'META Army #3500 is most rariest character with a neon yellow outfit, green yellow chest, metador chest, eyes spark, bitcoin cash background and 2 swords.'
    },

    {
        id: 2,
        cardTitle: 'Rare 2',
        cardNumber: 1238,
        cardImage: Rare2,
        cardText: 'META Army #1238 has a fire overlay with solid blue background, white hair, neon white chest and 2 swords.'
    }, 

    {
        id: 3,
        cardTitle: 'Rare 3',
        cardImage: Rare3,
        cardNumber: 1246,
        cardText: 'META Army #1246 has a solid green background, triangle overlay, blue hair, neon red chest, crowned head, pink eye, swords 2'
    },

    {
        id: 4,
        cardTitle: 'Rare 4',
        cardImage: Rare4,
        cardNumber: 1322,
        cardText: 'META Army #1322 has a solid red background, hexagon neon overlay, white purple hair, neon white chest, star eyes. '
    },

    {
        id: 5,
        cardTitle: 'Rare 5',
        cardImage: Rare5,
        cardNumber: 1624,
        cardText: 'META Army #1625 has a fire overlay, neon green outfit, pinkblue hair, bitcoin cash chest, crowned head, rainbow eyes, magic wand.'
    },

    {
        id: 6,
        cardTitle: 'Rare 6',
        cardImage: Rare6,
        cardNumber: 1704,
        cardText: 'META Army #1704 has a solid red background, shimmer overlay, white hair, metador chest, red halo head, pink eyes, magic hands '
    }
];

function Rare() {
    return (
        <Container>
            <div className={styles.rareH1}>
                <h1>Rare Characters</h1>
            </div>
            <Row>
                {cardInfo.map((cards)=>(
                    <Col lg={3} md={3} sm={6} xs={6}>
                    <Card style={{ width: '18rem' }} className={styles.card}>
                        <Card.Img className={styles.cardImage} variant="top" alt="meta image" src={cards.cardImage} />
                            <Card.Body>
                                <Card.Title>
                                   <span className="badge bg-success"> {cards.cardTitle} </span>
                                </Card.Title>
                                <Card.Text className={styles.cardText}>
                                    {cards.cardText}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}


export default Rare;