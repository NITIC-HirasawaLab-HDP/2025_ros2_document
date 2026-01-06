<template>
  <div class="mermaid-container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const container = ref(null)

const renderMermaid = async () => {
  if (typeof window === 'undefined') return
  
  const mermaid = (await import('mermaid')).default
  
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
  })
  
  if (container.value) {
    container.value.innerHTML = ''
    const id = `mermaid-${Date.now()}`
    try {
      const { svg } = await mermaid.render(id, props.code)
      container.value.innerHTML = svg
    } catch (e) {
      console.error('Mermaid rendering error:', e)
      container.value.innerHTML = `<pre>${props.code}</pre>`
    }
  }
}

onMounted(() => {
  renderMermaid()
})

watch(() => props.code, () => {
  renderMermaid()
})
</script>

<style scoped>
.mermaid-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.mermaid-container :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
