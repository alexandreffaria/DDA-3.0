import { Link, Outlet } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <h1>
                Especialistas em você
            </h1>
            

           <section>
                <h2>
                    Nossa História
                </h2>
                <h4>
                    Criando e inovando ao seu lado desde 2017
                </h4>
                <p>
                    A Dia do Arauto é uma agência meio diferente. Dá uma olhada na nossa história, que você vai entender.
                </p>
                <p>
                    A gente surgiu como uma agência de publicidade para artistas em 2017, querendo ajudar pessoas criativas a 
                    terem uma divulgação mais profissional. Aí chegou a empresa de um amigo, depois outra de uma indicação, 
                    depois mais uma, todas buscando alguém que pudesse introduzir seus negócios no marketing digital, sem que 
                    cobrar "os olhos da cara" ou deixar o cliente mais perdido do que ele estava antes.
                </p>
                <p>
                    Foi aí que percebemos como aqueles profissionais eram tão apaixonados por suas mensagens quanto os compositores, 
                    bandas e escultores. E decidimos que atenderíamos artistas, empresas, profissionais autônomos e pessoas que 
                    quisessem transmitir uma mensagem positiva através de plataformas como o Instagram e o Youtube.
                </p>
                <p>
                    Desde então, trabalhamos com mais de 40 empresas, artistas e profissionais diferentes, de todos os tipos. 
                    Ampliamos nossa base de serviços para coisas que nem nós, nem os clientes, jamais imaginaríamos, vimos o 
                    nascer e o morrer de técnicas e ferramentas como os robôzinhos para o Instagram (R.I.P) e aprendemos muito 
                    sobre negócios, vendas, marca, viralização e visibilidade.
                </p>
                <p>
                    Hoje sabemos exatamente como uma estratégia sólida precisa de dedicação, planejamento e execução de qualidade. 
                    É se colocar no lugar do cliente, seja ele dono, diretor, vocalista ou estagiário, e buscar realmente aquilo 
                    que vai fazer com ele tenha uma vida melhor, e seu projeto tenha a oportunidade de encontrar um mundo de pessoas 
                    que querem e precisam dele.
                </p>
                <p>
                    Não estamos aqui para oferecer, e sim para ouvir o que você precisa.<br />
                    Vamos trocar uma ideia?
                </p>
           </section>
           <section>
                <h3>
                    Como funciona nosso trabalho
                </h3>
                <p>
                    Colocar os planos em prática é um desafio, mas isso não significa que você (ou nós) precisamos fazer isso sozinhos. 
                    Estamos aqui para "traduzir".
                </p>
                <p>
                    Traduzir a sua experiência no seu negócio em uma estratégia de comunicação.
                </p>
                <p>
                    Traduzir os resultados dessa estratégia de crescimento para que você não só saiba que as coisas vão bem, 
                    mas entenda PORQUE elas vão bem (e como chegamos lá).
                </p>
                <p>
                    Ou seja, vamos fazer uma reunião (ao vivo, de preferência) para entender o que está atrapalhando sua vida ou seu negócio. 
                    Nessa reunião vamos esboçar uma estratégia e uma proposta de serviços pra essa estratégia. Se você topar, a partir daí 
                    começa uma troca constante de informações entre a gente. Você passando a sua visão sobre os resultados "na prática" e nós
                    iremos te atualizar com informações sobre como os clientes estão interagindo e como podemos melhorar os resultados.
                    Tudo em linguagem de gente, feito para o seu nível de intimidade com termos de marketing.
                </p>
           </section>
           <section>
                <h3>
                    Uma Reunião Para A Gente Se Entender Melhor!
                </h3>
                <p>
                    Achou interessante? Ou ainda está na dúvida se serve para o seu negócio?
                </p>
                <p>
                    Não tem problema, tudo que precisamos é uma boa e velha conversa.
                </p>
                <p>
                    Assim podemos nos conhecer e sentir se trabalharemos bem juntos, se conseguimos nos entender e se estamos realmente animados 
                    com o projeto um do outro.
                </p>
                <p>
                    Somos especializados em marketing digital como um todo, mas nunca tivemos medo de atuar em quaisquer outros pilares que sua 
                    empresa ou sua carreira necessitam. Foi assim que começamos a fazer ensaios fotográficos, logos, videos de drone, impressão 3D,
                    lojas online, e mais um monte de outras coisas. Dá uma olhada no nosso <Link to="/portfolio">portfólio</Link>.
                </p>
           </section>
           <section>
                <h3>
                    E esse nome esquisito? O que quer dizer Dia do Arauto?
                </h3>
                <p>
                    Ótima pergunta, leitor hipotético! Arauto significa mensageiro, aquele que leva a informação de forma segura e correta aos que precisam
                    escutar (tipo aqueles caras que chegavam a cavalo pra ler uma mensagem "em nome do rei". Afinal, se ele deixasse a mensagem lá, 
                    ninguém sabia ler naquela época).
                </p>
                <p>
                    Por aqui não é diferente, o trabalho de desenvolver uma comunicação transparente e eficaz é o que nos move. Com todo carinho e expertize, 
                    transformamos a mensagem do cliente em nossa!
                </p>
           </section>
           <section>
                <h2>
                    Algumas maneiras que podemos te ajudar hoje!
                </h2>
                <p>
                    CANAIS<br />
                    (CRIAÇÃO/SEO/LOJA ONLINE/PRODUTOS GOOGLE/CANAIS NO YOUTUBE)
                </p>
                <p>
                    CRIAÇÃO<br />
                    (CLIPES, FOTOS, ID.VISUAL, VÍDEOS INSTITUCIONAIS E +)
                </p>
                <p>
                    MARKETING DIGITAL<br />
                    (GOOGLE, FACE/INSTA, EMAIL, YOUTUBE E ONDE + VC QUISER)
                </p>
                <Link to='/servicos'>Veja mais serviços aqui</Link>
           </section>
           <section>
                <p>
                    Vamos Conversar!
                </p>
                <Link to='/contato'><button>Entre em contato</button></Link>
           </section>
           <Outlet />
        </div>
    );
}