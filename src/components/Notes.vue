<template>
  <section class="mt-8">
    <h2 class="font-semibold mb-4 text-xl">Tus notas</h2>
    <template v-if="filteredNotes.length > 0">
      <div class="grid grid-cols-3 gap-4">
        <div
          class="bg-pink-200 pb-10 pt-6 px-6 relative"
          :key="note.id"
          v-for="note in filteredNotes"
        >
          <h3 class="font-semibold mb-2 text-lg">{{ note.title }}</h3>
          <p>{{ note.content }}</p>
          <button
            class="absolute bottom-0 outline-none right-0 p-2"
            @click="deleteNote(note.id)"
          >
            Borrar
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <p>No hay resultados</p>
    </template>
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex"

const removeDiacritics = (string) =>
  string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

const normalizeString = (string) => removeDiacritics(string).toLowerCase()

export default {
  data: () => ({
    query: ""
  }),
  computed: {
    filteredNotes() {
      return this.query.trim().length > 0
        ? this.notes.filter(
            (note) =>
              normalizeString(note.title).includes(normalizeString(this.query)) ||
              normalizeString(note.content).includes(normalizeString(this.query))
          )
        : this.notes
    },
    ...mapState(["notes"])
  },
  methods: {
    ...mapMutations(["deleteNote"])
  },
  watch: {
    $route(to) {
      if (Object.entries(to.query).length > 0) {
        this.query = to.query.search
      } else {
        this.query = ""
      }
    }
  }
}
</script>
