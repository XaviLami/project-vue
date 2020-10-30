<template>
  <div>
  <nav-bar
          @change-component="changeSelectedComponent"
  >
  </nav-bar>

  <keep-alive include="player-view">
    <component
            :is="selectedComponent"
            v-bind="currentProps"
            @child-event="selectionUpdate"
    >
    </component>
  </keep-alive>
  </div>
</template>

<script>

  import ClasseView from './components/ClasseView.vue'
  import SelectionList from './components/SelectionList.vue'
  import NavBar from './components/navigation/NavBar.vue'

  export default {
    name: 'App',
    components: {
      ClasseView,
      SelectionList,
      NavBar
    },
    data() {
      return {
        selectedComponent: 'classe-view',
        classeSelection: []
      }
    },
    computed: {
      currentProps() {
        if(this.selectedComponent == "selection-list"){
          return { selection: this.classeSelection }
        }
        return false
      },
    },
    methods: {
      changeSelectedComponent(value) {
        this.selectedComponent = value
      },
      selectionUpdate(value) {
        this.classeSelection.push(value)
      }
    }
  }
</script>

<style>

</style>
