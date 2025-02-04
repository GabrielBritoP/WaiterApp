import { Actions, ModalBody, OrderDetails, Overlay } from "./styles"
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
interface OrderModalProps {
  visible: boolean;
  order: Order;
  onClose: () => void;
  onCancel: () => Promise<void>;
  isLoading?: boolean;
}

export function OrderModal({ visible, order, onClose, onCancel, isLoading }: OrderModalProps) {
  if (!visible || !order) return null
  // let total = 0;
  // order.products.map(({ product, quantity }) => {
  //   total += product.price * quantity
  // })

  return (

    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="close-icon"></img>
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <span>{order.status === 'WAITING' && '⏱️'}</span>
          <span>{order.status === 'IN_PRODUCTION' && '👨‍🍳'}</span>
          <span>{order.status === 'DONE' && '✅'}</span>
          <strong>Fila de espera</strong>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          {order.products.map(({ _id, product, quantity }) => (
            <div className="item" key={_id}>
              <img src={`https://localhost:3001/uploads/${product.imagePath}`}
                // alt={product.name}
                width={48}
                height={24.43}
              ></img>
              <span className="quantity">{quantity}</span>
              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}
          <div className="total">
            <strong>Total</strong>
            <span>{formatCurrency(order.products.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0))}</span>
          </div>
        </OrderDetails>
        <Actions>
          <button type="button" className="primary">
            <span>👨‍🍳</span>
            <strong>Iniciar Produção</strong></button>
          <button type="button" className="secondary" onClick={onCancel}>Cancelar</button>
        </Actions>
      </ModalBody>
    </Overlay>

  )
}