import Separador from './Separador';
import SlideHome from './SlideHome';
import slideBelizario from '../images/slides-home/belizario.jpg'
import slideWell from '../images/slides-home/wellfiguere.jpg'
import slideSmooth from '../images/slides-home/smooth.jpg'

function Main(){
    return (
        <div className="main">
            <div class="">
                <div class="">
                    <h2 class="">Nossa História</h2>
                    <h3 class="">Criando e inovando ao seu lado desde 2017</h3>
                    <p class="">
                        A Dia do Arauto é uma agência meio diferente. Dá uma olhada na nossa história, que você vai entender.
                    </p>
                    <p class="">
                        A gente surgiu como uma agência de publicidade para artistas em 2017, querendo ajudar pessoas criativas 
                        a terem uma divulgação mais profissional. Aí chegou a empresa de um amigo, depois outra de uma indicação, 
                        depois mais uma, todas buscando alguém que pudesse introduzir seus negócios no marketing digital, 
                        sem que cobrar "os olhos da cara" ou deixar o cliente mais perdido do que ele estava antes.
                    </p>
                    <p class="">
                        Foi aí que percebemos como aqueles profissionais eram tão apaixonados por suas mensagens quanto os compositores, 
                        bandas e escultores. E decidimos que atenderíamos artistas, empresas, profissionais autônomos e pessoas que 
                        quisessem transmitir uma mensagem positiva através de plataformas como o Instagram e o Youtube.
                    </p>
                    <p class="">
                        Desde então, trabalhamos com mais de 40 empresas, artistas e profissionais diferentes, de todos os tipos. 
                        Ampliamos nossa base de serviços para coisas que nem nós, nem os clientes, jamais imaginaríamos, vimos o nascer 
                        e o morrer de técnicas e ferramentas como os robôzinhos para o Instagram (R.I.P) e aprendemos muito sobre negócios, 
                        vendas, marca, viralização e visibilidade.
                    </p>
                    <p class="">
                        Hoje sabemos exatamente como uma estratégia sólida precisa de dedicação, planejamento e execução de qualidade. 
                        É se colocar no lugar do cliente, seja ele dono, diretor, vocalista ou estagiário, e buscar realmente aquilo que 
                        vai fazer com ele tenha uma vida melhor, e seu projeto tenha a oportunidade de encontrar um mundo de pessoas que querem e precisam dele.
                    </p>
                    <p class="">
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

            <div class="servicos">
                <div class="container-22 w-container">
                    <div data-w-id="4547706b-de71-4348-6897-65f2d8ab049f" class="div-block-51">
                        <h2 class="heading-3">Como funciona nosso trabalho</h2>
                        <p class="paragraph">
                            Colocar os planos em prática é um desafio, mas isso não significa que você (ou nós) 
                            precisamos fazer isso sozinhos.Estamos aqui para "traduzir".
                            Traduzir a sua experiência no seu negócio em uma estratégia de comunicação.Traduzir 
                            os resultados dessa estratégia de crescimento para que você não só saiba que as coisas 
                            vão bem, mas entenda PORQUE elas vão bem (e como chegamos lá.)
                        </p>
                        <p class="paragraph">
                            Ou seja, vamos fazer uma reunião (ao vivo, de preferência) para entender o que está 
                            atrapalhando sua vida ou seu negócio. Nessa reunião vamos esboçar uma estratégia e 
                            uma proposta de serviços pra essa estratégia. Se você topar, a partir daí começa uma 
                            troca constante de informações entre a gente. Você passando a sua visão sobre os 
                            resultados "na prática" e nós iremos te atualizar com informações sobre como os 
                            clientes estão interagindo e como podemos melhorar os resultados. Tudo em linguagem 
                            de gente, feito para o seu nível de intimidade com termos de marketing.
                        </p>
                    </div>
                    <div class="div-block-6">
                        <div 
                        data-w-id="1c8dd848-6da8-6f25-8c2b-273cf7157f19" 
                        data-animation-type="lottie" 
                        data-src="https://uploads-ssl.webflow.com/5de1f89f5f17628f022ed8b0/5de1f89f5f176233d72ed8cc_10301-dashboard-funnel-thing.json" 
                        data-loop="1" 
                        data-direction="1" 
                        data-autoplay="1" 
                        data-is-ix2-target="0" 
                        data-renderer="svg" 
                        data-default-duration="12.012011522752763" 
                        data-duration="0" 
                        class="lottie-animation-2">
                        </div>
                    </div>
                </div>

                <div class="container-22 w-container">
                    <div class="div-block-6">
                        <div data-w-id="b23542f8-f7de-eaf5-ec63-ff5447d5b586" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/5de1f89f5f17628f022ed8b0/5de1f89f5f176215ad2ed8cd_10339-meeting.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="6.0060057613763815" data-duration="0" class="lottie-animation-2 zerar"></div>
                    </div>
                    <div data-w-id="b23542f8-f7de-eaf5-ec63-ff5447d5b57e" class="div-block-51 left-align">
                        <h2 class="heading-3">Uma Reunião Para A Gente Se Entender Melhor!</h2>
                        <p class="paragraph">Achou interessante? Ou ainda está na dúvida se serve para o seu negócio?Não tem problema, tudo que precisamos é uma boa e velha conversa. Assim podemos nos conhecer e sentir se trabalharemos bem juntos, se conseguimos nos entender e se estamos realmente animados com o projeto um do outro.</p>
                        <p class="paragraph">Somos especializados em marketing digital como um todo, mas nunca tivemos medo de atuar em quaisquer outros pilares que sua empresa ou sua carreira necessitam. Foi assim que começamos a fazer ensaios fotográficos, logos, videos de drone, impressão 3D, lojas online, e mais um monte de outras coisas. Dá uma olhada no nosso <a href="portfolio.html">portfólio</a>.</p>
                    </div>
                </div>

                <div class="container-22 w-container">
                    <div class="div-block-6">
                        <div data-w-id="d6527343-a187-6abe-fbb1-fadd3b16a7eb" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/5de1f89f5f17628f022ed8b0/5de43485747d41254c7a2d8b_4879-trumpet-music.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="2.64" data-duration="0" class="lottie-animation-2 zerar"></div>
                    </div>
                    <div data-w-id="d6527343-a187-6abe-fbb1-fadd3b16a7ec" class="div-block-51 left-align">
                        <h2 class="heading-3">E esse nome esquisito? O que quer dizer Dia do Arauto?</h2>
                        <p class="paragraph">Ótima pergunta, leitor hipotético! Arauto significa mensageiro, aquele que leva a informação de forma segura e correta aos que precisam escutar (tipo aqueles caras que chegavam a cavalo pra ler uma mensagem "em nome do rei". Afinal, se ele deixasse a mensagem lá, ninguém sabia ler naquela época). Por aqui não é diferente, o trabalho de desenvolver uma comunicação transparente e eficaz é o que nos move. Com todo carinho e expertize, transformamos a mensagem do cliente em nossa!</p>
                    </div>
                </div>
            </div>

            <div class="servicos">
                <div class="container-7 w-container">
                    <h2 class="heading-5 heading-6">‍Algumas Maneiras que Podemos Te Ajudar Hoje!</h2>
                </div>
                <div class="exemplos-servicos w-container">
                    <div class="exemplo">
                        <div data-w-id="3983bdc2-84c2-e368-5d83-1ec70b8cf0be" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/5de1f89f5f17628f022ed8b0/5de1f89f5f17624efa2ed8ce_2183-browser.json" data-loop="0" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="5.96" data-duration="0" class="lottie-animation-5"></div>
                        <h4 class="heading-4 exemplo-servico">Canais(criação/seo/loja online/produtos google/canais no youtube)</h4>
                    </div>
                    <div class="exemplo">
                        <div data-w-id="0ffb621a-caa2-1c4e-4ff5-8c501754164d" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/5de1f89f5f17628f022ed8b0/5de1f89f5f17622af62ed8d4_1879-movie-loading.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="5" data-duration="0" class="lottie-animation-4"></div>
                        <h4 class="heading-4 exemplo-servico">criação(clipes, fotos, id.visual, vídeos institucionais e +)</h4>
                    </div>
                    <div class="exemplo">
                        <div data-w-id="21a274b6-7eeb-33a0-d042-dd5a692365cf" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/5de1f89f5f17628f022ed8b0/5de1f89f5f176201e32ed8d0_6210-social-media-marketing.json" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="15" data-duration="0" class="lottie-animation-3 resize"></div>
                        <h4 class="heading-4">Marketing Digital(google, face/insta, email, youtube e onde + vc quiser)</h4>
                    </div>
                </div>
                <div class="container-12 w-container">
                    <a href="servicos.html" class="todos-servicos-link">Veja mais serviços aqui</a>
                </div>
            </div>
        </div>
    )
}


export default Main