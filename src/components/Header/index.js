import React from 'react'
import { Container, Containe, Wrapper, Row, Shopp,Location} from './styles'

export const Header = () => {
    return (
        <Container>
            <Wrapper>
                <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.2/mercadolibre/logo__large_plus.png"  alt="logo"/>
            </Wrapper>
            <Containe>
            <Row>  
                < Location/>
                <a href='#' className=''>12800</a>          
                <a href='#' className=''>Categorias</a>
                <a href='#' className=''>Ofertas</a>
                <a href='#' className=''>Historial</a>
                <a href='#' className=''>Supermercado</a>
                <a href='#' className=''>Moda</a>
                <a href='#' className=''>Vender</a>     
                <a href='#' className=''>Ayuda</a>               
            </Row>
            <Row>
                <a href='#' className=''>Crear tu cuenta</a>
                <a href='#' className=''>Ingresa</a>
                <a href='#' className=''>Mis Comprar</a>
                <Shopp />
            </Row> 
            </Containe>
        </Container>
        
    )
}