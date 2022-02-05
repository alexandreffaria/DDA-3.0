function Header(){
    return (
        <div>
            <div class="section">
                <div class="container-5 w-container">
                    <div class="div-block-2">
                        <a href="index.html">
                            <img src="images/logo.png" height="100" srcset="images/logo-p-500.png 500w, images/logo.png 680w" sizes="100px" alt="" />
                        </a>
                    </div>
                    <div class="div-block">
                        <a href="index.html" class="w-inline-block">
                        <div class="nav-link">Home</div>
                        </a>
                        <a href="servicos.html" class="w-inline-block w--current">
                        <div class="nav-link">Serviços</div>
                        </a>
                        <a href="metodologia.html" class="w-inline-block w--current">
                        <div class="nav-link">Metodologia</div>
                        </a>
                        <a href="portfolio.html" class="w-inline-block">
                        <div class="nav-link">Portfólio</div>
                        </a>
                        <a href="contato.html" class="w-inline-block">
                        <div class="nav-link">Contato</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="banner-home">
                <div class="container-3 w-container">
                    <h1 class="heading-banner">Especialistas em Você</h1>
                </div>
            </div>    
        </div>
    )
}

export default Header;