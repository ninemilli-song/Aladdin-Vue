<!-- third_page -->
<template>
<div>
    <year-page
        v-bind:tabOptions="tabOptions"
        v-bind:colors="colors"
        v-bind:rootClass="rootClass"
        v-on:cloth-change="clothHandle"
    />
</div>
</template>

<script>
import YearPage from '../../components/YearPage.vue';

export default {
    name: 'third-page',
    data() {
        return {
            rootClass: 'first_page',
            tabOptions: {
                activeColor: '#000',
                lineWidth: 0
            },
            colors: {
                financeColor: { // 财务指标
                    text: '#333',
                    axis: '#000',
                    series: '#03A0A7'
                },
                contracstColor: { // 同行业对比
                    text: '#000',
                    series: {
                        first: '#355e82',
                        second: '#b73131',
                        third: '#03A0A7'
                    }
                },
                yjbhColor: { // 业绩变化
                    text: '#333',
                    axis: '#333',
                    series: {
                        first: '#03A0A7',
                        second: '#B73131'
                    }
                },
                compositionColor: { // 年报主营构成
                    text: '#000',
                    colors: ['#03a0a7', '#3281be', '#b73131', '#00d9be', '#fdc300']
                }
            }
        };
    },
    methods: {
        // 换肤
        clothHandle() {
            this.$router.push({ name: 'Fourth' });
        }
    },
    components: {
        YearPage
    }
};
</script>
<style lang='scss'>
    @import "../../styles/pages/quarter/third.scss";
</style>
