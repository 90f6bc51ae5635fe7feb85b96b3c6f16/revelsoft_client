<template>
    <div id="skill" class="pb-16">
        <v-row class="d-flex justify-center py-10">
            <h1 class="text-txtcolor ">Our</h1>
            <h1 class="ml-3">Skill</h1>
        </v-row>
        <v-col>
            <v-row class="d-flex justify-space-evenly m-16 py-10">
                <div class="skill-item">
                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Frontend.png" alt="">
                </div>
                <div class="skill-item">
                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Backend.png" alt="">
                </div>
                <div class="skill-item">
                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Database.png" alt="">
                </div>
            </v-row>
            <v-row class="d-flex justify-space-evenly">
                <div class="skill-item">
                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Framework.png" alt="">
                </div>
                <div class="skill-item">
                    <img class="skill-img d-block w-100" src="@/assets/images/skills/Infrastructure.png" alt="">
                </div>
            </v-row>
        </v-col>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.skill-img {
    max-width: 340px;
    max-height: 340px;
    min-width: 100px;
    min-height: 100px;
}
</style>