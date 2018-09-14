<!-- first_page -->
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
    name: 'first-page',
    data() {
        return {
            rootClass: 'first_page',
            tabOptions: {
                activeColor: '#fff',
                lineWidth: 0
            },
            colors: {
                financeColor: { // 财务指标
                    text: '#ccc',
                    axis: '#ccc',
                    series: '#05B2D9'
                },
                contracstColor: { // 同行业对比
                    text: '#ccc',
                    series: {
                        first: '#f08833',
                        second: '#efbc02',
                        third: '#05B2D9'
                    }
                },
                yjbhColor: { // 业绩变化
                    text: '#fff',
                    axis: '#ccc',
                    series: {
                        first: '#05B2D9',
                        second: '#F08833'
                    }
                },
                compositionColor: { // 年报主营构成
                    text: '#fff',
                    colors: ['#0c91d1', '#05b2d9', '#f08833', '#00d9be', '#efbc02']
                }
            }
        };
    },
    methods: {
        // 换肤
        clothHandle() {
            this.$router.push({ name: 'Second' });
        }
    },
    components: {
        YearPage
    }
};
</script>
<style lang='scss'>
    @import "../../styles/pages/quarter/first.scss";
</style>
