import { ref, computed } from 'vue';
import { ImageFiles } from '@/constants/images';
import { Descriptions } from '@/constants/descriptions';
const props = defineProps();
const expanded = ref(false);
const toggleExpand = () => {
    expanded.value = !expanded.value;
};
const imgSrc = computed(() => {
    const editName = props.name?.replace(' ', '').substring(0, props.name.indexOf('x') - 1);
    const imageFileEdit = ImageFiles[editName];
    const imageFile = ImageFiles[props.name];
    if (imageFile) {
        return imageFile;
    }
    else if (imageFileEdit)
        return imageFileEdit;
    return '../src/assets/images/world-stone.png';
});
const description = computed(() => {
    const editName = props.name?.replace(' ', '').substring(0, props.name.indexOf('x') - 1);
    const descriptionEdit = Descriptions[editName];
    const description = Descriptions[props.name];
    if (description) {
        return description;
    }
    else if (descriptionEdit)
        return descriptionEdit;
    return '';
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggleExpand) },
    ...{ class: "m-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "position-relative d-flex justify-content-center align-items-center card shadow-lg border-0 rounded-3 hover-shadow p-3 m-2" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "position-absolute top-0 end-0 mx-3 mt-2" },
    ...{ style: ({
            transform: __VLS_ctx.expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
        }) },
});
if (__VLS_ctx.description && __VLS_ctx.description.length > 120) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: "bi bi-chevron-down fs-1" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.imgSrc),
    ...{ class: "p-2 rounded-circle shadow-lg bg-secondary rounded-3" },
    alt: "Card image",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card-body" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
    ...{ class: "card-title text-wrap text-break text-center" },
});
(props.name?.replace(/([A-Z])/g, ' $1').trim());
if (__VLS_ctx.description) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.hr)({
        ...{ class: "bg-dark border-3 border-bottom" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "card-text text-center" },
    ...{ style: (__VLS_ctx.expanded
            ? 'max-height: none; overflow: visible;'
            : 'max-height: 4.5em; overflow: hidden; text-overflow: ellipsis;') },
});
(__VLS_ctx.description);
/** @type {__VLS_StyleScopedClasses['m-3']} */ ;
/** @type {__VLS_StyleScopedClasses['position-relative']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['border-0']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['hover-shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['m-2']} */ ;
/** @type {__VLS_StyleScopedClasses['position-absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['end-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bi']} */ ;
/** @type {__VLS_StyleScopedClasses['bi-chevron-down']} */ ;
/** @type {__VLS_StyleScopedClasses['fs-1']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-circle']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3']} */ ;
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['card-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['text-break']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-dark']} */ ;
/** @type {__VLS_StyleScopedClasses['border-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-bottom']} */ ;
/** @type {__VLS_StyleScopedClasses['card-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            expanded: expanded,
            toggleExpand: toggleExpand,
            imgSrc: imgSrc,
            description: description,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
