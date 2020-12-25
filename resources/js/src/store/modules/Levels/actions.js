import safwaAxios from "../../../axios";

export default {
    async loadLevels ({commit}) {
        const response = await safwaAxios.get('levels', {
            params: {
                per_page: 9999999
            }
        });

        commit('SET_LEVELS', response.data.data)
    },
}
