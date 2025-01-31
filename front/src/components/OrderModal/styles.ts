import styled from 'styled-components';

export const Overlay = styled.div`
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.8);
    background-filter: blur(4.5px);
    position: fixed;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: #f0f0f5;
    width: 480px;
    border-radius: 8px;
    padding: 32px;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
        strong {
            font-size: 24px;
        }
        button {
            background: transparent;
            border: none;
            line-height: 0;
        }
    }
    .status-container {
        margin-top: 32px;
        small {
            color: #a0a0b2;
            font-size: 14px;
            opacity: 0.8;
        }
        div {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;

export const OrderDetails = styled.div`
    margin-top: 32px;
    > strong {
        font-size: 14px;
        font-weight: 500;
        opacity: 0.8;
    }
    .order-items {
        margin-top: 16px;
        & + .item {
            display: flex;
            img {
                border-radius: 6px;
            }
            .quantity {
                font-size: 14px;
                color: #666;
                display: block;
                min-width: 20px;
                margin-left: 12px;
            }
            .product-details {
                margin-left: 4px;
                strong {
                    display: block;
                    margin-bottom: 4px;
                }
                .span {
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }
    .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;

        span {
            font-weight: 500;
            font-size: 14px;
            opacity: 0.8;
        }
    }
`;

export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    .primary {
        background: #333333;
        border-radius: 48px;
        border: 0;
        color: #fff;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
    }
    .secondary {
        padding: 14px 24px;
        color: #d73035;
        font-weight: bold;
        border: 0;
        background: transparent;
        margin-top: 12px;
    }
`;
