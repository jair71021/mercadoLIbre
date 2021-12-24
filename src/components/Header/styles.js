import styled from 'styled-components'
import {AiOutlineShoppingCart} from "react-icons/ai";
import{HiOutlineLocationMarker}from "react-icons/hi"

export const Container =styled.header`
    width: 100vw;
    background-color: var(--yellow);
    height: 110px;
`

export const Wrapper=styled.nav`
    max-width: 1200px;
    padding: 10px 10px;
    margin: 0 auto;
    heigth: 92px;
    img{
        width: 155px;
        heigth: 40px;
    }
`
export const Containe =styled.nav`
padding-top: 15px;
display: flex;
justify-content: start;

`
export const Location = styled(HiOutlineLocationMarker)`
    width: 20px;
    height: 20px;
    color : var( --text1);
`
export const Row =styled.nav`
    margin-left: 300px;
    >a{
        font-size:16px;
        text-decoration:none;
        color:var(--text1);
        padding: 2.5px 0;
        transition: all 300ms ease-in-out;

        & + a{
            padding-left: 6px;
            margin-left:  6px;
            
        }
`
export const Shopp = styled(AiOutlineShoppingCart)`
    width: 20px;
    height: 20px;
    color : var( --text1);
`