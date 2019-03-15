import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }
  }

  render() {
    return (
      <div className="contenedor">
            <Header titulo = "Cotizador de seguro"/>
            <div className = "contenedor-formulario">
              <Formulario/>
            </div>
      </div>
    );
  }
}
export default App