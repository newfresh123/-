<template>
    <div class="bg_mall">
        <div class="header">
            <h2>市场行情</h2>
        </div>
        <div class="content">
            <div class="left-content">
                <div class="top1-content">
                    <div class="top1-content-info">
                        <h4>xxxx</h4>
                        <span>xxxxx</span>
                        <span>xxxxx</span>
                    </div>
                    <div class="top1-content-info">
                        <h4>xxxx</h4>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="top1-content-info">
                        <h4>xxxxx</h4>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="top1-content-info">
                        <h4>xxxxx</h4>
                        <span>xxxxx</span>
                        <span>xxxxx</span>
                    </div>
                </div>
                <div class="top2-content">
                    <div class="top2-conten-left">
                        <div ref="echarts2" class="echarts2"></div>
                    </div>
                    <div class="top2-conten-right">
                        <div class="top2-conten-right-header">
                            <h4>xxxx</h4>
                        </div>
                        <div class="top2-conten-right-progress">
                            <div class="top2-conten-righ-info-left">
                                <div class="top2-conten-righ-info-left-text">
                                    <span class="dot"></span>
                                    <span>xxxxx</span>
                                </div>
                                <div class="top2-conten-righ-info-left-text">
                                    <span class="dot"></span>
                                    <span>xxxxx</span>
                                </div>
                                <div class="top2-conten-righ-info-left-text">
                                    <span class="dot"></span>
                                    <span>xxxxx</span>
                                </div>
                                <div class="top2-conten-righ-info-left-text">
                                    <span class="dot"></span>
                                    <span>xxxxx</span>
                                </div>
                                <div class="top2-conten-righ-info-left-text">
                                    <span class="dot"></span>
                                    <span>xxxxx</span>
                                </div>
                                <div class="top2-conten-righ-info-left-text">
                                    <span class="dot"></span>
                                    <span>xxxxx</span>
                                </div>


                            </div>
                            <div class="top2-conten-righ-info">
                                <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                                <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success">
                                </el-progress>
                                <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning">
                                </el-progress>
                                <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
                                </el-progress>
                                <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
                                </el-progress>
                                <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
                                </el-progress>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="top3-content">
                    <div class="top3-conten-left">
                        <div ref="echarts1" class="echarts1"></div>
                    </div>
                    <div class="top3-content-right">
                        <div class="top3-content-right-header">
                            <h3>这里是标题</h3>
                        </div>
                        <div class="top3-content-right-table-content">
                            <div class="top3-content-right-table-content-info">
                                <p>xxx</p>
                                <p>今日xxx</p>
                            </div>
                            <div class="top3-content-right-table-content-info">
                                <p>xxx</p>
                                <p>今日xxx</p>
                            </div>
                            <div class="top3-content-right-table-content-info">
                                <p>xxx</p>
                                <p>今日xxx</p>
                            </div>
                            <div class="top3-content-right-table-content-info">
                                <p>xxx</p>
                                <p>今日xxx</p>
                            </div>
                            <div class="top3-content-right-table-content-info">
                                <p>xxx</p>
                                <p>今日xxx</p>
                            </div>
                            <div class="top3-content-right-table-content-info">
                                <p>xxx</p>
                                <p>今日xxx</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="right-content">
                <div class="top1-content-right">
                    <div class="top1-content-right-header">
                        <h3>title</h3>
                    </div>
                    <div class="top1-conten-right-echart">
                        <div ref="echarts3" class="echarts3"></div>
                    </div>
                </div>
                <div class="top2-content-right">
                    <div class="top2-content-right-title">
                        <h3>
                            title
                        </h3>
                        <div class="top2-content-right-form">
                            <div class="table_th">
                                <div class="tr1 th_style">农产品</div>
                                <div class="tr2 th_style">今日销售量</div>
                                <div class="tr3 th_style">今月销售量</div>
                                <div class="tr4 th_style">总销售量</div>
                            </div>
                            <div class="table_main_body">
                                <div class="table_inner_body" :style="{ top: tableTop + 'px' }">
                                    <div class="table_tr" v-for="(item, index) in tableData" :key="index">
                                        <div class="tr1 tr">{{ item.name }}</div>
                                        <div class="tr2 tr">{{ item.monthBuy }}</div>
                                        <div class="tr3 tr" v-if="item.todayBuy != '-'">{{ item.todayBuy }} ~
                                            {{ item.todayBuy }}</div>
                                        <div class="tr3 tr" v-else>-</div>
                                        <div class="tr4 tr" v-if="item.totalBuy != '-'">{{
                                                Number(item.totalBuy).toFixed(2)
                                        }}
                                            </div>
                                        <div class="tr4 tr" v-else>-</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import { getData } from '../api';
