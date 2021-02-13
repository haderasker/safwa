import safwaAxios from "../../../axios";

export default {
    async loadDoctrines ({commit}) {
        const response = await safwaAxios.get('doctrines', {
            params: {
                per_page: 9999999
            }
        });

        commit('SET_DOCTRINES', response.data.data)
    },
}
