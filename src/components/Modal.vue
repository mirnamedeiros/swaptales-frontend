<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        
        
  <!-- conteúdo do modal aqui -->
        
  <button @click="closeModal" class="close-button">X</button>

  <slot></slot>
      </div>
    
    
  </div>
  
  </template>
  
  <script>
  
  import { ref } from 'vue';
  
  export default {
    props: {
      showModal: Boolean,
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  background: #fff;
  padding: 10px; 
  border-radius: 8px;
  max-width: 400px; 
  width: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #0056b3;
}
</style>