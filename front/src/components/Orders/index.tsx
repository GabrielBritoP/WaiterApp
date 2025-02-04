import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrdersBoard } from "../OrdersBoard";
import { Container, } from "./styles";
import { useEffect, useState } from "react";


export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    api.get('/orders').then((response) => {
      setOrders(response.data)
    })
  }, [])
  const waiting = orders.filter((order) => order.status === 'WAITING')
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION')
  const done = orders.filter((order) => order.status === 'DONE')
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="titulo" orders={waiting} />
      <OrdersBoard icon="⏱️" title="titulo" orders={inProduction} />
      <OrdersBoard icon="⏱️" title="titulo" orders={done} />

    </Container>
  )
}