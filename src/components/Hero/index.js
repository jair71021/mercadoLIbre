import React from 'react'
import { Container, Row } from './styles'

export const Hero = () => {
    return (
        <Container>
            <Row>
                <a href='#' className='volver'>Volver al listado</a>
                <a href='#' className=''>Computacion</a>
                <a href='#' className=''>Laptop y Accesorios</a>
                <a href='#' className=''>Laptop</a>
                <a href='#' className=''>Dell</a>
                <a href='#' className=''>Inspiron</a>
                <a href='#' className=''>15.6"</a>               
            </Row>
            <Row>
                <a href='#' className=''>Compartir</a>
                <a href='#' className=''>Vender una igual</a>
            </Row>
        </Container>
    )
}
