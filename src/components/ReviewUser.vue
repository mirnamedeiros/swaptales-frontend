<script>
    export default {
        data() {
                return {
                    users : [],
                }
            },
            mounted() {
                this.getUsers()
            },

        methods: {
                getUsers(){
                
                fetch(`http://localhost:8080/swaptales/api/users`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Erro ao recuperar usuarios: ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        if(data){
                            this.users = data
                        }else{
                            console.log("Usuarios não encontrado");
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao fazer a solicitação para a api de usuarios:', error);
                    });
               },

        },
    }
</script>


<template>
    <div class="container">
        <div v-for="user in users" :key="user.id" class="row">
            <div  class="col-lg-12">
                <div class="card">
                    <div class="row">
                        <div class="col-sm-12 col-lg-6">
                            <div  class="card-body">
                                <h5>{{ user.name }}</h5>
                                <h6 class="text-muted">{{ user.countFollowers }} seguidores</h6>
                                <div id="buttons" class="d-flex justify-content-start" style="margin-top: 2rem;">
                                    <a class="btn btn-sm btn-primary" style="margin-right: 1rem;">Fazer comentário</a>
                                    <a class="btn btn-sm btn-primary"  style="margin-right: 1rem;">Todas as Avaliações</a>
                                    <a class="btn btn-sm btn-primary"  style="margin-right: 1rem;">Seguir</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-6 border-left d-flex align-items-center">
                            <div class="card-body">
                                <ul class="list-style-none d-flex justify-content-around">
                                    <li class="d-flex flex-column align-items-center text-success">
                                        <a href="">
                                            <div class="d-flex align-items-center mb-2 w-100 justify-content-around">
                                                <i class="fa-regular fa-face-smile fa-xl"></i>
                                                <span mb-0>47%</span>
                                            </div>
                                            <div class="ml-2">
                                                <span>(9 comentários)</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="d-flex flex-column align-items-center text-info">
                                        <a href="">
                                            <div class="d-flex align-items-center mb-2 w-100 justify-content-around">
                                                <i class="fa-regular fa-face-meh fa-xl"></i>
                                                <span>20%</span>
                                            </div>
                                            <div class="ml-2">
                                                <a href="">
                                                    <span>(4 comentários)</span>
                                                </a>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="d-flex flex-column align-items-center text-danger">
                                        <a href="">
                                            <div class="d-flex align-items-center mb-2 w-100 justify-content-around">
                                                <i class="fa-regular fa-face-frown fa-xl"></i>
                                                <span>33%</span>
                                            </div>
                                            <div class="ml-2">
                                                <span>(7 comentários)</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        border: 4px solid #000;
        box-shadow: 8px 8px 0 #a1aab9;
        display: flex;
        flex-direction: column;
        margin: 10px;
        border-radius: 0;

        a {
            text-decoration: none;
        }
    }

    .card-body {
        padding: 2rem;
    }
    .text-muted {
        color: #8898aa!important;
    }
    .card .card-subtitle {
        font-weight: 300;
        margin-bottom: 10px;
        color: #8898aa;
    }
    ul {
        padding-right:0;
        padding-left:0;
        &.list-style-none li {
            list-style: none;
            
            a {
                text-decoration: none;
                color: inherit;
                padding-right: 1.5em;

                span {
                    font-size: 16px;
                }
            }
        }

        h5 {
            margin-bottom: 0;
        }
        
    }

    @media (max-width: 1200px) {
        ul {
            flex-direction: column;
            a {
                margin-top: 1rem;
            }
        }
    }

    @media (max-width: 533px) {
        #buttons {
            flex-direction: column;
            a {
                margin-top: 1rem;
            }
        }
        .card-body{
            ul {
                li {
                    margin-bottom: 1rem;
                }
            }
        }  
    }

</style>