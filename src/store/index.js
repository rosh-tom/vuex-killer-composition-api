import { reactive } from 'vue';

const state = reactive({
    counter: 0
});

const methods = {
   increaseCounter(){
        return state.counter++;
   },
   decreaseCounter(){
        return state.counter <= 0 ? 0 : state.counter--; 
   }
}

export default {
    state,
    methods
}