import styled from 'styled-components';

export const Spinner = styled.div`
  & {
    display: inline-block;
    width: 40px;
    height: 40px;
  }
  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
