<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>

const titleSite = 'Nuxt Test';

useHead({
    titleTemplate: `%s | ${titleSite}`,
    link: [
        {
            rel: 'icon',
            href: '/favicon.ico'
        }
    ]
});

</script>