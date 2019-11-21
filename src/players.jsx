import React, { Component } from "react";
import { Card, Button, Container, CardColumns } from "react-bootstrap";
export default class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: [
        {
          name: "Kritian W",
          team: "Trondheim",
          age: "33",
          position: "Skip",
          image: "https://i.imgur.com/EJvYmWt.jpg"
        },
        {
          name: "Jan Erik",
          team: "Trondheim",
          age: "42",
          position: "Koster",
          image: "https://i.imgur.com/wSYjlgS.jpg"
        },
        {
          name: "Andreas Aarnseth",
          team: "Trondheim",
          age: "31",
          position: "Feier",
          image: "https://i.imgur.com/mj7txXj.jpg"
        }
      ],
      isLoading: false
    };
  }

  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   fetch("https://rickandmortyapi.com/api/character/")
  //     .then(response => response.json())
  //     .then(data => this.setState({ data: data.results, isLoading: false }));
  // }
  render() {
    const { player, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading chars</p>;
    } else {
      return (
        <div>
          <Container>
            <CardColumns>
              {player.map(d => (
                <Card key={d.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={d.image} />
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Text>Position: {d.position}</Card.Text>{" "}
                    <Card.Text>Position: {d.position}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </CardColumns>
          </Container>
        </div>
      );
    }
  }
}
