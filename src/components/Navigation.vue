<template>
    <div>
        <div class="flex space-x-6 px-4 bg-gray-700 text-white py-2">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div> 
        <router-view />
    </div>
    
</template>

<script>
export default {

}
</script>

<style lang="postcss">
    .router-link-active,
    .router-link-exact-active{
        @apply text-blue-500
    }
</style>