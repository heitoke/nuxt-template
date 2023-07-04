<template>
    <Link rel="icon" :href="image"/>

    <header>
        <img :src="image" alt="Blog Image" v-if="image">

        <h1>{{ user?.name }} ({{ user.username }})</h1>
    </header>

    <p>{{ user?.email || '' }}</p>

    <a :href="`https://${user.website}`" target="_blank">{{ user.website }}</a>
</template>

<script lang="ts" setup>

import { IUser } from 'types/user';

const route = useRoute();

const { data } = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);

const   
    user = data.value as IUser,
    imageType = 'beam',
    imageColors = ['0A0310', '49007E', 'FF005B', 'FF7D10', 'FFB238'],
    image = `https://source.boringavatars.com/${imageType}/120/${user.name}?colors=${imageColors.join(',')}`;

useSeoMeta({
    title: user?.name ? `${user.name} (${user.username})` : 'Not Found User',
    description: user?.email ? `${user.email} | ${user.website}` : '',
    ogImage: image,
    twitterImage: image,
});

</script>

<style lang="scss" scoped>

header {
    display: flex;
    align-items: center;

    h1 {
        margin: 0 0 0 12px;
    }
}

</style>