import safwaAxios from "../../../axios";

export default {
    async loadSemesters ({commit}) {
        const response = await safwaAxios.post('semesters/list', {
            per_page: 9999999
        });

        commit('SET_SEMESTERS', response.data.data)
    },
}
