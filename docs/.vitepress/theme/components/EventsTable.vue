<script setup>
  import { data as manifest } from '../../custom-elements.data.mjs'
  import MarkdownIt from 'markdown-it'

  const md = new MarkdownIt()

  const props = defineProps({
    tag: {
      type: String,
      required: true,
    },
  })

  const component = manifest.modules
    .flatMap((m) => m.declarations ?? [])
    .find((d) => d.tagName === props.tag)

  const events = (component?.events ?? []).map((event) => ({
    ...event,
    description: md.renderInline(event.description ?? ''),
  }))
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="event in events" :key="event.name">
        <td><code>{{ event.name }}</code></td>
        <td v-html="event.description" />
      </tr>
    </tbody>
  </table>
</template>
