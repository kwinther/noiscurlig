import React, { Component } from "react";
import { Card, Table, Container, CardColumns } from "react-bootstrap";
export default class ScoreTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [
        {
          name: "Trondheim",
          points: "1"
        },
        {
          name: "Fuggel",
          points: "2"
        },
        {
          name: "Bird",
          points: "3"
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
    const { teams, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading chars</p>;
    } else {
      return (
        <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Something</th>
                    <th>Something</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map(d => (
                    <tr>
                      <td>{d.points}</td>
                      <td>{d.name}</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
        </div>
      );
    }
  }
}
