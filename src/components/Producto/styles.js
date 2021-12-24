import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:29px;
  //  border: 1px solid red;
`
export const Panel = styled.div`
    background-color: var(--white);
    box-shadow: var(--panel);
    display: grid;
    grid-template-columns: 67fr 33fr;

`
export const Column = styled.div`

`
export const Galeria= styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    height: 530px;
    >img{
        width: 755px;
        heigth: 75%;
    }

`
export const Decription = styled.div`
    border-top: 1px solid  var(--border);;
    width: 85%;
    margin: 0 auto;
    padding: 40px 0;
    >h5{
        color: var(--text1);
        font-size: 28px;
        margin-bottom:22px;
        line-height:30px;   
    }
    >p, span{
        color: var(--text3);
        font-size: 20px;
        margin-bottom:22px;
        line-height:32px;   
    }
    
    `
export const Section = styled.div`
    padding: 32px 16px;
    margin: 0 16px;
    border: 1px solid var(--border);
    border-bottom: none;
    >h5{
        font-size: 18px;
        margin-bottom: 29px;
        color: var(--text1);
        line-heigth: 22.5px;
    }
    >div{
        display: flex;
        flex-direction: column;
        line-heigth: 19px;

    >span + span{
        margin-bottom: 26px;

        
    }
    .title{
        font-size: 17px;
        color: var(--text1);
        line-heigth: 21.6px;
        margin-bottom: 12px;
    }
    
    .decription{
        font-size: 14px;
        color: var(--text2);
        margin-bottom:12px;
    }
    >a{
        font-size: 14px;
        color: var(--blue3);
        text-decoration:none;
    }
    }


    
    `