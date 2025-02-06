import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
import { api } from "../../utils/api";
import { toast } from 'react-toastify'
interface OrdersBoardProps {
  icon: string;
  title: string;
  orders?: Order[];
  onCancelOrder: (orderID: string) => void;
  onChangeOrderStatus: (orderID: string) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<Order>({} as Order)
  const [isLoading, setIsLoading] = useState(false)
  function handleOpenModal(order: Order) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }
  function handlerCloseModal() {
    setIsModalVisible(false)
    setSelectedOrder({} as Order)
  }

  async function handleCancelOrder() {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await api.delete(`/orders/${selectedOrder?._id}`)
    setIsLoading(false)
    setIsModalVisible(false)
    toast.success('Pedido cancelado com sucesso')
    onCancelOrder(selectedOrder._id)
  }
  function handlerChangeOrderStatus() {
    const newStatus = selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE'

    api.patch(`/orders/${selectedOrder._id}`, { status: newStatus })
    toast.success('Status do pedido alterado com sucesso')
    onChangeOrderStatus(selectedOrder._id)
    setIsModalVisible(false)
    setIsLoading(false)
  }
  return (
    <>
      <Board>
        <OrderModal onChangeOrderStatus={handlerChangeOrderStatus} visible={isModalVisible} order={selectedOrder} onCancel={() => handleCancelOrder()} onClose={() => handlerCloseModal()} />
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