export default {
    data() {
        return {
            tableData: [],
            tableLabel: {
                name: '农产品',
                todayBuy: '今日成交量',
                monthBuy: '本月成交量',
                totalBuy: '总成交量'
            },
            showFlag: true,
            tableTimer: null,
            tableTop: 0,
            tableDataSize: 0,
            componentTimer: null,

            //需要根据情况设置的参数
            title: "排产进度",
            visibleSize: 6, //容器内可视最大完整行数
            lineHeight: 49, //每行的实际高度（包含margin-top/bottom,border等）
            componentTimerInterval: 3600000, //刷新数据的时间间隔
            tableTimerInterval: 100 //向上滚动 1px 所需要的时间，越小越快，推荐值 100

        };
    },
    methods: {
        function() {

        },

        tableActionFun() {
            this.tableDataSize = this.tableData.length;
            //下面的visibleSize是可视范围内能够显示的最大完整数据条数
            if (this.tableDataSize > this.visibleSize) {
                this.tableData = this.tableData.concat(this.tableData);
                this.tableTimerFun();  //列表滚动方法
            } else {
                this.filltableData();  //无需滚动时的数据填充方法，如果没必要，可以删掉
            }
        },

        //列表滚动方法
        tableTimerFun() {
            var count = 0;
            this.tableTimer = setInterval(() => {
                if (count < (this.tableData.length / 2) * this.lineHeight) {
                    this.tableTop -= 1;
                    count++;
                } else {
                    count = 0;
                    this.tableTop = 0;
                }
            }, this.tableTimerInterval);
        },
        componentTimerFun() {
            this.componentTimer = setInterval(() => {
                this.bsGetProductProcess();
            }, this.componentTimerInterval);
        }
    


},
mounted() {
    getData().then(({ data }) => {
        const { tableData } = data.data;
        console.log(data.data);
        this.tableData = tableData;
        const { orderData, userData, videoData } = data.data;
        const echarts2 = echarts.init(this.$refs.echarts2);
        const eachrts2Option = {
            legend: {
                // 图例文字颜色
                textStyle: {
                    color: '#ccc'
                }
            },
            grid: {
                left: '20%'
            },
            // 提示框
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category', // 类目轴
                data: userData.map(item => item.date),
                axisLine: {
                    lineStyle: {
                        color: '#17b3a3'
                    }
                },
                axisLabel: {
                    interval: 0,
                    color: '#ccc'
                }
            },
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#17b3a3'
                        }
                    }
                }
            ],
            color: ['#2ec7c9', '#b6a2de'],
            series: [
                {
                    name: '成交量',
                    data: userData.map(item => item.active),
                    type: 'bar'
                }
            ]
        };
        echarts2.setOption(eachrts2Option);

        const echarts1 = echarts.init(this.$refs.echarts1);
        const eachrts1Option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
                right: '10%',
                data: ['折线一', '折线二']
            },
            grid: {
                x: 40,
                y: 40,
                x2: 20,
                y2: 20,
            },
            toolbox: {
                feature: {
                    //saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    /*inside: true,*/
                    interval: 0,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12

                    }
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolOffset: 12,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00']
            },
            yAxis: {
                type: 'value',

                axisLine: {
                    show: true,
                    symbol: ['none', 'arrow'],
                    symbolOffset: 12,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                }
            },
            series: [
                {
                    name: '折线一',
                    type: 'line',
                    stack: '总量',
                    data: [280, 102, 191, 134, 390, 230, 210],
                    itemStyle: {
                        normal: {
                            color: "#0efdff",//折线点的颜色
                            lineStyle: {
                                color: "#0efdff",//折线的颜色
                                width: 2,
                            }
                        },
                    }
                },
                {
                    name: '折线二',
                    type: 'line',
                    stack: '总量',
                    data: [100, 132, 131, 234, 290, 330, 110]
                },
            ]
        };
        echarts1.setOption(eachrts1Option);
        const echarts3 = echarts.init(this.$refs.echarts3);
        const eachrts3Option = {
            title: {
                text: '数据情况统计',
                subtext: '',
                left: 'right',
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                // orient: 'vertical',
                // top: 'middle',
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 40,
                bottom: 20,
                left: 'right',
                data: ['西凉', '益州', '兖州', '荆州', '幽州'],
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }

            },
            grid: {
                x: '-10%',
                y: 40,
                x2: 20,
                y2: 20,
            },
            color: ['#09d0fb', '#f88cfb', '#95f8fe', '#f9f390', '#ecfeb7'],
            series: [
                {
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: [
                        {
                            value: 1548, name: '幽州',

                        },
                        { value: 535, name: '荆州' },
                        { value: 510, name: '兖州' },
                        { value: 634, name: '益州' },
                        { value: 735, name: '西凉' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        echarts3.setOption(eachrts3Option);
    });
}
};
</script>
<style lang="less" scoped>
.bg_mall {
    background: url(../assets/image-mall/bg2.jpg) no-repeat;
    background-size: 100% 100%;
    height: 88%;
    width: 88%;
    position: absolute;

    .content {
        display: flex;
        height: 88%;
        max-width: 100%;

        .left-content {
            width: 65%;
            height: 100%;
            margin-left: 45px;

            .top1-content {
                display: flex;
                width: 100%;
                height: 15%;

                .top1-content-info {
                    border: 0.008rem solid rgba(14, 253, 255, 0.5);
                    width: 20%;
                    margin: 15px;
                }

                .top1-content-info h4 {

                    color: #fff;
                    margin: 0.02rem 0;
                }

                .top1-content-info span {
                    color: #fff;

                    margin: 0.02rem 0;
                }
            }

            .top2-content {
                display: flex;
                width: 100%;
                height: 35%;

                .top2-conten-left {
                    width: 50%;
                    height: 100%;
                    border: 0.008rem solid rgba(14, 253, 255, 0.5);
                    margin: 15px;

                    .echarts2 {
                        width: 100%;
                        height: 300px;
                    }
                }

                .top2-conten-right {
                    width: 37%;
                    height: 100%;
                    border: 0.008rem solid rgba(14, 253, 255, 0.5);
                    margin: 15px;

                    .top2-conten-right-header {
                        width: 100%;
                        height: 15%;

                        h4 {
                            color: #fff;
                            margin: 0.02rem 0;
                        }

                    }

                    .top2-conten-right-progress {
                        display: flex;
                        height: 85%;

                        .top2-conten-righ-info-left {
                            width: 20%;
                            height: 100%;

                            .top2-conten-righ-info-left-text {

                                position: relative;
                                padding-left: 0.14rem;
                                display: flex;

                            }

                            .top2-conten-righ-info-left-text span {
                                color: #fff;
                                margin-left: 0.5rem;
                                padding-bottom: 18px;
                            }
                        }

                        .top2-conten-righ-info {
                            width: 80%;
                            height: 100%;

                            .el-progress {
                                padding-right: 20px;
                                padding-bottom: 18px !important;


                                .el-progress-bar__outer {
                                    border-radius: inherit;
                                    background-color: transparent !important;
                                }

                            }



                        }
                    }


                }
            }

            .top3-content {
                display: flex;
                width: 100%;
                height: 35%;
                padding-top: 50px;

                .top3-conten-left {
                    width: 50%;
                    height: 100%;
                    border: 0.008rem solid rgba(14, 253, 255, 0.5);
                    margin: 15px;

                    .echarts1 {
                        width: 100%;
                        height: 250px;

                    }
                }

                .top3-content-right {
                    width: 37%;
                    height: 100%;
                    border: 0.008rem solid rgba(14, 253, 255, 0.5);
                    margin: 15px;

                    .top3-content-right-header {
                        width: 100%;
                        height: 25%;

                        h3 {
                            font-size: 1rem;
                            color: #fff;
                            padding: 10px;
                        }
                    }

                    .top3-content-right-table-content {
                        width: 100%;
                        height: 75%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;

                        .top3-content-right-table-content-info {
                            width: 33.33%;
                            height: 50%;

                            p {
                                color: #fff;
                                padding: 10px;
                            }
                        }
                    }
                }
            }
        }

        .right-content {
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .top1-content-right {
                width: 100%;
                height: 45%;
                border: 0.008rem solid rgba(14, 253, 255, 0.5);

                .top1-content-right-header {
                    padding: 10px;
                    height: 15%;

                    h3 {
                        color: #fff;
                    }
                }

                .top1-conten-right-echart {
                    height: 85%;
                    width: 100%;

                    .echarts3 {
                        width: 100%;
                        height: 100%;
                    }
                }

            }

            .top2-content-right {
                width: 100%;
                height: 45%;
                border: 0.008rem solid rgba(14, 253, 255, 0.5);

                .top2-content-right-title {
                    padding: 10px;
                    height: 15%;

                    h3 {
                        color: #fff;
                    }
                }

                .top2-content-right-form {
                    width: 100%;
                    height: 85%;

                    .table_th {
                        width: 100%;
                        display: flex;
                        height: 40px;
                        line-height: 40px;

                        .tr1 {
                            width: 28%;
                        }

                        .tr2 {
                            width: 15%;
                        }

                        .tr3 {
                            width: 35%;
                            font-size: 13px;
                        }

                        .tr4 {
                            flex: 1;
                        }

                        .th_style {
                            color: rgb(0, 221, 253);
                            font-weight: bold;
                            font-size: 18px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            box-sizing: border-box;
                            padding: 0 5px;
                            text-align: center;
                        }

                    }

                    .table_main_body {
                        width: 100%;
                        height: 294px;
                        overflow: hidden;
                        position: relative;

                        .table_inner_body {
                            width: 100%;
                            position: absolute;
                            left: 0;

                            .table_tr {
                                display: flex;
                                height: 40px;
                                line-height: 40px;
                                color: #eee;
                                font-size: 15px;
                                background: rgba(3, 145, 167, 0.1);
                                border: 1px solid rgb(4, 114, 131);
                                margin-top: 7px;

                                .tr {
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    box-sizing: border-box;
                                    padding: 0 5px;
                                    text-align: center;
                                    font-size: 14px;
                                }
                            }

                        }
                    }
                }
            }






        }
    }

    .header h2 {
        text-align: center;
        color: #fff;

    }
}
</style>
