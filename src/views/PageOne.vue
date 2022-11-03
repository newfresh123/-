<template>
    <div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="100px">
                <el-form-item label="农场地址" prop="addr">
                    <el-input placeholder="请输入农场地址" v-model="form.addr"></el-input>
                </el-form-item>
                <el-form-item label="农场ID" prop="ID">
                    <el-input v-model="form.farmid" placeholder="输入农场ID"> </el-input>
                </el-form-item>
                <el-form-item label="农作场类型" prop="product">
                    <el-input placeholder="请输入农作物类型" v-model="form.product"></el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <el-row>
            <el-col :span="8" style="padding-right: 10px">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/images/user.png" alt="" />
                        <div class="userinfo">
                            <p class="name">{{ data.name }}</p>
                            <p class="access">农场主</p>
                            <div class="el-buttons">
                                <el-button type="primary" @click="handleAdd">新增农场</el-button>
                                <el-button type="success" @click="onSubmit">查询</el-button>
                            </div>
                        </div>

                    </div>
                    <div class="login-info">
                        <p>农场地址：<span>{{ data.addr }}</span></p>
                        <p>农场ID:<span>{{ data.id }}</span></p>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8" style="padding-right: 10px">
                <el-card style="height: 302px">
                    <div ref="echarts2" style="height: 280px"></div>
                </el-card>
            </el-col>
            <el-col :span="8" style="padding-right: 10px">
                <el-card style="height: 302px">
                    <div ref="echarts3" style="height: 280px"></div>
                </el-card>
            </el-col>


        </el-row>
        <el-row>
            <el-col :span="24" style="padding-right: 10px">
                <el-card style="margin-top: 20px; height: 500px">
                    <div class="common-tabels">
                        <el-table :data="tableData" style="width: 100%" max-height="460" stripe height="90%">
                            <el-table-column prop="address" label="农场地址">
                            </el-table-column>
                            <el-table-column prop="ID" label="农产ID">
                            </el-table-column>
                            <el-table-column prop="product" label="农产类型">
                            </el-table-column>
                            <el-table-column fixed="right" label="操作" width="120">
                                <template slot-scope="scope">
                                    <el-button @click="farmDeatil(scope.row)" type="text" size="small">查看</el-button>
                                    <el-button @click=handleEdit(scope.row) type="text" size="small">编辑</el-button>
                                    <el-button @click=handleDelete(scope.row) type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                </el-card>
            </el-col>
        </el-row>

    </div>
</template>
<script>
import { getData } from '../api';
import { getUserInfo, addUser, editUser, delUser } from '../api';

import * as echarts from 'echarts';
export default {
    data() {
        return {
            tableData: [{
                product: '上海',
                ID: '上海',
                address: '上海市普陀区金沙江路 1518 弄',

            }, {
                product: '上海',
                ID: '1',
                address: '上海市普陀区金沙江路 1518 弄',

            }, {
                product: '上海',
                ID: '2',
                address: '上海市普陀区金沙江路 1518 弄',

            }, {


                product: '上海',
                ID: '3',
                address: '上海市普陀区金沙江路 1518 弄',

            }, {


                product: '上海',
                ID: '4',
                address: '上海市普陀区金沙江路 1518 弄',

            }, {


                product: '上海',
                ID: '5',
                address: '上海市普陀区金沙江路 1518 弄',

            }, {


                product: '上海',
                ID: '6',
                address: '上海市普陀区金沙江路 1518 弄',

            }],
            form: {

                farmid: '',
                addr: '',
                product: ''
            },
            rules: {

                farmid: [{ required: true, message: '请输入农场id' }],
                addr: [{ required: true, message: '请输入农场地址' }],
                product: [{ required: true, message: '请输入农作场类型' }]
            },
            /*      pageData: {
                     page: 1,
                     limit: 10
                 },
                 userForm: {
                     name: ''
                 }, */

            dialogVisible: false,
        }
    },

    created() {
        this.ListApi()
    },
    methods: {
        ListApi() {
            const data = this.$route.query.rows
            if (data) {
                this.data = data
            }
            else {
                const data = JSON.parse(localStorage.getItem('datas'))
                this.data = data[0]
                console.log(data)
            }

        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleEdit(row) {
            this.modalType = 1;
            this.dialogVisible = true;
            // 注意需要对当前行数据进行深拷贝，否则会出错
            this.form = JSON.parse(JSON.stringify(row));
        },
        farmDeatil(row) {
            this.$router.push({ path: '/page2', query: { rows: row } });
        },
        handleDelete(row) {
            const transform = JSON.stringify(row.id)

            localStorage.setItem('FarmId', transform)
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    const id = row.ID
                    if (id == '上海') {
                        this.tableData = this.tableData.filter(item => item.ID !== id)
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                    else {
                        this.$message({
                            type: 'error',
                            message: '删除失败!'
                        });
                    }


                })

        },
        getList() {
            // 获取的列表的数据
            getUserInfo({ params: { ...this.userForm, ...this.pageData } }).then(({ data }) => {
                console.log(data);
                this.tableData = data.list;
                if (!data) {
                    console.log('没有数据');
                }
                else {
                    console.log('有数据');
                }

                this.total = data.count || 0;
            });
            console.log(1)
        },
        handleAdd() {
            this.modalType = 0;
            this.dialogVisible = true;
        },
        onSubmit() {
            this.getList();
        },
        handleClose() {
            this.$refs.form.resetFields();
            this.dialogVisible = false;
        },
        onSubmit() {
            this.getList();
        },
        cancel() {
            this.handleClose();
        },
        submit() {
            this.$refs.form.validate(valid => {
                // console.log(valid, 'valid')
                if (valid) {
                    // 后续对表单数据的处理
                    if (this.modalType === 0) {
                        addUser(this.form).then(() => {
                            // 重新获取列表的接口
                            this.getList();
                        });
                    } else {
                        editUser(this.form).then(() => {
                            // 重新获取列表的接口
                            this.getList();
                        });
                    }

                    // 清空表单的数据
                    this.$refs.form.resetFields();
                    // 关闭弹窗
                    this.dialogVisible = false;
                }
            });
        },

    },
    mounted() {//后端传输数据
        getData().then(({ data }) => {
            const { orderData, userData, videoData } = data.data;
            // 柱状图
            const echarts2 = echarts.init(this.$refs.echarts2);
            const eachrts2Option = {
                legend: {
                    // 图例文字颜色
                    textStyle: {
                        color: '#333'
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
                        color: '#333'
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

            const echarts3 = echarts.init(this.$refs.echarts3);
            const eachrts3Option = {
                tooltip: {
                    trigger: 'item'
                },
                color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
                series: [
                    {
                        data: videoData,
                        type: 'pie'
                    }
                ]
            };
            echarts3.setOption(eachrts3Option);
        })
    }



};
</script>
<style lang="less" scoped>
.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;

    img {
        margin-right: 40px;
        width: 180px;
        height: 180px;
        border-radius: 80%;
    }

    .userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }

        .el-button {
            margin-top: 10px;


        }
    }

    .login-info {
        p {
            line-height: 28px;
            font-size: 14px;
            color: #999999;

            span {
                color: #666666;
                margin-left: 60px;
            }
        }
    }

}

.manage-labels {
    position: relative;
    height: calc(100% - 62px);
}
</style>
