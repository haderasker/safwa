<template>
    <div>
        <vs-button :to="{name: 'student-result.profile', params: { id: params.data.id }}" color="primary" type="filled" class="mr-4">
            {{ $t('general.score_details') }}
        </vs-button>

        <vs-button @click="downloadCertificate" color="success" type="filled">
            Download
        </vs-button>
    </div>
</template>

<script>
import safwaAxios from "../../../axios";

export default {
    methods: {
        async downloadCertificate() {
            const response = await safwaAxios.get(`students/${this.params.data.id}/certificate`, {
                responseType: 'blob',
            })

            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');

            link.href = downloadUrl;
            link.setAttribute('download', 'certificate.jpg');

            document.body.appendChild(link);

            link.click();
            link.remove();
        }
    }
}
</script>

<style lang="scss" scoped></style>
