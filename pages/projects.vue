<script lang="ts" setup>
interface ProjectProps {
  title: string
  description: string
  image: string
}

const projectList: ProjectProps[] = [
  {
    title: 'Project 1',
    description: 'Project 1 description',
    image: 'https://via.placeholder.com/150',
  },
]
</script>

<template>
  <TheContainer>
    <h1 class="text-5xl font-semibold my-8">
      Projects
    </h1>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ProjectCard
        v-for="project in projectList"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="project.image"
      />
    </div>
  </TheContainer>
</template>
