<template>
  <div class="manage">
    <div class="manage-header">
      <!-- form搜索区域 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input placeholder="请输入名称" v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="common-tabel">
      <el-table stripe height="90%" :data="tableData" style="width: 100%" @cell-click="golink">
        <el-table-column prop="name" label="比赛名"> </el-table-column>
        <el-table-column prop="time" label="开始时间"> </el-table-column>
      </el-table>
      <div class="pager">
        <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage"> </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { getGame } from '../api';
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        farmid: '',
        addr: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名' }],
        age: [{ required: true, message: '请输入年龄' }],
        sex: [{ required: true, message: '请选择性别' }],
        farmid: [{ required: true, message: '请输入农场id' }],
        addr: [{ required: true, message: '请输入农场地址' }]
      },
      tableData: [],
      modalType: 0, // 0表示新增的弹窗， 1表示编辑
      total: 0, //当前的总条数
      pageData: {
        page: 1,
        limit: 10
      },
      userForm: {
        name: ''
      }
    };
  },
  methods: {
    // 提交用户表单
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
    // 弹窗关闭的时候
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    cancel() {
      this.handleClose();
    },
    handleEdit(row) {
      this.modalType = 1;
      this.dialogVisible = true;
      // 注意需要对当前行数据进行深拷贝，否则会出错
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delUser({ id: row.id }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            // 重新获取列表的接口
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    handleAdd() {
      this.modalType = 0;
      this.dialogVisible = true;
    },
    // 获取列表的数据
    getList() {
      // 获取的列表的数据
      getGame({ params: { ...this.userForm, ...this.pageData } }).then(({ data }) => {
        console.log(data);
        this.tableData = data.list;
        const transform = JSON.stringify(data.list);
        localStorage.setItem('datas', transform);

        this.total = data.count || 0;
      });
    },
    // 选择页码的回调函数
    handlePage(val) {
      // console.log(val, 'val')
      this.pageData.page = val;
      this.getList();
    },
    // 列表的查询
    onSubmit() {
      this.getList();
    },
    farmDeatil(row) {
      this.$router.push({ path: '/gameshow', query: { rows: row } });
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
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
    cancel() {
      this.handleClose();
    },
   golink() {
      window.location.href = 'https://www.ikcest.org/bigdata2022';
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang="less" scoped>
.manage {
  height: 90%;

  .manage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .common-tabel {
    position: relative;
    height: calc(100% - 62px);

    .pager {
      position: absolute;
      bottom: 0;
      right: 20px;
    }
  }
}
</style>
