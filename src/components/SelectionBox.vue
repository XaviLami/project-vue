<template>
    <div class="border border-black text-center m-4 p-4">
        Selection : {{ selection.length }}
        <span v-if="numberSelection">matière</span>
        <span v-else>matières</span>

        <ul>
            <li v-for="matiere in selection" :key="matiere.name">{{ matiere.name }}</li>
        </ul>

    </div>

</template>

<script>
    export default {
        name: "selection-box",
        props: ['selection'],
        computed: {
            numberSelection(){
                if(this.selection.length < 2){
                    return true
                }
                return false
            }
        }

    }
</script>

<style>

</style>
