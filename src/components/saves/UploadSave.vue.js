import { ref } from 'vue';
import CloudArrowUpIcon from '../icons/CloudArrowUpIcon.vue';
const fileProperties = ref({
    name: '',
    content: null,
});
const emit = defineEmits();
const isDragging = ref(false);
const fileInput = ref(null);
const handleFile = (files) => {
    if (!files || files.length === 0)
        return;
    const file = files[0];
    const allowedExtensions = ['.sav', '.bak'];
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
        alert('Only .sav and .bak files are allowed.');
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        fileProperties.value.content = reader.result;
        fileProperties.value.name = file.name;
        emit('file-read', {
            name: file.name,
            content: fileProperties.value.content,
        });
    };
    reader.onerror = () => {
        alert('Failed to read file.');
    };
    reader.readAsText(file); // Change to readAsArrayBuffer if needed
};
const triggerFileInput = () => {
    fileInput.value?.click();
};
const onFileChange = (event) => {
    const target = event.target;
    handleFile(target.files);
};
const onDrop = (event) => {
    isDragging.value = false;
    handleFile(event.dataTransfer?.files || null);
};
const onDragOver = () => {
    isDragging.value = true;
};
const onDragLeave = () => {
    isDragging.value = false;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onDragover: (__VLS_ctx.onDragOver) },
    ...{ onDragleave: (__VLS_ctx.onDragLeave) },
    ...{ onDrop: (__VLS_ctx.onDrop) },
    ...{ onClick: (__VLS_ctx.triggerFileInput) },
    role: "button",
    ...{ class: "d-flex flex-row align-items-center justify-content-center border-dashed p-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex flex-row align-items-center justify-content-center" },
    ...{ class: ({
            'bg-blue-50 border-blue-400': __VLS_ctx.isDragging,
            'border-gray-300 hover:border-blue-400 hover:bg-blue-50': !__VLS_ctx.isDragging,
        }) },
});
/** @type {[typeof CloudArrowUpIcon, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(CloudArrowUpIcon, new CloudArrowUpIcon({
    ...{ class: "w-25 h-25 m-1" },
}));
const __VLS_1 = __VLS_0({
    ...{ class: "w-25 h-25 m-1" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-gray-600 mb-0 ml-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onChange: (__VLS_ctx.onFileChange) },
    ref: "fileInput",
    type: "file",
    hidden: true,
    accept: ".sav,.bak",
    multiple: (false),
});
/** @type {typeof __VLS_ctx.fileInput} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['border-dashed']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-row']} */ ;
/** @type {__VLS_StyleScopedClasses['align-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-content-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-50']} */ ;
/** @type {__VLS_StyleScopedClasses['border-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-50']} */ ;
/** @type {__VLS_StyleScopedClasses['w-25']} */ ;
/** @type {__VLS_StyleScopedClasses['h-25']} */ ;
/** @type {__VLS_StyleScopedClasses['m-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            CloudArrowUpIcon: CloudArrowUpIcon,
            isDragging: isDragging,
            fileInput: fileInput,
            triggerFileInput: triggerFileInput,
            onFileChange: onFileChange,
            onDrop: onDrop,
            onDragOver: onDragOver,
            onDragLeave: onDragLeave,
        };
    },
    __typeEmits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
});
; /* PartiallyEnd: #4569/main.vue */
