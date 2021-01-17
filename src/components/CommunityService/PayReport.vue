<template>
  <div class="pay-report">
    <div class="pay-report-header">
      <el-radio-group v-model="radio1">
        <el-radio-button label="未上报"></el-radio-button>
        <el-radio-button label="已上报"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="pay-report-table" v-if="radio1 == '未上报'">
      <el-table :data="tableData" style="width: 100%">
        <!-- <el-table-column prop="time" label="日期" min-width="180">
        </el-table-column> -->
        <el-table-column prop="name" label="姓名" min-width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" min-width="180">
        </el-table-column>
        <el-table-column prop="water" label="水费" min-width="180">
        </el-table-column>
        <el-table-column label="电费" min-width="180">
          请上报
        </el-table-column>
        <el-table-column label="操作" fixed="right" min-width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >上报</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="upTotal"
        >
        </el-pagination>
      </div>
    </div>
    <div class="pay-report-table" v-else>
      <el-table :data="tableData" style="width: 100%">
        <!-- <el-table-column prop="time" label="日期" min-width="180">
        </el-table-column> -->
        <el-table-column prop="name" label="姓mmm" min-width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" min-width="180">
        </el-table-column>
        <el-table-column prop="water" label="水费" min-width="180">
        </el-table-column>
        <el-table-column prop="electric" label="电费" min-width="180">
        </el-table-column>
        <!-- <el-table-column label="操作" fixed="right" min-width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >上报</el-button
            >
          </template>
        </el-table-column> -->
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="overTotal"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 弹出框表单 -->
    <div class="pay-from">
      <el-dialog
        title="上报水电费用"
        :visible.sync="dialogFormVisible"
        width="30%"
      >
        <!-- <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div> -->

        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="水费"
            prop="water"
            :rules="[
              { required: true, message: '水费不能为空' },
              { type: 'number', message: '必须为数字值' },
            ]"
          >
            <el-input
              type="water"
              v-model.number="numberValidateForm.water"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item
            label="电费"
            prop="electric"
            :rules="[
              { required: true, message: '电费不能为空' },
              { type: 'number', message: '必须为数字值' },
            ]"
          >
            <el-input
              type="electric"
              v-model.number="numberValidateForm.electric"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
    <!-- <el-alert title="成功提示的文案" type="success"> </el-alert> -->
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "vueName",
  data() {
    return {
      radio1: "未上报",
      upTotal: 0,
      overTotal: 20,
      currentPage: 1,
      tableData: [],
      dialogFormVisible: false,
      formLabelWidth: "100px",
      numberValidateForm: {
        water: "",
        electric: "",
      },
    };
  },
  components: {},
  created() {
    request({
      url: "/pay-info", //传入confing,在baseURL后面的值
    })
      .then((res) => {
        console.log(res); //res中含有请求的data等数据
        // console.log("res");
        this.tableData = res.data.data;
        this.totalNum();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  methods: {
    totalNum() {
      this.upTotal = this.tableData.length;
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      // setTimeout(() => {
      //   this.resetForm();
      // }, 1000);
      console.log(index, row);
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          console.log(this.numberValidateForm.water);
          console.log(this.numberValidateForm.electric);
          this.dialogFormVisible = false;
          setTimeout(() => {
            this.resetForm(formName);
          }, 1000);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.pay-report {
  box-sizing: border-box;
  // margin: 20px;
  width: 100%;
  // height: 100%;
  padding: 20px;
  .pay-report-header {
    // height: 50px;
    // border: 1px solid #ccc;
    // background-color: #161212;
    // padding: 0 20px;
    // box-sizing: border-box;
  }
  .pay-report-table {
    // height: 100%;
    background-color: #ffffff;
    padding: 0 10px;
    box-sizing: border-box;
    // overflow: scroll;
    // overflow-y: scroll;
    .pagination {
      padding-top: 10px;
      padding-bottom: 100px;
      display: flex;
      @include right;
      background-color: #ffffff;
    }
  }
}
</style>
