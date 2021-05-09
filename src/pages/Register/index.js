import React from 'react';

import {
  Card,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container, LinkRegister } from './styles';

import '../../global.css';

function Register() {
  return (
    <Container>
      <Card style={{ width: '30rem', borderRadius: 8 }}>
        <Card.Body style={{ width: '100%' }}>
          <Card.Title className="title">Cadastro</Card.Title>
          <FormControl
            className="form-control"
            placeholder="Nome"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-lg"
            type="email"
          />
          <FormControl
            className="form-control"
            placeholder="CPF"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-lg"
            type="password"
          />
          <FormControl
            className="form-control"
            placeholder="E-mail"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-lg"
            type="email"
          />
          <FormControl
            className="form-control"
            placeholder="Senha"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-lg"
            type="password"
          />
        </Card.Body>
        <Button variant="dark" className="btn-acessar">Cadastrar</Button>
        <LinkRegister to="/">Já possuo Cadastro</LinkRegister>
      </Card>
    </Container>
  );
};

export default Register;