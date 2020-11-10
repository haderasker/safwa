import Vue from 'vue'
import convertToTitle from "./convertToTitle";

// hello_world => Hello World
Vue.filter('title', convertToTitle)
