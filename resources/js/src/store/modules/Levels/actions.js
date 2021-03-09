import safwaAxios from "../../../axios";

export default {
    async loadLevels ({commit}) {
        const response = await safwaAxios.post('levels/list', {
            per_page: 9999999
        });

        commit('SET_LEVELS', response.data.data)
    },
}
