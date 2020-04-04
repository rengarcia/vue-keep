import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNewNote(state, payload) {
      state.notes = [...state.notes, payload]
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
    }
  }
});
