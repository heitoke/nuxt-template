<template>
    <img :src="image" alt="Blog Image" v-if="image">

    <h1>Blog - {{ blog?.title }}</h1>

    <p>{{ blog?.description }}</p>
</template>

<script lang="ts" setup>

const route = useRoute();

const { data: blog } = await useFetch(`/api/blogs/${route.params.name}`);

const image = blog.value?.image || '';

useSeoMeta({
    title: blog.value?.title || 'Not Found Blog',
    description: blog.value?.description || '',
    ogImage: image,
    twitterImage: image
});

</script>

<style lang="scss" scoped>

img {
    height: 256px;
}

</style>