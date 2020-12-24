import safwaAxios from "../../../axios";

export default {
    async loadCourses ({commit}) {
        const response = await safwaAxios.get('courses', {
            params: {
                per_page: 9999999
            }
        });

        commit('SET_COURSES', response.data.data)
    },
}
