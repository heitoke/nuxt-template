<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>

const titleSite = 'Nuxt Test';

const nameLayout = ref('default');

useHead({
    // titleTemplate: (titleChunk) => {
    //     return titleChunk ? `${titleChunk} | ${titleSite}` : titleSite;
    // }
    titleTemplate: `%s | ${titleSite}`
});

function setLayout(name: string) {
    setPageLayout(name);
}

</script>