import styled from 'styled-components';

export const Container = styled.header`
    background-color: #d73035;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .page-details {
        h1 {
            font-size: 32px;
            color: #fff;
        }
        h2 {
            font-size: 16px;
            color: #fff;
            font-weight: 400;
            opacity: 0.8;
        }
    }
`;
