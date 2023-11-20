<script scoped>
    export default {
        name: 'NavBar',
        components: {},
        data() {return {}},
        methods: {
            menuToggle: function() {
                var menuHolder = document.getElementById('menuHolder')
                if(menuHolder.className === "drawMenu") menuHolder.className = ""
                else menuHolder.classList.add("drawMenu")
            }
        }
  }
</script>

<template>
    <main>
        <div id="menuHolder">
        <div role="navigation" class="sticky-top border-bottom border-top" id="mainNavigation">
            <div class="flexMain">
            <div class="flex2 text-start d-none d-md-block">
                <button id="menu-btn" class="whiteLink siteLink" @click="menuToggle()"><i class="fas fa-bars me-2"></i> MENU</button>
            </div>
            <a href="#" class="flex2 text-start d-none d-md-block">
                <button class="whiteLink siteLink">
                    MEU HISTÓRICO
                </button>
            </a>

            <a href="/books" class="col-2 align-self-end">
                <button id="siteBrand" class="whiteLink siteLink">
                    SWAPTALES
                </button>
            </a>
        
            <div class="flex2 text-end d-block d-md-none">
                <button class="whiteLink siteLink"><i class="fas fa-search"></i></button>
            </div>
            <a href="/reviewUser" class="flex2 text-end d-none d-md-block">
                <button class="whiteLink siteLink">
                    DESTAQUES
                </button>
            </a>
            <a href="/profile" class="flex2 text-end d-none d-md-block">
                <button class="whiteLink siteLink">
                    PERFIL
                </button>
            </a>
            </div>
        </div>
        
        <div id="menuDrawer">
            <div class="p-4 border-bottom">
            <div class='row'>
                <div class="text-end ">
                <i class="fas fa-times " role="btn" @click="menuToggle()"></i>
                </div>
            </div>
            </div>
            <div>
            <a href="/swapsUser" class="nav-menu-item"><i class="fa fa-exchange me-3"></i>Trocas</a>
            <a href="#" class="nav-menu-item"><i class="fa-regular fa-clock me-3"></i>Empréstimos</a>
            <a href="/bestbooks" class="nav-menu-item"><i class="fa-regular fa-bookmark me-3"></i>Melhores Livros</a>
            <a href="/reviews" class="nav-menu-item"><i class="fa-regular fa-star me-3"></i>Reviews</a>
            <a href="#" class="nav-menu-item"><i class="fa-solid fa-arrow-right-from-bracket me-3"></i>Sair</a>
            
            </div>
        </div>
        </div>
    </main>
</template>

