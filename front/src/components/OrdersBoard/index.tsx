import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
interface OrdersBoardProps {
  icon: string;
  title: string;
  orders?: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order>({} as Order)
  function handleOpenModal(order: Order) {
    setIsModalVisible(true)
    setSelectedOrder(order)
    return console.log('open modal', order)
  }
  function handlerCloseModal() {
    setIsModalVisible(false)
    setSelectedOrder({} as Order)
  }
  return (
    <>
      <Board>
        <OrderModal visible={isModalVisible} order={selectedOrder} onClose={() => handlerCloseModal()} />
        <header>
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>{orders?.length}</span>
        </header>
        <OrdersContainer>
          {orders?.length && orders.map((order) => {
            return (
              // <Order></Order>
              <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} Itens</span>

              </button>
            )
          })}

        </OrdersContainer>
      </Board>
    </>

  )
}