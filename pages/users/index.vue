<template>
    <h1>Users</h1>

    <div class="user" v-for="user of (users as Array<IUser>)" :key="user.id">
        <h3>{{ user?.name }} ({{ user.username }})</h3>

        <p>{{ user?.email || '' }}</p>

        <a :href="`https://${user.website}`" target="_blank">{{ user.website }}</a>

        <br>

        <NuxtLink :to="`/users/${user.id}`">Open</NuxtLink>
    </div>
</template>

<script lang="ts" setup>

import { IUser } from 'types/user';

const { data: users } = useFetch('https://jsonplaceholder.typicode.com/users');

useSeoMeta({
    title: 'Users'
});

</script>

<style lang="scss" scoped>

.user {
    margin: 12px;
    padding: 12px;
    border: 1px solid #010101;

    h3 {
        margin-top: 0;
    }
}

</style>