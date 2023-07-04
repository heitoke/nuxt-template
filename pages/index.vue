<template>
    <h1>Hello world</h1>
    {{ testStore.message }} - {{ testStore.upper }}

    <button @click="testStore.setMessage('geeg')">Click</button>
</template>

<script lang="ts" setup>

import { useTestStore } from '~/stores/test';

const testStore = useTestStore();

useSeoMeta({
    title: 'Home'
});

const url = 'https://api.heito.xyz/users/me';

// const t = await $fetch(url).catch(err => err.data);
const { pending, data: test } = await useFetch(url, {
    lazy: true,
    server: false
});

console.log(pending, test);



</script>