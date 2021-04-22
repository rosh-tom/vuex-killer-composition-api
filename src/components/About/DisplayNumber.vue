<template>
    <div>
        {{ data.store.state.counter }}
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup(){

        const data = {
            store: inject('store')
        }

        return{
            data
        }
    }
}
</script>

<style>

</style>