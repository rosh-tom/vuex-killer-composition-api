<template>
    <div>
        <div>
            {{ store.state.counter }}
        </div>
        <div class="space-x-4">
            <button 
                class="border"
                @click="store.methods.increaseCounter()"
            >
                +
            </button>
            <button 
                class="border"
                @click="store.methods.decreaseCounter()"
            >
                -
            </button>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup(){
        const store = inject('store');

        return{
            store
        }
    }
}
</script>

<style>

</style>