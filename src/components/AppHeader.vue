<template>
  <header class="border-b border-gray-500">
    <div class="container flex items-center justify-between mx-auto py-6">
      <router-link class="font-semibold mr-6 text-orange-500 text-2xl" to="/">
        Vue Keep
      </router-link>
      <div class="flex items-center">
        <label class="mr-2" for="search-input">Buscar nota</label>
        <input
          class="border border-gray-400 outline-none px-3 py-2 rounded"
          id="search-input"
          @input="updateRoute($event.target.value)"
          placeholder="Buscar..."
          type="text"
        />
      </div>
      <router-link
        class="bg-green-500 border border-green-600 ml-6 outline-none py-2 px-3 rounded text-white"
        to="/new"
      >
        Crear nueva nota
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    updateRoute(value) {
      if (value.trim()) {
        this.$router.push({ query: { search: value } });
      } else {
        this.$router.push({ query: null });
      }
    },
  },
};
</script>
