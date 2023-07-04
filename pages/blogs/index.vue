<template>
    <h1>Blogs</h1>

    <div class="blog" v-for="blog of blogs" :key="blog.name">
        <h3>{{ blog?.title }}</h3>

        <p>{{ blog?.description || '' }}</p>

        <NuxtLink :to="`/blogs/${blog.name}`">Open</NuxtLink>
    </div>
</template>

<script lang="ts" setup>

const { data: blogs } = useFetch('/api/blogs');

useSeoMeta({
    title: 'Blogs'
});

</script>

<style lang="scss" scoped>

.blog {
    margin: 12px;
    padding: 12px;
    border: 1px solid #010101;

    h3 {
        margin-top: 0;
    }
}

</style>