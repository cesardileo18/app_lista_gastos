import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Boton = styled(Link)`
    background: ${(props) => props.primario ? '#5B69E2' : '#403F4D'};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'}; /* 250px */
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.75rem; /* 60px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    :hover{
        background: ${(props) => props.primario ? '#6F67D1' : '#A29FBE'};
    }
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }
    @media(max-width: 52.8rem){ /* 950px */
        margin-left: 0.25rem; /* 20px */
        font-size: 1rem; /* 20px */
        .Boton:hover{
            background: ${(props) => props.primario ? '#6F67D1' : '#A29FBE'};
        }
    }
    
`;

export default Boton;