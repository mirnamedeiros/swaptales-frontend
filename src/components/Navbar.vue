<template>
    <main>
        <!--Bootstrap Navbar-->
        <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex px-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">SwapTales</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Minhas Trocas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Meus Empréstimos</a>
                        </li>
                    </ul>
                    <a href="/profile" class="icon-user d-flex"><i class="fa-regular fa-user fa-lg"></i></a>
                    <button type="button" class="btn btn-primary">Login</button>
                </div>
            </div>
        </nav>
    </main>
</template>