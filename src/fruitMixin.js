export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            /* in this (element) callback,will return all them elements I generated*/
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
};