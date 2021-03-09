import safwaAxios from "../../../axios";

export default {
    async loadDoctrines ({commit}) {
        const response = await safwaAxios.post('doctrines/list', {
            per_page: 9999999
        });

        commit('SET_DOCTRINES', response.data.data)
    },
}
