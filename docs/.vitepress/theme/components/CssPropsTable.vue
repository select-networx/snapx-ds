<script setup>
  import { data as manifest } from '../../custom-elements.data.mjs'

  const props = defineProps({
    tag: {
      type: String,
      required: true,
    },
  })

  const component = manifest.modules
    .flatMap((m) => m.declarations ?? [])
    .find((d) => d.tagName === props.tag)

  const cssProperties = component?.cssProperties ?? []
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Custom property</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="property in cssProperties" :key="property.name">
        <td><code>{{ property.name }}</code></td>
        <td>{{ property.description }}</td>
      </tr>
    </tbody>
  </table>
</template>
