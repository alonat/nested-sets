<template>
    <ul>
        <li v-for="item in items">
            {{ item.title }}
            <tree :items="item.subtree" v-if="item.subtree.length > 0"></tree>
        </li>
    </ul>
</template>

<script>
import Tree from './Tree.vue';

export default {
    name: 'tree',
    components: { Tree },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>
