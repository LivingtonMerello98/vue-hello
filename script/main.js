'use strict'

console.log('sono connesso')

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      image: './img/vue_img.jpg'
    }
  }
}).mount('#app')
