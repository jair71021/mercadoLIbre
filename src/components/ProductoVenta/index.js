import React from 'react';
import {Container, Estado,Row, HeartIcon, Precio, Card, CarIcon,Cantidad, ButtonCard,Button, Beneficio,ShildeIcon,Color,ShopIcon } from './styles';

export const ProductoVenta = () => {
    return (
        <Container>
            <Estado>Reacondicionados | 18 vendidos</Estado>
            <Row>
                <h1>Laptop Dell Latitude 5510 Core I7 10610u 16gb 256gb Ssd W10p (Reacondicionado)</h1>
                <HeartIcon />

            </Row>
            <Precio>
                <h1>$25,499</h1>    
                <p>en <strong>12 x  2,124.92 sin interés</strong>
                </p>
                <a href='#'> Ver los medios de pago </a>
            </Precio>
            <Card>
                <CarIcon />
                <div>
                    <span className='title'>Llega gratis el lunes Full</span>
                    <a href='#'>Ver más formas de entrega</a>
                </div>
            </Card>
            <Card>
                <ShopIcon />
                <div>
                    <span className='title1'>Retíralo gratis a partir del lunes en correos y otros puntos</span>
                    <a href='#'>Ver más formas de entrega</a>
                </div>
            </Card>
            <Color>
                Color:<strong>Gris Teclado Ingles</strong>
            </Color>
            <Cantidad>
                <p>Cantidad</p>
                <strong>1 Unidad </strong>
                <input type="number" value=""/>
                <span> (5 disponible)</span>
            </Cantidad>
            <ButtonCard>
                <Button className='solid'>
                        Compra Ahora
                </Button>
                
                <Button >
                        Agrega al carrito
                </Button>
            </ButtonCard>
            <Beneficio>
                <li>
                    <ShildeIcon />
                    <p>Compra Protegida,
                    <span>recibe el producto que esperabas o te devolvemos tu dinero.</span></p>
                </li>
            </Beneficio>

        </Container>
    )
}
