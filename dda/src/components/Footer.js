function Footer(){
    return (
        <footer>
            <div class="container-10 w-container">
                <div class="div-block-10">
                    <a href="index.html" class="w-inline-block w--current">
                        <div class="nav-link">Home</div>
                    </a>
                    <a href="servicos.html" class="w-inline-block ">
                        <div class="nav-link">Serviços</div>
                    </a>
                    <a href="metodologia.html" class="w-inline-block ">
                        <div class="nav-link">Metodologia</div>
                    </a>
                    <a href="portfolio.html" class="w-inline-block">
                        <div class="nav-link">Portfólio</div>
                    </a>
                    <a href="contato.html" class="w-inline-block">
                        <div class="nav-link">Contato</div>
                    </a>
                </div>
                <div class="div-block-11">
                    <img src="images/logo.png" height="100" srcset="images/logo-p-500.png 500w, images/logo.png 680w" sizes="100px" alt="" class="image-5"/>
                    <div class="w-row">
                        <div class="w-col w-col-4">
                            <a href="https://www.instagram.com/diadoarauto/" target="_blank" class="link-block-6 w-inline-block">
                                <img src="images/instagram-brands.svg" alt="" class="invert" />
                                <div>DDA</div>
                            </a>
                        </div>
                        <div class="w-col w-col-4">
                            <a href="https://www.linkedin.com/in/alexandreffaria1/" target="_blank" class="link-block-6 w-inline-block">
                                <img src="images/linkedin-in-brands.svg" alt="" class="invert" />
                                <div>AFF</div>
                            </a>
                        </div>
                        <div class="w-col w-col-4">
                            <a href="https://www.linkedin.com/in/cadu-andrade-8b555116b/" target="_blank" class="link-block-6 w-inline-block">
                                <img src="images/linkedin-in-brands.svg" alt="" class="invert" />
                                <div>CEA</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-11 w-container">
                <div class="text-block-2">Dia do Arauto - Av. Brasil 84, Sala 1409 - Todos os direitos reservados 2020 ©</div>
            </div>    
        </footer>
    )
}

export default Footer;