import create from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  data: [],
  numberOfDogs: "",
  loading: false,
  hasErrors: false,
  fetch: async (url) => {
    set(() => ({ loading: true }));
    try {
       
      const response = await axios.get(url).then(response => set((state) => ({ data: (state.data = response.data.message), loading: false })))
      console.log(response.data)
      
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
}));

export default useStore;