import React from 'react'
import { InformacionVendedor } from '../InformacionVendedor'
import { ProductoVenta } from '../ProductoVenta'
import {Container, Panel, Column, Galeria, Decription,Section } from './styles'


export const Producto = () => {
    return (
        <Container>
            <Panel>
                <Column>
                    <Galeria>
                        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_810416-MLM44362806239_122020-F.webp" alt="Producto"/>
                    </Galeria>
                    <Informacion />
                </Column>
                <Column>
                    <ProductoVenta />
                    <InformacionVendedor />
                    <Garantia /> 
                </Column>
            </Panel>
        </Container>
    )
}
const Informacion = () =>{
    return(
        <Decription>
            <h5>Descripción</h5> <br/>
                <p>
                    <span>Laptop DELL Latitude 5510: Procesador Intel Core i7 10610U (hasta 4.90 GHz), Memoria de 16GB DDR4, SSD de 256GB, 
                    Pantalla de 15.6" LED, Video UHD Graphics, Unidad Óptica No Incluida, S.O. Windows 10 Pro (64 Bits) Teclado Ingles </span>    
                    <br/><br/>
                    <span> ***Reacondicionada*** <br/>
                        99% estética no tiene rayones ni golpes
                    </span>
                    <br />
            </p>
            <p>
            <span>Especificaciones</span>
                <br/> <br/>
                Modelo <br/>
                Marca DELL <br/>
                Serie Latitude <br/>
                Modelo 5510 <br/>
                Tipo Notebook <br/>
                Procesador <br/>
                Marca Intel <br/>
                Línea Core i7 <br/>
                Modelo 10610U <br/>
                Generación 10ma Generación <br/>
                Velocidad (hasta 4.90 GHz) <br/>
                Cache 8 MB <br/>
                Memoria <br/>
                Capacidad 16GB <br/>
                Tipo DDR4 <br />
                Unidad de Estado Sólido <br/>
                Capacidad 256GB <br/>
                Pantalla <br/>
                Tipo LED <br/>
                Tamaño de Pantalla 15.6" <br/>
                Resolución 1366 x 768 <br />
                Relación de Aspecto 16:9 <br />
                Gráficos <br />
                Serie UHD Graphics <br />
                Tipo Video Integrado <br />
                Audio <br />
                Sonido Audio de alta definición <br />
                Bocinas Sí <br />
                Unidad Óptica <br />
                Unidad Óptica No Incluida <br />
                Dispositivos de Entrada <br />
                Touchpad Sí <br />
                Teclado Sí <br />
                Comunicación <br />
                Red Ethernet<br />
                Red Inalámbrica 802.11ax/ac/b/g/n (Wi-Fi 6) <br />
                Sistema Operativo <br />
                Sistema Operativo Windows 10 Pro (64 Bits) <br />
                Uso del Equipo <br />
                HOGAR - <br />
                PROFESIONAL SI <br />
                MULTIMEDIA SI <br />
                DISEÑO - <br />
                GAMER - <br />
                NEGOCIOS SI <br />
            </p>
        </Decription>
    )
}

export const Garantia = () => {
    return(
        <Section>
            <h5>Garantia</h5>
                <div>
                    <span>
                        <p className='title'>Compra Protegida con Mercado Pago</p>
                        <p className='decription'>Recibe el producto que esperabas o te devolvemos tu dinero</p>
                    </span>
                    <span>
                        <p className='title'>Garantia de Vededor</p>
                        <p className='decription'>Garantía del vendedor: 3 meses</p>

                    </span>
                    <a href='#'>Conocer más sobre garantía</a>
                </div>
        </Section>
    )
}  
