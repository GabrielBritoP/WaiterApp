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
  function handleCancelOrder(orderID: string) {
    setOrders(orders.filter((order) => order._id !== orderID))
  }
  function handleOrderStatusChange(orderID: string) {
    setOrders((prevState) => prevState.map((order) => {
      if (order._id === orderID) {
        return {
          ...order,
          status: order.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'
        }
      }
      return order
    }))
  }
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="titulo" onCancelOrder={handleCancelOrder} orders={waiting} onChangeOrderStatus={handleOrderStatusChange} />
      <OrdersBoard icon="⏱️" title="titulo" onCancelOrder={handleCancelOrder} orders={inProduction} onChangeOrderStatus={handleOrderStatusChange} />
      <OrdersBoard icon="⏱️" title="titulo" onCancelOrder={handleCancelOrder} orders={done} onChangeOrderStatus={handleOrderStatusChange} />

    </Container>
  )
}