<template>
  <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    <div class="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2">
      <button
        type="button"
        class="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
        :class="{ 'bg-emerald-100 text-emerald-700': isActive('bold') }"
        @click="toggleBold"
      >
        Bold
      </button>
      <button
        type="button"
        class="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
        :class="{ 'bg-emerald-100 text-emerald-700': isActive('italic') }"
        @click="toggleItalic"
      >
        Italic
      </button>
      <button
        type="button"
        class="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
        :class="{ 'bg-emerald-100 text-emerald-700': isActive('heading', { level: 2 }) }"
        @click="toggleHeading"
      >
        Heading 2
      </button>
      <button
        type="button"
        class="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
        :class="{ 'bg-emerald-100 text-emerald-700': isActive('bulletList') }"
        @click="toggleBulletList"
      >
        Bullet List
      </button>
      <button
        type="button"
        class="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
        :class="{ 'bg-emerald-100 text-emerald-700': isActive('orderedList') }"
        @click="toggleOrderedList"
      >
        Ordered List
      </button>
    </div>

    <EditorContent :editor="editor" class="min-h-[260px] bg-white px-4 py-3 text-sm text-slate-700" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import type { Editor } from '@tiptap/vue-3'

interface Props {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Mulai menulis konten artikel...',
  disabled: false,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const editor = ref<Editor | null>(null)

function isActive(name: string, attrs?: Record<string, unknown>) {
  const instance = editor.value
  if (!instance || typeof instance.isActive !== 'function') {
    return false
  }

  return instance.isActive(name, attrs)
}

onMounted(() => {
  if (import.meta.client) {
    editor.value = useEditor({
      content: props.modelValue || '',
      extensions: [
        StarterKit.configure({
          heading: {
            levels: [2],
          },
        }),
      ],
      editorProps: {
        attributes: {
          class: 'prose prose-sm max-w-none min-h-[220px] focus:outline-none cursor-text',
        },
      },
      onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML())
      },
    })
  }
})

watch(
  () => props.modelValue,
  (value) => {
    if (!editor.value) return
    const currentValue = editor.value.getHTML()
    if (value !== currentValue) {
      editor.value.commands.setContent(value || '', false)
    }
  }
)

watch(
  () => props.disabled,
  (value) => {
    if (!editor.value) return
    editor.value.setEditable(!value)
  },
  { immediate: true }
)

function toggleBold() {
  editor.value?.chain().focus().toggleBold().run()
}

function toggleItalic() {
  editor.value?.chain().focus().toggleItalic().run()
}

function toggleHeading() {
  editor.value?.chain().focus().toggleHeading({ level: 2 }).run()
}

function toggleBulletList() {
  editor.value?.chain().focus().toggleBulletList().run()
}

function toggleOrderedList() {
  editor.value?.chain().focus().toggleOrderedList().run()
}

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>
