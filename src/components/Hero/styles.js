import styled from "styled-components"

export const Container = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
`
export const Row = styled.div`
    >a{
        font-size:16px;
        text-decoration:none;
        color:var(--blue3);
        padding: 2.5px 0;
        transition: all 300ms ease-in-out;

        & + a{
            padding-left: 9px;
            margin-left:  9px;
            border-left:1px solid var(--border);
        }

    }
    
    a:hover{
        color: var(--blue2);
    }
`