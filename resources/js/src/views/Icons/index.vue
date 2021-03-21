<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>icon</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="icon in icons">
                    <td>{{ icon.name }}</td>
                    <td>
                        <i class="feather" :class="icon.code"></i>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

export default {
    components: {
        StatisticsCardLine
    },
    data() {
        return {
            icons: [
                {
                    code: 'icon-alert-octagon',
                    name: 'icon-alert-octagon'
                },

                {
                    code: 'icon-alert-circle',
                    name: 'icon-alert-circle'
                },

                {
                    code: 'icon-activity',
                    name: 'icon-activity'
                },

                {
                    code: 'icon-alert-triangle',
                    name: 'icon-alert-triangle'
                },

                {
                    code: 'icon-align-center',
                    name: 'icon-align-center'
                },

                {
                    code: 'icon-airplay',
                    name: 'icon-airplay'
                },

                {
                    code: 'icon-align-justify',
                    name: 'icon-align-justify'
                },

                {
                    code: 'icon-align-left',
                    name: 'icon-align-left'
                },

                {
                    code: 'icon-align-right',
                    name: 'icon-align-right'
                },

                {
                    code: 'icon-arrow-down-left',
                    name: 'icon-arrow-down-left'
                },

                {
                    code: 'icon-arrow-down-right',
                    name: 'icon-arrow-down-right'
                },

                {
                    code: 'icon-anchor',
                    name: 'icon-anchor'
                },

                {
                    code: 'icon-aperture',
                    name: 'icon-aperture'
                },

                {
                    code: 'icon-arrow-left',
                    name: 'icon-arrow-left'
                },

                {
                    code: 'icon-arrow-right',
                    name: 'icon-arrow-right'
                },

                {
                    code: 'icon-arrow-down',
                    name: 'icon-arrow-down'
                },

                {
                    code: 'icon-arrow-up-left',
                    name: 'icon-arrow-up-left'
                },

                {
                    code: 'icon-arrow-up-right',
                    name: 'icon-arrow-up-right'
                },

                {
                    code: 'icon-arrow-up',
                    name: 'icon-arrow-up'
                },

                {
                    code: 'icon-award',
                    name: 'icon-award'
                },

                {
                    code: 'icon-bar-chart',
                    name: 'icon-bar-chart'
                },

                {
                    code: 'icon-at-sign',
                    name: 'icon-at-sign'
                },

                {
                    code: 'icon-bar-chart-2',
                    name: 'icon-bar-chart-2'
                },

                {
                    code: 'icon-battery-charging',
                    name: 'icon-battery-charging'
                },

                {
                    code: 'icon-bell-off',
                    name: 'icon-bell-off'
                },

                {
                    code: 'icon-battery',
                    name: 'icon-battery'
                },

                {
                    code: 'icon-bluetooth',
                    name: 'icon-bluetooth'
                },

                {
                    code: 'icon-bell',
                    name: 'icon-bell'
                },

                {
                    code: 'icon-book',
                    name: 'icon-book'
                },

                {
                    code: 'icon-briefcase',
                    name: 'icon-briefcase'
                },

                {
                    code: 'icon-camera-off',
                    name: 'icon-camera-off'
                },

                {
                    code: 'icon-calendar',
                    name: 'icon-calendar'
                },

                {
                    code: 'icon-bookmark',
                    name: 'icon-bookmark'
                },

                {
                    code: 'icon-box',
                    name: 'icon-box'
                },

                {
                    code: 'icon-camera',
                    name: 'icon-camera'
                },

                {
                    code: 'icon-check-circle',
                    name: 'icon-check-circle'
                },

                {
                    code: 'icon-check',
                    name: 'icon-check'
                },

                {
                    code: 'icon-check-square',
                    name: 'icon-check-square'
                },

                {
                    code: 'icon-cast',
                    name: 'icon-cast'
                },

                {
                    code: 'icon-chevron-down',
                    name: 'icon-chevron-down'
                },

                {
                    code: 'icon-chevron-left',
                    name: 'icon-chevron-left'
                },

                {
                    code: 'icon-chevron-right',
                    name: 'icon-chevron-right'
                },

                {
                    code: 'icon-chevron-up',
                    name: 'icon-chevron-up'
                },

                {
                    code: 'icon-chevrons-down',
                    name: 'icon-chevrons-down'
                },

                {
                    code: 'icon-chevrons-right',
                    name: 'icon-chevrons-right'
                },

                {
                    code: 'icon-chevrons-up',
                    name: 'icon-chevrons-up'
                },

                {
                    code: 'icon-chevrons-left',
                    name: 'icon-chevrons-left'
                },

                {
                    code: 'icon-circle',
                    name: 'icon-circle'
                },

                {
                    code: 'icon-clipboard',
                    name: 'icon-clipboard'
                },

                {
                    code: 'icon-chrome',
                    name: 'icon-chrome'
                },

                {
                    code: 'icon-clock',
                    name: 'icon-clock'
                },

                {
                    code: 'icon-cloud-lightning',
                    name: 'icon-cloud-lightning'
                },

                {
                    code: 'icon-cloud-drizzle',
                    name: 'icon-cloud-drizzle'
                },

                {
                    code: 'icon-cloud-rain',
                    name: 'icon-cloud-rain'
                },

                {
                    code: 'icon-cloud-off',
                    name: 'icon-cloud-off'
                },

                {
                    code: 'icon-codepen',
                    name: 'icon-codepen'
                },

                {
                    code: 'icon-cloud-snow',
                    name: 'icon-cloud-snow'
                },

                {
                    code: 'icon-compass',
                    name: 'icon-compass'
                },

                {
                    code: 'icon-copy',
                    name: 'icon-copy'
                },

                {
                    code: 'icon-corner-down-right',
                    name: 'icon-corner-down-right'
                },

                {
                    code: 'icon-corner-down-left',
                    name: 'icon-corner-down-left'
                },

                {
                    code: 'icon-corner-left-down',
                    name: 'icon-corner-left-down'
                },

                {
                    code: 'icon-corner-left-up',
                    name: 'icon-corner-left-up'
                },

                {
                    code: 'icon-corner-up-left',
                    name: 'icon-corner-up-left'
                },

                {
                    code: 'icon-corner-up-right',
                    name: 'icon-corner-up-right'
                },

                {
                    code: 'icon-corner-right-down',
                    name: 'icon-corner-right-down'
                },

                {
                    code: 'icon-corner-right-up',
                    name: 'icon-corner-right-up'
                },

                {
                    code: 'icon-cpu',
                    name: 'icon-cpu'
                },

                {
                    code: 'icon-credit-card',
                    name: 'icon-credit-card'
                },

                {
                    code: 'icon-crosshair',
                    name: 'icon-crosshair'
                },

                {
                    code: 'icon-disc',
                    name: 'icon-disc'
                },

                {
                    code: 'icon-delete',
                    name: 'icon-delete'
                },

                {
                    code: 'icon-download-cloud',
                    name: 'icon-download-cloud'
                },

                {
                    code: 'icon-download',
                    name: 'icon-download'
                },

                {
                    code: 'icon-droplet',
                    name: 'icon-droplet'
                },

                {
                    code: 'icon-edit-2',
                    name: 'icon-edit-2'
                },

                {
                    code: 'icon-edit',
                    name: 'icon-edit'
                },

                {
                    code: 'icon-edit-1',
                    name: 'icon-edit-1'
                },

                {
                    code: 'icon-external-link',
                    name: 'icon-external-link'
                },

                {
                    code: 'icon-eye',
                    name: 'icon-eye'
                },

                {
                    code: 'icon-feather',
                    name: 'icon-feather'
                },

                {
                    code: 'icon-facebook',
                    name: 'icon-facebook'
                },

                {
                    code: 'icon-file-minus',
                    name: 'icon-file-minus'
                },

                {
                    code: 'icon-eye-off',
                    name: 'icon-eye-off'
                },

                {
                    code: 'icon-fast-forward',
                    name: 'icon-fast-forward'
                },

                {
                    code: 'icon-file-text',
                    name: 'icon-file-text'
                },

                {
                    code: 'icon-film',
                    name: 'icon-film'
                },

                {
                    code: 'icon-file',
                    name: 'icon-file'
                },

                {
                    code: 'icon-file-plus',
                    name: 'icon-file-plus'
                },

                {
                    code: 'icon-folder',
                    name: 'icon-folder'
                },

                {
                    code: 'icon-filter',
                    name: 'icon-filter'
                },

                {
                    code: 'icon-flag',
                    name: 'icon-flag'
                },

                {
                    code: 'icon-globe',
                    name: 'icon-globe'
                },

                {
                    code: 'icon-grid',
                    name: 'icon-grid'
                },

                {
                    code: 'icon-heart',
                    name: 'icon-heart'
                },

                {
                    code: 'icon-home',
                    name: 'icon-home'
                },

                {
                    code: 'icon-github',
                    name: 'icon-github'
                },

                {
                    code: 'icon-image',
                    name: 'icon-image'
                },

                {
                    code: 'icon-inbox',
                    name: 'icon-inbox'
                },

                {
                    code: 'icon-layers',
                    name: 'icon-layers'
                },

                {
                    code: 'icon-info',
                    name: 'icon-info'
                },

                {
                    code: 'icon-instagram',
                    name: 'icon-instagram'
                },

                {
                    code: 'icon-layout',
                    name: 'icon-layout'
                },

                {
                    code: 'icon-link-2',
                    name: 'icon-link-2'
                },

                {
                    code: 'icon-life-buoy',
                    name: 'icon-life-buoy'
                },

                {
                    code: 'icon-link',
                    name: 'icon-link'
                },

                {
                    code: 'icon-log-in',
                    name: 'icon-log-in'
                },

                {
                    code: 'icon-list',
                    name: 'icon-list'
                },

                {
                    code: 'icon-lock',
                    name: 'icon-lock'
                },

                {
                    code: 'icon-log-out',
                    name: 'icon-log-out'
                },

                {
                    code: 'icon-loader',
                    name: 'icon-loader'
                },

                {
                    code: 'icon-mail',
                    name: 'icon-mail'
                },

                {
                    code: 'icon-maximize-2',
                    name: 'icon-maximize-2'
                },

                {
                    code: 'icon-map',
                    name: 'icon-map'
                },

                {
                    code: 'icon-map-pin',
                    name: 'icon-map-pin'
                },

                {
                    code: 'icon-menu',
                    name: 'icon-menu'
                },

                {
                    code: 'icon-message-circle',
                    name: 'icon-message-circle'
                },

                {
                    code: 'icon-message-square',
                    name: 'icon-message-square'
                },

                {
                    code: 'icon-minimize-2',
                    name: 'icon-minimize-2'
                },

                {
                    code: 'icon-mic-off',
                    name: 'icon-mic-off'
                },

                {
                    code: 'icon-minus-circle',
                    name: 'icon-minus-circle'
                },

                {
                    code: 'icon-mic',
                    name: 'icon-mic'
                },

                {
                    code: 'icon-minus-square',
                    name: 'icon-minus-square'
                },

                {
                    code: 'icon-minus',
                    name: 'icon-minus'
                },

                {
                    code: 'icon-moon',
                    name: 'icon-moon'
                },

                {
                    code: 'icon-monitor',
                    name: 'icon-monitor'
                },

                {
                    code: 'icon-more-vertical',
                    name: 'icon-more-vertical'
                },

                {
                    code: 'icon-more-horizontal',
                    name: 'icon-more-horizontal'
                },

                {
                    code: 'icon-move',
                    name: 'icon-move'
                },

                {
                    code: 'icon-music',
                    name: 'icon-music'
                },

                {
                    code: 'icon-navigation-2',
                    name: 'icon-navigation-2'
                },

                {
                    code: 'icon-navigation',
                    name: 'icon-navigation'
                },

                {
                    code: 'icon-octagon',
                    name: 'icon-octagon'
                },

                {
                    code: 'icon-package',
                    name: 'icon-package'
                },

                {
                    code: 'icon-pause-circle',
                    name: 'icon-pause-circle'
                },

                {
                    code: 'icon-pause',
                    name: 'icon-pause'
                },

                {
                    code: 'icon-percent',
                    name: 'icon-percent'
                },

                {
                    code: 'icon-phone-call',
                    name: 'icon-phone-call'
                },

                {
                    code: 'icon-phone-forwarded',
                    name: 'icon-phone-forwarded'
                },

                {
                    code: 'icon-phone-missed',
                    name: 'icon-phone-missed'
                },

                {
                    code: 'icon-phone-off',
                    name: 'icon-phone-off'
                },

                {
                    code: 'icon-phone-incoming',
                    name: 'icon-phone-incoming'
                },

                {
                    code: 'icon-phone',
                    name: 'icon-phone'
                },

                {
                    code: 'icon-phone-outgoing',
                    name: 'icon-phone-outgoing'
                },

                {
                    code: 'icon-pie-chart',
                    name: 'icon-pie-chart'
                },

                {
                    code: 'icon-play-circle',
                    name: 'icon-play-circle'
                },

                {
                    code: 'icon-play',
                    name: 'icon-play'
                },

                {
                    code: 'icon-plus-square',
                    name: 'icon-plus-square'
                },

                {
                    code: 'icon-plus-circle',
                    name: 'icon-plus-circle'
                },

                {
                    code: 'icon-plus',
                    name: 'icon-plus'
                },

                {
                    code: 'icon-pocket',
                    name: 'icon-pocket'
                },

                {
                    code: 'icon-printer',
                    name: 'icon-printer'
                },

                {
                    code: 'icon-power',
                    name: 'icon-power'
                },

                {
                    code: 'icon-radio',
                    name: 'icon-radio'
                },

                {
                    code: 'icon-repeat',
                    name: 'icon-repeat'
                },

                {
                    code: 'icon-refresh-ccw',
                    name: 'icon-refresh-ccw'
                },

                {
                    code: 'icon-rewind',
                    name: 'icon-rewind'
                },

                {
                    code: 'icon-rotate-ccw',
                    name: 'icon-rotate-ccw'
                },

                {
                    code: 'icon-refresh-cw',
                    name: 'icon-refresh-cw'
                },

                {
                    code: 'icon-rotate-cw',
                    name: 'icon-rotate-cw'
                },

                {
                    code: 'icon-save',
                    name: 'icon-save'
                },

                {
                    code: 'icon-search',
                    name: 'icon-search'
                },

                {
                    code: 'icon-server',
                    name: 'icon-server'
                },

                {
                    code: 'icon-scissors',
                    name: 'icon-scissors'
                },

                {
                    code: 'icon-share-2',
                    name: 'icon-share-2'
                },

                {
                    code: 'icon-share',
                    name: 'icon-share'
                },

                {
                    code: 'icon-shield',
                    name: 'icon-shield'
                },

                {
                    code: 'icon-settings',
                    name: 'icon-settings'
                },

                {
                    code: 'icon-skip-back',
                    name: 'icon-skip-back'
                },

                {
                    code: 'icon-shuffle',
                    name: 'icon-shuffle'
                },

                {
                    code: 'icon-sidebar',
                    name: 'icon-sidebar'
                },

                {
                    code: 'icon-skip-forward',
                    name: 'icon-skip-forward'
                },

                {
                    code: 'icon-slack',
                    name: 'icon-slack'
                },

                {
                    code: 'icon-slash',
                    name: 'icon-slash'
                },

                {
                    code: 'icon-smartphone',
                    name: 'icon-smartphone'
                },

                {
                    code: 'icon-square',
                    name: 'icon-square'
                },

                {
                    code: 'icon-speaker',
                    name: 'icon-speaker'
                },

                {
                    code: 'icon-star',
                    name: 'icon-star'
                },

                {
                    code: 'icon-stop-circle',
                    name: 'icon-stop-circle'
                },

                {
                    code: 'icon-sun',
                    name: 'icon-sun'
                },

                {
                    code: 'icon-sunrise',
                    name: 'icon-sunrise'
                },

                {
                    code: 'icon-tablet',
                    name: 'icon-tablet'
                },

                {
                    code: 'icon-tag',
                    name: 'icon-tag'
                },

                {
                    code: 'icon-sunset',
                    name: 'icon-sunset'
                },

                {
                    code: 'icon-target',
                    name: 'icon-target'
                },

                {
                    code: 'icon-thermometer',
                    name: 'icon-thermometer'
                },

                {
                    code: 'icon-thumbs-up',
                    name: 'icon-thumbs-up'
                },

                {
                    code: 'icon-thumbs-down',
                    name: 'icon-thumbs-down'
                },

                {
                    code: 'icon-toggle-left',
                    name: 'icon-toggle-left'
                },

                {
                    code: 'icon-toggle-right',
                    name: 'icon-toggle-right'
                },

                {
                    code: 'icon-trash-2',
                    name: 'icon-trash-2'
                },

                {
                    code: 'icon-trash',
                    name: 'icon-trash'
                },

                {
                    code: 'icon-trending-up',
                    name: 'icon-trending-up'
                },

                {
                    code: 'icon-trending-down',
                    name: 'icon-trending-down'
                },

                {
                    code: 'icon-triangle',
                    name: 'icon-triangle'
                },

                {
                    code: 'icon-type',
                    name: 'icon-type'
                },

                {
                    code: 'icon-twitter',
                    name: 'icon-twitter'
                },

                {
                    code: 'icon-upload',
                    name: 'icon-upload'
                },

                {
                    code: 'icon-umbrella',
                    name: 'icon-umbrella'
                },

                {
                    code: 'icon-upload-cloud',
                    name: 'icon-upload-cloud'
                },

                {
                    code: 'icon-unlock',
                    name: 'icon-unlock'
                },

                {
                    code: 'icon-user-check',
                    name: 'icon-user-check'
                },

                {
                    code: 'icon-user-minus',
                    name: 'icon-user-minus'
                },

                {
                    code: 'icon-user-plus',
                    name: 'icon-user-plus'
                },

                {
                    code: 'icon-user-x',
                    name: 'icon-user-x'
                },

                {
                    code: 'icon-user',
                    name: 'icon-user'
                },

                {
                    code: 'icon-users',
                    name: 'icon-users'
                },

                {
                    code: 'icon-video-off',
                    name: 'icon-video-off'
                },

                {
                    code: 'icon-video',
                    name: 'icon-video'
                },

                {
                    code: 'icon-voicemail',
                    name: 'icon-voicemail'
                },

                {
                    code: 'icon-volume-x',
                    name: 'icon-volume-x'
                },

                {
                    code: 'icon-volume-2',
                    name: 'icon-volume-2'
                },

                {
                    code: 'icon-volume-1',
                    name: 'icon-volume-1'
                },

                {
                    code: 'icon-volume',
                    name: 'icon-volume'
                },

                {
                    code: 'icon-watch',
                    name: 'icon-watch'
                },

                {
                    code: 'icon-wifi',
                    name: 'icon-wifi'
                },

                {
                    code: 'icon-x-square',
                    name: 'icon-x-square'
                },

                {
                    code: 'icon-wind',
                    name: 'icon-wind'
                },

                {
                    code: 'icon-x',
                    name: 'icon-x'
                },

                {
                    code: 'icon-x-circle',
                    name: 'icon-x-circle'
                },

                {
                    code: 'icon-zap',
                    name: 'icon-zap'
                },

                {
                    code: 'icon-zoom-in',
                    name: 'icon-zoom-in'
                },

                {
                    code: 'icon-zoom-out',
                    name: 'icon-zoom-out'
                },

                {
                    code: 'icon-command',
                    name: 'icon-command'
                },

                {
                    code: 'icon-cloud',
                    name: 'icon-cloud'
                },

                {
                    code: 'icon-hash',
                    name: 'icon-hash'
                },

                {
                    code: 'icon-headphones',
                    name: 'icon-headphones'
                },

                {
                    code: 'icon-underline',
                    name: 'icon-underline'
                },

                {
                    code: 'icon-italic',
                    name: 'icon-italic'
                },

                {
                    code: 'icon-bold',
                    name: 'icon-bold'
                },

                {
                    code: 'icon-crop',
                    name: 'icon-crop'
                },

                {
                    code: 'icon-help-circle',
                    name: 'icon-help-circle'
                },

                {
                    code: 'icon-paperclip',
                    name: 'icon-paperclip'
                },

                {
                    code: 'icon-shopping-cart',
                    name: 'icon-shopping-cart'
                },

                {
                    code: 'icon-tv',
                    name: 'icon-tv'
                },

                {
                    code: 'icon-wifi-off',
                    name: 'icon-wifi-off'
                },

                {
                    code: 'icon-minimize',
                    name: 'icon-minimize'
                },

                {
                    code: 'icon-maximize',
                    name: 'icon-maximize'
                },

                {
                    code: 'icon-gitlab',
                    name: 'icon-gitlab'
                },

                {
                    code: 'icon-sliders',
                    name: 'icon-sliders'
                },

                {
                    code: 'icon-star-on',
                    name: 'icon-star-on'
                },

                {
                    code: 'icon-heart-on',
                    name: 'icon-heart-on'
                },

                {
                    code: 'icon-archive',
                    name: 'icon-archive'
                },

                {
                    code: 'icon-arrow-down-circle',
                    name: 'icon-arrow-down-circle'
                },

                {
                    code: 'icon-arrow-up-circle',
                    name: 'icon-arrow-up-circle'
                },

                {
                    code: 'icon-arrow-left-circle',
                    name: 'icon-arrow-left-circle'
                },

                {
                    code: 'icon-arrow-right-circle',
                    name: 'icon-arrow-right-circle'
                },

                {
                    code: 'icon-bar-chart-line-',
                    name: 'icon-bar-chart-line-'
                },

                {
                    code: 'icon-bar-chart-line',
                    name: 'icon-bar-chart-line'
                },

                {
                    code: 'icon-book-open',
                    name: 'icon-book-open'
                },

                {
                    code: 'icon-code',
                    name: 'icon-code'
                },

                {
                    code: 'icon-database',
                    name: 'icon-database'
                },

                {
                    code: 'icon-dollar-sign',
                    name: 'icon-dollar-sign'
                },

                {
                    code: 'icon-folder-plus',
                    name: 'icon-folder-plus'
                },

                {
                    code: 'icon-gift',
                    name: 'icon-gift'
                },

                {
                    code: 'icon-folder-minus',
                    name: 'icon-folder-minus'
                },

                {
                    code: 'icon-git-commit',
                    name: 'icon-git-commit'
                },

                {
                    code: 'icon-git-branch',
                    name: 'icon-git-branch'
                },

                {
                    code: 'icon-git-pull-request',
                    name: 'icon-git-pull-request'
                },

                {
                    code: 'icon-git-merge',
                    name: 'icon-git-merge'
                },

                {
                    code: 'icon-linkedin',
                    name: 'icon-linkedin'
                },

                {
                    code: 'icon-hard-drive',
                    name: 'icon-hard-drive'
                },

                {
                    code: 'icon-more-vertical-',
                    name: 'icon-more-vertical-'
                },

                {
                    code: 'icon-more-horizontal-',
                    name: 'icon-more-horizontal-'
                },

                {
                    code: 'icon-rss',
                    name: 'icon-rss'
                },

                {
                    code: 'icon-send',
                    name: 'icon-send'
                },

                {
                    code: 'icon-shield-off',
                    name: 'icon-shield-off'
                },

                {
                    code: 'icon-shopping-bag',
                    name: 'icon-shopping-bag'
                },

                {
                    code: 'icon-terminal',
                    name: 'icon-terminal'
                },

                {
                    code: 'icon-truck',
                    name: 'icon-truck'
                },

                {
                    code: 'icon-zap-off',
                    name: 'icon-zap-off'
                },

                {
                    code: 'icon-youtube',
                    name: 'icon-youtube'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
td {
    border-bottom: 1px solid #999;
    padding: 10px;
}
.feather {
    font-size: 40px;
}
</style>
