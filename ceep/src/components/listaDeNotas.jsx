import React, { Component } from "react";
import CardNotas from "./cardNotas";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li><CardNotas /></li>
        <li><CardNotas /></li>
        <li><CardNotas /></li>
      </ul>
    );
  }
}

export default ListaDeNotas;