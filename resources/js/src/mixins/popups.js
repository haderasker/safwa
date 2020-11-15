export default {
    methods: {
        successMessage({title, message}) {
            this.$vs.dialog({
                color: 'success',
                title: title,
                text: message,
                type: 'alert'
            })
        },

        failMessage({title, message}) {
            this.$vs.dialog({
                color: 'danger',
                title: title,
                text: message,
                type: 'alert'
            })
        }
    }
}
