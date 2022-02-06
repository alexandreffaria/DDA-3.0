import Separador from './Separador';
import SlideHome from './SlideHome';
import slideBelizario from '../images/slides-home/belizario.jpg'
import slideWell from '../images/slides-home/wellfiguere.jpg'
import slideSmooth from '../images/slides-home/smooth.jpg'

function Main(){
    return (
        <div className="main">
            <div class="sobre-home">
                <div class="container-4 mini-pop w-container">
                    <h2 class="cabecalho">Nossa História</h2>
                    <h3 class="cabecalho subtitulo">Criando e inovando ao seu lado desde 2017</h3>
                    <p class="paragraph">
                        A Dia do Arauto é uma agência meio diferente. Dá uma olhada na nossa história, que você vai entender.
                    </p>
                    <p class="paragraph">
                        A gente surgiu como uma agência de publicidade para artistas em 2017, querendo ajudar pessoas criativas 
                        a terem uma divulgação mais profissional. Aí chegou a empresa de um amigo, depois outra de uma indicação, 
                        depois mais uma, todas buscando alguém que pudesse introduzir seus negócios no marketing digital, 
                        sem que cobrar "os olhos da cara" ou deixar o cliente mais perdido do que ele estava antes.
                    </p>
                    <p class="paragraph">
                        Foi aí que percebemos como aqueles profissionais eram tão apaixonados por suas mensagens quanto os compositores, 
                        bandas e escultores. E decidimos que atenderíamos artistas, empresas, profissionais autônomos e pessoas que 
                        quisessem transmitir uma mensagem positiva através de plataformas como o Instagram e o Youtube.
                    </p>
                    <p class="paragraph">
                        Desde então, trabalhamos com mais de 40 empresas, artistas e profissionais diferentes, de todos os tipos. 
                        Ampliamos nossa base de serviços para coisas que nem nós, nem os clientes, jamais imaginaríamos, vimos o nascer 
                        e o morrer de técnicas e ferramentas como os robôzinhos para o Instagram (R.I.P) e aprendemos muito sobre negócios, 
                        vendas, marca, viralização e visibilidade.
                    </p>
                    <p class="paragraph">
                        Hoje sabemos exatamente como uma estratégia sólida precisa de dedicação, planejamento e execução de qualidade. 
                        É se colocar no lugar do cliente, seja ele dono, diretor, vocalista ou estagiário, e buscar realmente aquilo que 
                        vai fazer com ele tenha uma vida melhor, e seu projeto tenha a oportunidade de encontrar um mundo de pessoas que querem e precisam dele.
                    </p>
                    <p class="paragraph">
                        Não estamos aqui para oferecer, e sim para ouvir o que você precisa. Vamos trocar uma ideia?
                    </p>
                </div>
            </div>

            <Separador />

            <SlideHome 
                img={slideBelizario}
                texto="Dr. Belizário"
            />
            <SlideHome 
                img={slideWell}
                texto="Well Figuerê"
            />
            <SlideHome 
                img={slideSmooth}
                texto="Smooth"
            />

            <Separador />

            

        </div>
    )
}


export default Main