import React from 'react';

import {
  Card,
  Button,
  Table
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, User, Name } from './styles';

function Home() {
  return (
    <Container>
      <Card
        style={{
          width: '95%',
          height: '10%',
          borderRadius: 8,
          marginBottom: 5,
        }}>
        <Card.Body
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Card.Title className="title">Dashboard</Card.Title>
          <User>
            <Name>Fernando Simões</Name>
            <Button className="btn-table" variant="dark">Sair</Button>
          </User>
        </Card.Body>
      </Card>
      <Card style={{ width: '95%', height: '85%', borderRadius: 8 }}>
        <Card.Body style={{ width: '100%' }}>
          <Table bordered hover size="lg">
            <thead>
              <tr>
                <th>Vencimento</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>28/06/2021</td>
                <td>Parcela do Carro</td>
                <td>R$ 643,18</td>
                <td className="tabela-btn">
                  <Button className="btn-table" variant="primary">Editar</Button>
                  <Button className="btn-table" variant="danger">Excluir</Button>
                  <Button className="btn-table" variant="success">Pagar</Button>
                </td>
              </tr>
              <tr>
                <td>28/07/2021</td>
                <td>Cartão de Credito</td>
                <td>R$ 1.590,00</td>
                <td className="tabela-btn">
                  <Button className="btn-table" variant="primary">Editar</Button>
                  <Button className="btn-table"variant="danger">Excluir</Button>
                  <Button className="btn-table" variant="success">Pagar</Button>
                </td>
              </tr>
              <tr>
                <td>28/07/2021</td>
                <td>Cartão de Credito</td>
                <td>R$ 1.590,00</td>
                <td className="tabela-btn">
                  <Button className="btn-table" variant="primary">Editar</Button>
                  <Button className="btn-table"variant="danger">Excluir</Button>
                  <Button className="btn-table" variant="success">Pagar</Button>
                </td>
              </tr>
              <tr>
                <td>28/07/2021</td>
                <td>Cartão de Credito</td>
                <td>R$ 1.590,00</td>
                <td className="tabela-btn">
                  <Button className="btn-table" variant="primary">Editar</Button>
                  <Button className="btn-table"variant="danger">Excluir</Button>
                  <Button className="btn-table" variant="success">Pagar</Button>
                </td>
              </tr>
              <tr>
                <td>28/07/2021</td>
                <td>Cartão de Credito</td>
                <td>R$ 1.590,00</td>
                <td className="tabela-btn">
                  <Button className="btn-table" variant="primary">Editar</Button>
                  <Button className="btn-table"variant="danger">Excluir</Button>
                  <Button className="btn-table" variant="success">Pagar</Button>
                </td>
              </tr>
              <tr>
                <td>28/07/2021</td>
                <td>Cartão de Credito</td>
                <td>R$ 1.590,00</td>
                <td className="tabela-btn">
                  <Button className="btn-table" variant="primary">Editar</Button>
                  <Button className="btn-table"variant="danger">Excluir</Button>
                  <Button className="btn-table" variant="success">Pagar</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;