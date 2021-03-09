import safwaAxios from "../../../axios";

export default {
    async loadCourses ({commit}) {
        const response = await safwaAxios.post('courses/list', {
            per_page: 9999999
        });

        commit('SET_COURSES', response.data.data)
    },
}
