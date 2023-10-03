<template>
    <main>
        <div id="menuHolder">
        <div role="navigation" class="sticky-top border-bottom border-top" id="mainNavigation">
            <div class="flexMain">
            <div class="flex2 text-start d-none d-md-block">
                <button class="whiteLink siteLink" style="border-right:1px solid #eaeaea" onclick="menuToggle()"><i class="fas fa-bars me-2"></i> MENU</button>
                <button class="whiteLink siteLink">
                    <a href="/profile" class="col-2 align-self-end" style="text-decoration: none; color: black;">PERFIL</a>
                </button>
            </div>
            <div class="flex3 text-center" id="siteBrand">
                SWAPTALES
            </div>
        
            <div class="flex2 text-end d-block d-md-none">
                <button class="whiteLink siteLink"><i class="fas fa-search"></i></button>
            </div>
        
            <div class="flex2 text-end d-none d-md-block">
                <button class="whiteLink siteLink">REGISTRAR</button>
                <button class="whiteLink siteLink">LOGIN</button>
            </div>
            </div>
        </div>
        
        <div id="menuDrawer">
            <div class="p-4 border-bottom">
            <div class='row'>
                <div class="col text-end ">
                <i class="fas fa-times" role="btn" onclick="menuToggle()"></i>
                </div>
            </div>
            </div>
            <div>
            <a href="#" class="nav-menu-item"><i class="fas fa-home me-3"></i>Trocas</a>
            <a href="#" class="nav-menu-item"><i class="fab fa-product-hunt me-3"></i>Empréstimos</a>
            <a href="#" class="nav-menu-item"><i class="fas fa-search me-3"></i>Melhores Livros</a>
            <a href="#" class="nav-menu-item"><i class="fas fa-wrench me-3"></i>Reviews</a>
            </div>
        </div>
        </div>
    </main>
</template>

<script>
    var menuHolder = document.getElementById('menuHolder')
    function menuToggle() {
      if(menuHolder.className === "drawMenu") menuHolder.className = ""
      else menuHolder.className = "drawMenu"
    }
</script>