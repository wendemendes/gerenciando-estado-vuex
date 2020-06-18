<template>
    <div>
        <h1>Counter: {{ counter }}</h1>   
                <button @click="decrement">Decrement</button>
                <button @click="increment">Increment</button>
    </div>
</template>

<script>

//import  { mapState, mapMutations } from 'vuex'
//import  { mapGetters, mapMutations } from 'vuex'
import  { mapGetters, mapActions } from 'vuex'

export default {
    name: "Counter",
    computed: {
        // ...mapGetters({
        //     counter: state => state.counter
        // })

          ...mapGetters([
              "counter"
        ])
    },
    methods: {
        //  ...mapMutations([
        //      'decrement',
        //      'increment'
        //  ])

         ...mapActions([
             'decrement',
             'increment'
         ])
    }
}
</script>