<template>
    <tree :items="getArray(data)"></tree>
</template>

<script>
import data from '../data.json';
import Tree from '../components/Tree.vue';

export default {
    name: 'app',
    components: { Tree },
    data() {
        return {
            data,
        };
    },
    methods: {
        getArray(set, left = 0, right = null) {
            const tree = [];
            set.forEach((el) => {
                if (el.left === (left + 1) &&
                    (right === null || el.right < right)) {
                    tree.push({
                        title: el.title,
                        subtree: this.getArray(set, el.left, el.right),
                    });
                    left = el.right;
                }
            });

            return tree;
        },
    },
};
</script>