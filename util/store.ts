import Vue from 'vue'

const state = Vue.observable({
    useRealTime: false
})

export default {
    get state(){ return state }
}