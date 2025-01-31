import { OrdersBoard } from "../OrdersBoard";
import { Container, } from "./styles";


export function Orders() {
  const MockOrders = [
    {
      _id: '1',
      table: 'table',
      status: 'WAITING',
      products: [
        {
          _id: '1',
          quantity: 2,
          product: {
            name: 'Coffee',
            imagePath: '',
            price: 3.90,
          },
          name: 'Order',
          price: 3.90,
          flavor: '',
          complement: 'complement',
          qtd: 1,
        }
      ]
    }
  ];
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="titulo" orders={MockOrders} />
      <OrdersBoard icon="⏱️" title="titulo" />
      <OrdersBoard icon="⏱️" title="titulo" />

    </Container>
  )
}