(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/assign */ "./node_modules/@babel/runtime/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chartConfigs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartConfigs.js */ "./resources/js/src/components/statistics-cards/chartConfigs.js");
/* harmony import */ var _assets_utils_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/utils/color.js */ "./resources/assets/utils/color.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {// type: Array,
      // required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    colorTo: {
      type: String
    },
    // chartType: {
    //     type: String,
    //     default: 'line-chart',
    // },
    type: {
      type: String,
      default: 'line'
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    hideChart: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      chartOptions: null
    };
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex(this.color)
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.Default.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex(color) {
      if (_assets_utils_color_js__WEBPACK_IMPORTED_MODULE_4__["default"].isColor(color)) {
        var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(color));
        rgb = rgb.split(',');
        return "#".concat(((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1));
      }

      return color;
    },
    gradientToColor: function gradientToColor(color) {
      var gradientToColors = {
        'primary': '#A9A2F6',
        'success': '#55DD92',
        'warning': '#ffc085',
        'danger': '#F97794'
      };
      return gradientToColors[color] ? gradientToColors[color] : gradientToColors['primary'];
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  created: function created() {
    if (this.type === 'area') {
      // assign chart options
      this.chartOptions = _babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, _chartConfigs_js__WEBPACK_IMPORTED_MODULE_3__["default"].areaChartOptions);
      this.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    } else if (this.type === 'line') {
      // Assign chart options
      this.chartOptions = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_chartConfigs_js__WEBPACK_IMPORTED_MODULE_3__["default"].lineChartOptions));
      this.chartOptions.fill.gradient.gradientToColors = [this.gradientToColor(this.colorTo || this.color)];
      this.chartOptions.colors = [this.getHex(this.color)];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Icons/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      icons: [{
        code: 'icon-alert-octagon',
        name: 'icon-alert-octagon'
      }, {
        code: 'icon-alert-circle',
        name: 'icon-alert-circle'
      }, {
        code: 'icon-activity',
        name: 'icon-activity'
      }, {
        code: 'icon-alert-triangle',
        name: 'icon-alert-triangle'
      }, {
        code: 'icon-align-center',
        name: 'icon-align-center'
      }, {
        code: 'icon-airplay',
        name: 'icon-airplay'
      }, {
        code: 'icon-align-justify',
        name: 'icon-align-justify'
      }, {
        code: 'icon-align-left',
        name: 'icon-align-left'
      }, {
        code: 'icon-align-right',
        name: 'icon-align-right'
      }, {
        code: 'icon-arrow-down-left',
        name: 'icon-arrow-down-left'
      }, {
        code: 'icon-arrow-down-right',
        name: 'icon-arrow-down-right'
      }, {
        code: 'icon-anchor',
        name: 'icon-anchor'
      }, {
        code: 'icon-aperture',
        name: 'icon-aperture'
      }, {
        code: 'icon-arrow-left',
        name: 'icon-arrow-left'
      }, {
        code: 'icon-arrow-right',
        name: 'icon-arrow-right'
      }, {
        code: 'icon-arrow-down',
        name: 'icon-arrow-down'
      }, {
        code: 'icon-arrow-up-left',
        name: 'icon-arrow-up-left'
      }, {
        code: 'icon-arrow-up-right',
        name: 'icon-arrow-up-right'
      }, {
        code: 'icon-arrow-up',
        name: 'icon-arrow-up'
      }, {
        code: 'icon-award',
        name: 'icon-award'
      }, {
        code: 'icon-bar-chart',
        name: 'icon-bar-chart'
      }, {
        code: 'icon-at-sign',
        name: 'icon-at-sign'
      }, {
        code: 'icon-bar-chart-2',
        name: 'icon-bar-chart-2'
      }, {
        code: 'icon-battery-charging',
        name: 'icon-battery-charging'
      }, {
        code: 'icon-bell-off',
        name: 'icon-bell-off'
      }, {
        code: 'icon-battery',
        name: 'icon-battery'
      }, {
        code: 'icon-bluetooth',
        name: 'icon-bluetooth'
      }, {
        code: 'icon-bell',
        name: 'icon-bell'
      }, {
        code: 'icon-book',
        name: 'icon-book'
      }, {
        code: 'icon-briefcase',
        name: 'icon-briefcase'
      }, {
        code: 'icon-camera-off',
        name: 'icon-camera-off'
      }, {
        code: 'icon-calendar',
        name: 'icon-calendar'
      }, {
        code: 'icon-bookmark',
        name: 'icon-bookmark'
      }, {
        code: 'icon-box',
        name: 'icon-box'
      }, {
        code: 'icon-camera',
        name: 'icon-camera'
      }, {
        code: 'icon-check-circle',
        name: 'icon-check-circle'
      }, {
        code: 'icon-check',
        name: 'icon-check'
      }, {
        code: 'icon-check-square',
        name: 'icon-check-square'
      }, {
        code: 'icon-cast',
        name: 'icon-cast'
      }, {
        code: 'icon-chevron-down',
        name: 'icon-chevron-down'
      }, {
        code: 'icon-chevron-left',
        name: 'icon-chevron-left'
      }, {
        code: 'icon-chevron-right',
        name: 'icon-chevron-right'
      }, {
        code: 'icon-chevron-up',
        name: 'icon-chevron-up'
      }, {
        code: 'icon-chevrons-down',
        name: 'icon-chevrons-down'
      }, {
        code: 'icon-chevrons-right',
        name: 'icon-chevrons-right'
      }, {
        code: 'icon-chevrons-up',
        name: 'icon-chevrons-up'
      }, {
        code: 'icon-chevrons-left',
        name: 'icon-chevrons-left'
      }, {
        code: 'icon-circle',
        name: 'icon-circle'
      }, {
        code: 'icon-clipboard',
        name: 'icon-clipboard'
      }, {
        code: 'icon-chrome',
        name: 'icon-chrome'
      }, {
        code: 'icon-clock',
        name: 'icon-clock'
      }, {
        code: 'icon-cloud-lightning',
        name: 'icon-cloud-lightning'
      }, {
        code: 'icon-cloud-drizzle',
        name: 'icon-cloud-drizzle'
      }, {
        code: 'icon-cloud-rain',
        name: 'icon-cloud-rain'
      }, {
        code: 'icon-cloud-off',
        name: 'icon-cloud-off'
      }, {
        code: 'icon-codepen',
        name: 'icon-codepen'
      }, {
        code: 'icon-cloud-snow',
        name: 'icon-cloud-snow'
      }, {
        code: 'icon-compass',
        name: 'icon-compass'
      }, {
        code: 'icon-copy',
        name: 'icon-copy'
      }, {
        code: 'icon-corner-down-right',
        name: 'icon-corner-down-right'
      }, {
        code: 'icon-corner-down-left',
        name: 'icon-corner-down-left'
      }, {
        code: 'icon-corner-left-down',
        name: 'icon-corner-left-down'
      }, {
        code: 'icon-corner-left-up',
        name: 'icon-corner-left-up'
      }, {
        code: 'icon-corner-up-left',
        name: 'icon-corner-up-left'
      }, {
        code: 'icon-corner-up-right',
        name: 'icon-corner-up-right'
      }, {
        code: 'icon-corner-right-down',
        name: 'icon-corner-right-down'
      }, {
        code: 'icon-corner-right-up',
        name: 'icon-corner-right-up'
      }, {
        code: 'icon-cpu',
        name: 'icon-cpu'
      }, {
        code: 'icon-credit-card',
        name: 'icon-credit-card'
      }, {
        code: 'icon-crosshair',
        name: 'icon-crosshair'
      }, {
        code: 'icon-disc',
        name: 'icon-disc'
      }, {
        code: 'icon-delete',
        name: 'icon-delete'
      }, {
        code: 'icon-download-cloud',
        name: 'icon-download-cloud'
      }, {
        code: 'icon-download',
        name: 'icon-download'
      }, {
        code: 'icon-droplet',
        name: 'icon-droplet'
      }, {
        code: 'icon-edit-2',
        name: 'icon-edit-2'
      }, {
        code: 'icon-edit',
        name: 'icon-edit'
      }, {
        code: 'icon-edit-1',
        name: 'icon-edit-1'
      }, {
        code: 'icon-external-link',
        name: 'icon-external-link'
      }, {
        code: 'icon-eye',
        name: 'icon-eye'
      }, {
        code: 'icon-feather',
        name: 'icon-feather'
      }, {
        code: 'icon-facebook',
        name: 'icon-facebook'
      }, {
        code: 'icon-file-minus',
        name: 'icon-file-minus'
      }, {
        code: 'icon-eye-off',
        name: 'icon-eye-off'
      }, {
        code: 'icon-fast-forward',
        name: 'icon-fast-forward'
      }, {
        code: 'icon-file-text',
        name: 'icon-file-text'
      }, {
        code: 'icon-film',
        name: 'icon-film'
      }, {
        code: 'icon-file',
        name: 'icon-file'
      }, {
        code: 'icon-file-plus',
        name: 'icon-file-plus'
      }, {
        code: 'icon-folder',
        name: 'icon-folder'
      }, {
        code: 'icon-filter',
        name: 'icon-filter'
      }, {
        code: 'icon-flag',
        name: 'icon-flag'
      }, {
        code: 'icon-globe',
        name: 'icon-globe'
      }, {
        code: 'icon-grid',
        name: 'icon-grid'
      }, {
        code: 'icon-heart',
        name: 'icon-heart'
      }, {
        code: 'icon-home',
        name: 'icon-home'
      }, {
        code: 'icon-github',
        name: 'icon-github'
      }, {
        code: 'icon-image',
        name: 'icon-image'
      }, {
        code: 'icon-inbox',
        name: 'icon-inbox'
      }, {
        code: 'icon-layers',
        name: 'icon-layers'
      }, {
        code: 'icon-info',
        name: 'icon-info'
      }, {
        code: 'icon-instagram',
        name: 'icon-instagram'
      }, {
        code: 'icon-layout',
        name: 'icon-layout'
      }, {
        code: 'icon-link-2',
        name: 'icon-link-2'
      }, {
        code: 'icon-life-buoy',
        name: 'icon-life-buoy'
      }, {
        code: 'icon-link',
        name: 'icon-link'
      }, {
        code: 'icon-log-in',
        name: 'icon-log-in'
      }, {
        code: 'icon-list',
        name: 'icon-list'
      }, {
        code: 'icon-lock',
        name: 'icon-lock'
      }, {
        code: 'icon-log-out',
        name: 'icon-log-out'
      }, {
        code: 'icon-loader',
        name: 'icon-loader'
      }, {
        code: 'icon-mail',
        name: 'icon-mail'
      }, {
        code: 'icon-maximize-2',
        name: 'icon-maximize-2'
      }, {
        code: 'icon-map',
        name: 'icon-map'
      }, {
        code: 'icon-map-pin',
        name: 'icon-map-pin'
      }, {
        code: 'icon-menu',
        name: 'icon-menu'
      }, {
        code: 'icon-message-circle',
        name: 'icon-message-circle'
      }, {
        code: 'icon-message-square',
        name: 'icon-message-square'
      }, {
        code: 'icon-minimize-2',
        name: 'icon-minimize-2'
      }, {
        code: 'icon-mic-off',
        name: 'icon-mic-off'
      }, {
        code: 'icon-minus-circle',
        name: 'icon-minus-circle'
      }, {
        code: 'icon-mic',
        name: 'icon-mic'
      }, {
        code: 'icon-minus-square',
        name: 'icon-minus-square'
      }, {
        code: 'icon-minus',
        name: 'icon-minus'
      }, {
        code: 'icon-moon',
        name: 'icon-moon'
      }, {
        code: 'icon-monitor',
        name: 'icon-monitor'
      }, {
        code: 'icon-more-vertical',
        name: 'icon-more-vertical'
      }, {
        code: 'icon-more-horizontal',
        name: 'icon-more-horizontal'
      }, {
        code: 'icon-move',
        name: 'icon-move'
      }, {
        code: 'icon-music',
        name: 'icon-music'
      }, {
        code: 'icon-navigation-2',
        name: 'icon-navigation-2'
      }, {
        code: 'icon-navigation',
        name: 'icon-navigation'
      }, {
        code: 'icon-octagon',
        name: 'icon-octagon'
      }, {
        code: 'icon-package',
        name: 'icon-package'
      }, {
        code: 'icon-pause-circle',
        name: 'icon-pause-circle'
      }, {
        code: 'icon-pause',
        name: 'icon-pause'
      }, {
        code: 'icon-percent',
        name: 'icon-percent'
      }, {
        code: 'icon-phone-call',
        name: 'icon-phone-call'
      }, {
        code: 'icon-phone-forwarded',
        name: 'icon-phone-forwarded'
      }, {
        code: 'icon-phone-missed',
        name: 'icon-phone-missed'
      }, {
        code: 'icon-phone-off',
        name: 'icon-phone-off'
      }, {
        code: 'icon-phone-incoming',
        name: 'icon-phone-incoming'
      }, {
        code: 'icon-phone',
        name: 'icon-phone'
      }, {
        code: 'icon-phone-outgoing',
        name: 'icon-phone-outgoing'
      }, {
        code: 'icon-pie-chart',
        name: 'icon-pie-chart'
      }, {
        code: 'icon-play-circle',
        name: 'icon-play-circle'
      }, {
        code: 'icon-play',
        name: 'icon-play'
      }, {
        code: 'icon-plus-square',
        name: 'icon-plus-square'
      }, {
        code: 'icon-plus-circle',
        name: 'icon-plus-circle'
      }, {
        code: 'icon-plus',
        name: 'icon-plus'
      }, {
        code: 'icon-pocket',
        name: 'icon-pocket'
      }, {
        code: 'icon-printer',
        name: 'icon-printer'
      }, {
        code: 'icon-power',
        name: 'icon-power'
      }, {
        code: 'icon-radio',
        name: 'icon-radio'
      }, {
        code: 'icon-repeat',
        name: 'icon-repeat'
      }, {
        code: 'icon-refresh-ccw',
        name: 'icon-refresh-ccw'
      }, {
        code: 'icon-rewind',
        name: 'icon-rewind'
      }, {
        code: 'icon-rotate-ccw',
        name: 'icon-rotate-ccw'
      }, {
        code: 'icon-refresh-cw',
        name: 'icon-refresh-cw'
      }, {
        code: 'icon-rotate-cw',
        name: 'icon-rotate-cw'
      }, {
        code: 'icon-save',
        name: 'icon-save'
      }, {
        code: 'icon-search',
        name: 'icon-search'
      }, {
        code: 'icon-server',
        name: 'icon-server'
      }, {
        code: 'icon-scissors',
        name: 'icon-scissors'
      }, {
        code: 'icon-share-2',
        name: 'icon-share-2'
      }, {
        code: 'icon-share',
        name: 'icon-share'
      }, {
        code: 'icon-shield',
        name: 'icon-shield'
      }, {
        code: 'icon-settings',
        name: 'icon-settings'
      }, {
        code: 'icon-skip-back',
        name: 'icon-skip-back'
      }, {
        code: 'icon-shuffle',
        name: 'icon-shuffle'
      }, {
        code: 'icon-sidebar',
        name: 'icon-sidebar'
      }, {
        code: 'icon-skip-forward',
        name: 'icon-skip-forward'
      }, {
        code: 'icon-slack',
        name: 'icon-slack'
      }, {
        code: 'icon-slash',
        name: 'icon-slash'
      }, {
        code: 'icon-smartphone',
        name: 'icon-smartphone'
      }, {
        code: 'icon-square',
        name: 'icon-square'
      }, {
        code: 'icon-speaker',
        name: 'icon-speaker'
      }, {
        code: 'icon-star',
        name: 'icon-star'
      }, {
        code: 'icon-stop-circle',
        name: 'icon-stop-circle'
      }, {
        code: 'icon-sun',
        name: 'icon-sun'
      }, {
        code: 'icon-sunrise',
        name: 'icon-sunrise'
      }, {
        code: 'icon-tablet',
        name: 'icon-tablet'
      }, {
        code: 'icon-tag',
        name: 'icon-tag'
      }, {
        code: 'icon-sunset',
        name: 'icon-sunset'
      }, {
        code: 'icon-target',
        name: 'icon-target'
      }, {
        code: 'icon-thermometer',
        name: 'icon-thermometer'
      }, {
        code: 'icon-thumbs-up',
        name: 'icon-thumbs-up'
      }, {
        code: 'icon-thumbs-down',
        name: 'icon-thumbs-down'
      }, {
        code: 'icon-toggle-left',
        name: 'icon-toggle-left'
      }, {
        code: 'icon-toggle-right',
        name: 'icon-toggle-right'
      }, {
        code: 'icon-trash-2',
        name: 'icon-trash-2'
      }, {
        code: 'icon-trash',
        name: 'icon-trash'
      }, {
        code: 'icon-trending-up',
        name: 'icon-trending-up'
      }, {
        code: 'icon-trending-down',
        name: 'icon-trending-down'
      }, {
        code: 'icon-triangle',
        name: 'icon-triangle'
      }, {
        code: 'icon-type',
        name: 'icon-type'
      }, {
        code: 'icon-twitter',
        name: 'icon-twitter'
      }, {
        code: 'icon-upload',
        name: 'icon-upload'
      }, {
        code: 'icon-umbrella',
        name: 'icon-umbrella'
      }, {
        code: 'icon-upload-cloud',
        name: 'icon-upload-cloud'
      }, {
        code: 'icon-unlock',
        name: 'icon-unlock'
      }, {
        code: 'icon-user-check',
        name: 'icon-user-check'
      }, {
        code: 'icon-user-minus',
        name: 'icon-user-minus'
      }, {
        code: 'icon-user-plus',
        name: 'icon-user-plus'
      }, {
        code: 'icon-user-x',
        name: 'icon-user-x'
      }, {
        code: 'icon-user',
        name: 'icon-user'
      }, {
        code: 'icon-users',
        name: 'icon-users'
      }, {
        code: 'icon-video-off',
        name: 'icon-video-off'
      }, {
        code: 'icon-video',
        name: 'icon-video'
      }, {
        code: 'icon-voicemail',
        name: 'icon-voicemail'
      }, {
        code: 'icon-volume-x',
        name: 'icon-volume-x'
      }, {
        code: 'icon-volume-2',
        name: 'icon-volume-2'
      }, {
        code: 'icon-volume-1',
        name: 'icon-volume-1'
      }, {
        code: 'icon-volume',
        name: 'icon-volume'
      }, {
        code: 'icon-watch',
        name: 'icon-watch'
      }, {
        code: 'icon-wifi',
        name: 'icon-wifi'
      }, {
        code: 'icon-x-square',
        name: 'icon-x-square'
      }, {
        code: 'icon-wind',
        name: 'icon-wind'
      }, {
        code: 'icon-x',
        name: 'icon-x'
      }, {
        code: 'icon-x-circle',
        name: 'icon-x-circle'
      }, {
        code: 'icon-zap',
        name: 'icon-zap'
      }, {
        code: 'icon-zoom-in',
        name: 'icon-zoom-in'
      }, {
        code: 'icon-zoom-out',
        name: 'icon-zoom-out'
      }, {
        code: 'icon-command',
        name: 'icon-command'
      }, {
        code: 'icon-cloud',
        name: 'icon-cloud'
      }, {
        code: 'icon-hash',
        name: 'icon-hash'
      }, {
        code: 'icon-headphones',
        name: 'icon-headphones'
      }, {
        code: 'icon-underline',
        name: 'icon-underline'
      }, {
        code: 'icon-italic',
        name: 'icon-italic'
      }, {
        code: 'icon-bold',
        name: 'icon-bold'
      }, {
        code: 'icon-crop',
        name: 'icon-crop'
      }, {
        code: 'icon-help-circle',
        name: 'icon-help-circle'
      }, {
        code: 'icon-paperclip',
        name: 'icon-paperclip'
      }, {
        code: 'icon-shopping-cart',
        name: 'icon-shopping-cart'
      }, {
        code: 'icon-tv',
        name: 'icon-tv'
      }, {
        code: 'icon-wifi-off',
        name: 'icon-wifi-off'
      }, {
        code: 'icon-minimize',
        name: 'icon-minimize'
      }, {
        code: 'icon-maximize',
        name: 'icon-maximize'
      }, {
        code: 'icon-gitlab',
        name: 'icon-gitlab'
      }, {
        code: 'icon-sliders',
        name: 'icon-sliders'
      }, {
        code: 'icon-star-on',
        name: 'icon-star-on'
      }, {
        code: 'icon-heart-on',
        name: 'icon-heart-on'
      }, {
        code: 'icon-archive',
        name: 'icon-archive'
      }, {
        code: 'icon-arrow-down-circle',
        name: 'icon-arrow-down-circle'
      }, {
        code: 'icon-arrow-up-circle',
        name: 'icon-arrow-up-circle'
      }, {
        code: 'icon-arrow-left-circle',
        name: 'icon-arrow-left-circle'
      }, {
        code: 'icon-arrow-right-circle',
        name: 'icon-arrow-right-circle'
      }, {
        code: 'icon-bar-chart-line-',
        name: 'icon-bar-chart-line-'
      }, {
        code: 'icon-bar-chart-line',
        name: 'icon-bar-chart-line'
      }, {
        code: 'icon-book-open',
        name: 'icon-book-open'
      }, {
        code: 'icon-code',
        name: 'icon-code'
      }, {
        code: 'icon-database',
        name: 'icon-database'
      }, {
        code: 'icon-dollar-sign',
        name: 'icon-dollar-sign'
      }, {
        code: 'icon-folder-plus',
        name: 'icon-folder-plus'
      }, {
        code: 'icon-gift',
        name: 'icon-gift'
      }, {
        code: 'icon-folder-minus',
        name: 'icon-folder-minus'
      }, {
        code: 'icon-git-commit',
        name: 'icon-git-commit'
      }, {
        code: 'icon-git-branch',
        name: 'icon-git-branch'
      }, {
        code: 'icon-git-pull-request',
        name: 'icon-git-pull-request'
      }, {
        code: 'icon-git-merge',
        name: 'icon-git-merge'
      }, {
        code: 'icon-linkedin',
        name: 'icon-linkedin'
      }, {
        code: 'icon-hard-drive',
        name: 'icon-hard-drive'
      }, {
        code: 'icon-more-vertical-',
        name: 'icon-more-vertical-'
      }, {
        code: 'icon-more-horizontal-',
        name: 'icon-more-horizontal-'
      }, {
        code: 'icon-rss',
        name: 'icon-rss'
      }, {
        code: 'icon-send',
        name: 'icon-send'
      }, {
        code: 'icon-shield-off',
        name: 'icon-shield-off'
      }, {
        code: 'icon-shopping-bag',
        name: 'icon-shopping-bag'
      }, {
        code: 'icon-terminal',
        name: 'icon-terminal'
      }, {
        code: 'icon-truck',
        name: 'icon-truck'
      }, {
        code: 'icon-zap-off',
        name: 'icon-zap-off'
      }, {
        code: 'icon-youtube',
        name: 'icon-youtube'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] td[data-v-2e86cfe3] {\n  border-bottom: 1px solid #999;\n  padding: 10px;\n}\n.feather[data-v-2e86cfe3] {\n  font-size: 40px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vx-card", { staticClass: "overflow-hidden" }, [
    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
      _c(
        "div",
        {
          staticClass: "p-6",
          class: {
            "flex justify-between flex-row-reverse items-center": _vm.iconRight,
            "text-center": !_vm.iconRight && _vm.hideChart,
            "pb-0": !_vm.hideChart
          }
        },
        [
          _c("feather-icon", {
            staticClass: "p-3 inline-flex rounded-full",
            class: ["text-" + _vm.color, { "mb-4": !_vm.iconRight }],
            style: { background: "rgba(var(--vs-" + _vm.color + "),.15)" },
            attrs: { icon: _vm.icon }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "truncate" }, [
            _c("h2", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      !_vm.hideChart
        ? _c(
            "div",
            { staticClass: "line-area-chart" },
            [
              _c("vue-apex-charts", {
                ref: "apexChart",
                attrs: {
                  type: _vm.type,
                  height: "100",
                  width: "100%",
                  options: _vm.chartOptions,
                  series: _vm.chartData
                }
              })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=template&id=2e86cfe3&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Icons/index.vue?vue&type=template&id=2e86cfe3&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.icons, function(icon) {
          return _c("tr", [
            _c("td", [_vm._v(_vm._s(icon.name))]),
            _vm._v(" "),
            _c("td", [_c("i", { staticClass: "feather", class: icon.code })])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("name")]),
        _vm._v(" "),
        _c("th", [_vm._v("icon")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/statistics-cards/chartConfigs.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/chartConfigs.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  areaChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.5,
        opacityTo: 0.2,
        stops: [0, 80, 100]
      }
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    yaxis: [{
      y: 0,
      offsetX: 0,
      offsetY: 0,
      padding: {
        left: 0,
        right: 0
      }
    }],
    tooltip: {
      x: {
        show: false
      }
    }
  },
  lineChartOptions: {
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 0,
        blur: 4,
        opacity: 0.10
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'numeric'
    },
    // colors: ['#7367F0'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        // gradientToColors: ['#A9A2F6'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 5
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Icons/index.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/Icons/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2e86cfe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2e86cfe3&scoped=true& */ "./resources/js/src/views/Icons/index.vue?vue&type=template&id=2e86cfe3&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Icons/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2e86cfe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true& */ "./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2e86cfe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2e86cfe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e86cfe3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Icons/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Icons/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Icons/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e86cfe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=style&index=0&id=2e86cfe3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e86cfe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e86cfe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e86cfe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e86cfe3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Icons/index.vue?vue&type=template&id=2e86cfe3&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Icons/index.vue?vue&type=template&id=2e86cfe3&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2e86cfe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2e86cfe3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Icons/index.vue?vue&type=template&id=2e86cfe3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2e86cfe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2e86cfe3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);