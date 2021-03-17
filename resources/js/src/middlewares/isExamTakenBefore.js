import safwaAxios from "../axios";

export const isExamTakenBefore = async (to, from, next) => {
    const response = await safwaAxios.get(`students/exams/${to.params.id}/is-taken`)

    if (response.data.is_taken) {
        next('/student-exams')
    } else {
        next()
    }
}
