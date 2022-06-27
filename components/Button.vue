<template>
  <div>
    <button>
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
const name = 'Button'

export default {
  name,
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="sass" scoped>

button
  position: relative
  display: inline-block
  background: #097783
  color: #ccc
  width: 200px
  height: 60px
  border: 0
  font-size: 18px
  border-radius: 4px
  font-family: 'Raleway', sans-serif
  transition: .6s
  overflow: hidden
  &:focus
    outline: 0
  
  &:before
    content: ''
    display: block
    position: absolute
    background: rgba(255,255,255,0.5)
    width: 60px
    height: 100%
    left: 0
    top: 0
    opacity: .5
    filter: blur(30px)
    transform: translateX(-100px)  skewX(-15deg)
  
  &:after
    content: ''
    display: block
    position: absolute
    background: rgba(255,255,255,0.2)
    width: 30px
    height: 100%
    left: 30px
    top: 0
    opacity: 0
    filter: blur(5px)
    transform: translateX(-100px) skewX(-15deg)
  
  &:hover
    background: #023e53
    cursor: pointer
    &:before
      transform: translateX(300px)  skewX(-15deg)  
      opacity: 0.6
      transition: .7s
    
    &:after
      transform: translateX(300px) skewX(-15deg)  
      opacity: 1
      transition: .7s

</style>
