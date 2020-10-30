<template>

    <div class="flex">
        <div class="w-1/5">
            <selection-box
                    :selection="selection"
            >
            </selection-box>
        </div>


        <div class="w-4/5 mt-2">
            <classe-card
                    v-for="(classe, index) in team.classes"
                    :key="index"
                    :classe="classe"
                    @add-classe="addClasseToSelection"
            >
            </classe-card>
        </div>


    </div>

</template>

<script>
    import classData from '../data/classes.json'
    import ClasseCard from './ClasseCard.vue'
    import SelectionBox from './SelectionBox.vue'

    export default {
        name: "classe-view",
        components: {
            ClasseCard,
            SelectionBox
        },
        data() {
            return {
                team: classData,
                selection: []
            }
        },
        methods: {
            addClasseToSelection(classe){
                this.selection.push(classe)
                this.$emit('child-event', classe)
            }
        }
    }
</script>

<style scoped>

</style>
