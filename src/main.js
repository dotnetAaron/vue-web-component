import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/WebmdComponent';

const CustomElement = wrap(Vue, VueWebComponent);

window.customElements.define('webmd-custom-element', CustomElement);