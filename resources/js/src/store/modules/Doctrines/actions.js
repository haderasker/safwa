import safwaAxios from "../../../axios";

export default {
    async loadDoctrines ({commit}) {
        const response = await safwaAxios.get('doctrines');

        commit('SET_DOCTRINES', response.data)
    }
}
