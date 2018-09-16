<!-- fourth_page -->
<template>
<div class="fourth_page">
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
    name: 'fourth-page',
    data() {
        return {
            rootClass: 'fourth_page',
            tabOptions: {
                activeColor: '#000',
                lineWidth: 0
            },
            colors: {
                financeColor: { // 财务指标
                    text: '#333',
                    axis: '#000',
                    series: '#FFA430'
                },
                contracstColor: { // 同行业对比
                    text: '#000',
                    series: {
                        first: '#9028da',
                        second: '#b853ff',
                        third: '#FFA430'
                    }
                },
                yjbhColor: { // 业绩变化
                    text: '#333',
                    axis: '#333',
                    series: {
                        first: '#FFA430',
                        second: '#B853FF'
                    }
                },
                compositionColor: { // 年报主营构成
                    text: '#000',
                    colors: ['#fdc300', '#44a1e8', '#3281be', '#c157ea', '#00d9be']
                }
            }
        };
    },
    methods: {
        // 换肤
        clothHandle() {
            this.$router.push({ name: 'First' });
        }
    },
    components: {
        YearPage
    }
};
</script>
<style lang='scss' scoped>
    @import "../../styles/pages/quarter/fourth.scss";
</style>
