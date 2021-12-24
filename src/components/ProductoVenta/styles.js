import styled , {css} from "styled-components";
import { HiOutlineHeart ,HiOutlineShieldCheck}from 'react-icons/hi'
import { AiFillCar,AiOutlineShop} from "react-icons/ai";


const iconsCss =css`
    width: 25px;
    height: 25px;
`

export const Container = styled.div`

    display : flex;
    flex-direction: column;
    padding: 32px 16px;
    margin: 16px;
    border: 1px solid var(--border);
    border-radius: 5px;

`
export const  Estado = styled.div`
    font-size: 14px;
    margin-bottom: 10px;
    color: var (--text2);

`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    >h1{
        widht: 100%;
        font-size: 22px;
        line-height: 25.9px;
        color: var(--text1);
        font-weight: 500;
    }
`
export const  HeartIcon = styled(HiOutlineHeart)`
    width: 30px;
    height: 30px;
    color: var(--blue1);
    cursor: pointer;
    margin-left: 16px;
    
`
export const  Precio = styled.div`
    font-size: 36 px;
    line-height: 36px;
    padding: 24px 0;
    font-weight: inherit;
    color: var(--text1); 
    >p{
        strong{
            color: var(--green)
        }
    }
    
    >a{
        margin-top: 2px;
        font-size: 14px;
        color: var(--blue2);
        text-decoration: none;
    }
`
export const  Card = styled.div`
    display: flex;
    margin-bottom: 2rem;
    >div{
        margin-left: 8px;
        display: flex;
        flex-direction:column;
        .title{
            font-size: 16px;
            margin-top: 5px;
            color: var(--green);
        }
        .title1{
            font-size: 16px;
            margin-top: 5px;
            color: var(--green);
        }
        a{
            margin-top: 5px;
            font-size: 14px;
            color: var(--blue2);
            text-decoration: none;
        }
    }
`
export const  CarIcon= styled(AiFillCar)`
    width: 24px;
    height: 24px;
    color: var(--green);
    ${iconsCss};

`
export const  ShopIcon = styled(AiOutlineShop)`
    width: 24px;
    height: 24px;
    color: var(--green);
    ${iconsCss};
`

export const Cantidad = styled.div`
        
    margin-top:3rem;
    display: flex;
    justify-content: start;
    align-items:center;
    color: var(--text1);
    font-size: 16px;
    >span{
        color: var(--text1);
        margin: 0 .5rem;
    }
    >strong{
        margin: 0 .5rem;
    }
    >input{
        width: 20px;
        color: var(--blue1);
        border-left: 1px solid var(--blue1);
        border-right: 1px solid var(--blue1);
        outline: 0;
    }
`

export const Color = styled.div`
    font-size: 16px;
    color: var(--text1);
    padding-top:1rem;
    `
export const  ButtonCard = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
`
export const Button = styled.div`
    margin-top: 16px;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 15px;
    border-radius:4 px;
    padding: 12px 18px;
    outline:0;
    cursor: pointer;
    background-color:#4189e626;
    color: var(--blue1);
    transtion: all 300ms ease-in-out;
    &.solid{
        background-color: var(--blue3);
        color: var(--white) ;
    }
    &.solid:hover{
        background-color: var(--blue2);
    }

`
export const  Beneficio = styled.div`
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-direction: column;
    >li{
        display: flex;
        margin-top: 1rem;
        p{
            margin-left: 10px;
            font-size:14 px;
            color: var(--blue1);
        }
        span{
            color: var(--text2);
        }
    }
`
export const ShildeIcon = styled(HiOutlineShieldCheck)`
    width: 28px;
    height: 20px;
    opacity: .45;
    margin-top: -.1rem;
`