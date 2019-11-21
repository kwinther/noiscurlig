import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
export default class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [
        {
          name: "Trondheims fuggel",
          established: "1999",
          players: ["1", "2", "3"],
          points: 5
        },
        {
          name: "Bodøfoxes",
          established: "1881",
          players: ["1", "2", "3"],
          points: 4
        },
        {
          name: "AassesØlhunder",
          established: "1945",
          players: ["1", "2", "3"],
          points: 8
        }
      ],
      isLoading: false
    };
  }

  render() {
    const { teams, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading chars</p>;
    } else {
      return (
        <div>
          <Container>
            {teams.map(d => (
              <ListGroup className="my-2" key={d.established}>
                <ListGroup.Item>Navn: {d.name} </ListGroup.Item>
                <ListGroup.Item>Etablert: {d.established} </ListGroup.Item>
                <ListGroup.Item>Poeng: {d.points} </ListGroup.Item>
              </ListGroup>
            ))}
            <br></br>
          </Container>
        </div>
      );
    }
  }
}
