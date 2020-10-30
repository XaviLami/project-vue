<template>
    <div
            class="border m-2 p-2 flex justify-between"
            :class="healthStyle"
    >
        <div>
            <h1 class="text-lg font-bold">{{ classesName }}</h1>
            <p> {{ classesPrix }} </p>
        </div>
        <base-button
                text="Sélectionner"
                @click="addToSelection"
        >
        </base-button>
    </div>
</template>

<script>
    export default {
        name: "classe-card",
        props: ['classe'],
        computed: {
            classesName(){
                return this.classe.name;
            },
            classesPrix(){
                // toUpperCase ne s'applique que a des string, ici c'est un number
                return this.classe.prix
            },
            isInjured() {
                if(this.classe.health == "absent"){
                    return true
                }
                return false
            },
            healthStyle() {
                return {
                    'bg-gray-600': this.isInjured,
                    'border-white': this.isInjured,
                    'border-black': !this.isInjured
                }
            }
        },
        methods: {
            addToSelection() {
                this.$emit('add-classe', this.classe)
            }
        }
    }
</script>

<style scoped>

</style>
