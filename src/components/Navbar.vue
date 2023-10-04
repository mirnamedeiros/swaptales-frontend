<script>
    // export default {
    //     methods: {
    //         menuToggle() {
    //             var menuHolder = document.getElementById('menuHolder')
    //             menuHolder.classList.toggle('drawMenu')
    //         //     if(menuHolder.className === "drawMenu") menuHolder.className = ""
    //         // else menuHolder.classList.add()
    //         },
    //     }
    // }
    export default {
    methods: {
      menuToggle: function() {
        var menuHolder = document.getElementById('menuHolder')
        if(menuHolder.className === "drawMenu") menuHolder.className = ""
        else menuHolder.classList.add()
      }
    }
  }
</script>

<template>
    <main>
        <div id="menuHolder" class="drawMenu">
        <div role="navigation" class="sticky-top border-bottom border-top" id="mainNavigation">
            <div class="flexMain">
            <div class="flex2 text-start d-none d-md-block">
                <button id="menu-btn" class="whiteLink siteLink" style="border-right:1px solid #eaeaea" onclick="menuToggle()"><i class="fas fa-bars me-2"></i> MENU</button>
                <button class="whiteLink siteLink">
                    <a href="/profile" class="col-2 align-self-end">PERFIL</a>
                </button>
            </div>
            <button id="siteBrand" class="whiteLink siteLink">
                    <a href="/" class="col-2 align-self-end">SWAPTALES</a>
                </button>
        
            <div class="flex2 text-end d-block d-md-none">
                <button class="whiteLink siteLink"><i class="fas fa-search"></i></button>
            </div>
        
            <div class="flex2 text-end d-none d-md-block">
                <button class="whiteLink siteLink">REGISTRAR</button>
                <button class="whiteLink siteLink">
                    <a href="/login" class="col-2 align-self-end">LOGIN</a>
                </button>
            </div>
            </div>
        </div>
        
        <div id="menuDrawer">
            <div class="p-4 border-bottom">
            <div class='row'>
                <div class="text-end ">
                <i class="fas fa-times " role="btn" onclick="menuToggle()"></i>
                </div>
            </div>
            </div>
            <div>
            <a href="#" class="nav-menu-item"><i class="fa fa-exchange me-3"></i>Trocas</a>
            <a href="#" class="nav-menu-item"><i class="fa-regular fa-clock me-3"></i>Empréstimos</a>
            <a href="#" class="nav-menu-item"><i class="fa-regular fa-bookmark me-3"></i>Melhores Livros</a>
            <a href="#" class="nav-menu-item"><i class="fa-regular fa-star me-3"></i>Reviews</a>
            <a href="#" class="nav-menu-item"><i class="fa-solid fa-arrow-right-from-bracket me-3"></i>Sair</a>
            
            </div>
        </div>
        </div>
    </main>
</template>

