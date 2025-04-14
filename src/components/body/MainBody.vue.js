import { ref } from 'vue';
import Explaination from '../explanation/Explaination.vue';
import PageHeader from '../header/PageHeader.vue';
import { processFileData } from '@/processor/process';
import { getDistinctByKey, getDistinctCardItemsWithCount } from '@/processor/helpers/getDistinct';
import CardContainer from '../card/CardContainer.vue';
const worldData = ref();
const character = ref(); // todo
const bosses = ref();
const items = ref();
const sideQuests = ref();
// Handle file contents
const handleFileContents = (payload) => {
    // Process File contents into containers
    const fileData = processFileData(payload.content?.toString());
    worldData.value = fileData?.worldData;
    bosses.value = getDistinctByKey(fileData?.bosses, 'name').sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    sideQuests.value = getDistinctByKey(fileData?.sideQuests, 'name').sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    items.value = getDistinctCardItemsWithCount(fileData?.items ?? []).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof PageHeader, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(PageHeader, new PageHeader({
    ...{ 'onFileRead': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onFileRead': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    onFileRead: (__VLS_ctx.handleFileContents)
};
var __VLS_2;
/** @type {[typeof Explaination, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(Explaination, new Explaination({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
if (__VLS_ctx.worldData) {
    /** @type {[typeof CardContainer, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
        data: (__VLS_ctx.worldData.locations),
        title: ('World Locations | Current Location: ' + __VLS_ctx.worldData?.currentMainLocation),
    }));
    const __VLS_11 = __VLS_10({
        data: (__VLS_ctx.worldData.locations),
        title: ('World Locations | Current Location: ' + __VLS_ctx.worldData?.currentMainLocation),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
}
if (__VLS_ctx.sideQuests) {
    /** @type {[typeof CardContainer, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
        data: (__VLS_ctx.sideQuests),
        title: ('Side Quests'),
    }));
    const __VLS_14 = __VLS_13({
        data: (__VLS_ctx.sideQuests),
        title: ('Side Quests'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
if (__VLS_ctx.character) {
    /** @type {[typeof CardContainer, ]} */ ;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
        data: (__VLS_ctx.character),
        title: ('Character Information'),
    }));
    const __VLS_17 = __VLS_16({
        data: (__VLS_ctx.character),
        title: ('Character Information'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
}
if (__VLS_ctx.bosses) {
    /** @type {[typeof CardContainer, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
        data: (__VLS_ctx.bosses),
        title: ('Bosses'),
    }));
    const __VLS_20 = __VLS_19({
        data: (__VLS_ctx.bosses),
        title: ('Bosses'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
}
if (__VLS_ctx.items) {
    /** @type {[typeof CardContainer, ]} */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(CardContainer, new CardContainer({
        data: (__VLS_ctx.items),
        title: ('Items'),
    }));
    const __VLS_23 = __VLS_22({
        data: (__VLS_ctx.items),
        title: ('Items'),
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Explaination: Explaination,
            PageHeader: PageHeader,
            CardContainer: CardContainer,
            worldData: worldData,
            character: character,
            bosses: bosses,
            items: items,
            sideQuests: sideQuests,
            handleFileContents: handleFileContents,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
