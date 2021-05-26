export default {
    methods: {
        successMessage({title, message}) {
            this.$vs.dialog({
                type: 'alert',
                color: 'success',
                title: title,
                text: message,
            })
        },

        failMessage({title, message}) {
            this.$vs.dialog({
                type: 'alert',
                color: 'danger',
                title: title,
                text: message,
            })
        },

        confirm(title, message, acceptFunc) {
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: title,
                text: message,
                accept: acceptFunc
            })
        },
    }
}
