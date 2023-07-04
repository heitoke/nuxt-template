<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <!-- <NuxtWelcome /> -->

        {{ nameLayout }}

        <input type="text" v-model="nameLayout">

        <button @click="setLayout(nameLayout)">Change layout</button>
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