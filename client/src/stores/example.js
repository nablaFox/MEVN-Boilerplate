import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useExampleStore = defineStore('example', () => {
    const count = ref(0)

    function increase() {
        count.value++
    }

    const double = computed(() => {
        return count.value * 2
    })

    return { count, increase, double }
})