import styled from 'styled-components';
export const Board = styled.div`
    padding: 16px;
    border: 1px solid rgb(204, 204, 204, 0.4);
    display: flex;
    border-radius: 16px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    > header {
        padding: 8px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
    button {
        background: #fff;
        border: 1px solid rgb(204, 204, 204, 0.4);
        height: 128px;
        border-radius: 8px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 4px;
        strong {
            font-weight: 500;
        }

        & + button {
            margin-top: 24px;
        }
    }
`;
