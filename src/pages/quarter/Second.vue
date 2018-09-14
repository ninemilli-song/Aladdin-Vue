<!-- second_page -->
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
    name: 'second-page',
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
                    series: '#44A1E8'
                },
                contracstColor: { // 同行业对比
                    text: '#000',
                    series: {
                        first: '#176cad',
                        second: '#c157ea',
                        third: '#44A1E8'
                    }
                },
                yjbhColor: { // 业绩变化
                    text: '#333',
                    axis: '#333',
                    series: {
                        first: '#44A1E8',
                        second: '#BA44E8'
                    }
                },
                compositionColor: { // 年报主营构成
                    text: '#000',
                    colors: ['#44A1E8', '#3281be', '#c157ea', '#00d9be', '#fdc300']
                }
            }
        };
    },
    methods: {
        // 换肤
        clothHandle() {
            this.$router.push({ name: 'Third' });
        }
    },
    components: {
        YearPage
    }
};
</script>
<style lang='scss'>
    @import "../../styles/pages/quarter/second.scss";
</style>
