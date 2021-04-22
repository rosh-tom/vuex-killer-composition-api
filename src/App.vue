<template> 
	<div>
		<Navigation />
	</div>
</template>

<script>
import Navigation from './components/Navigation.vue';

import store from './store/index.js';
import { provide } from 'vue';

export default {

	components: {
		Navigation
	},
	
	setup(){
		provide('store', store);

	}

}
</script>

<style>

</style>