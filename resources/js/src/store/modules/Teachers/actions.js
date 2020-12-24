import safwaAxios from "../../../axios";

export default {
    async loadTeachers ({commit}) {
        const response = await safwaAxios.get('teachers', {
            params: {
                per_page: 9999999
            }
        });

        commit('SET_TEACHERS', response.data)
    },
}
