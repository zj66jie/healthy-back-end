<template>
  <div class="pay-from">
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
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
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formLabelWidth: "120px",
      // dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false,
    },
  },
   computed: {
        dialogShow() {
          return {
            dialogFormVisible: this.dialogFormVisible,
          };
        },

  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
// .pay-from {
//   position: fixed;
//   // z-index: 300;
//   // // top: 15vh;
//   // width: 100%;
//   // margin: 0 auto;
//   // .from {
//   //   position: relative;
//   //   // width: 500px;
//   //   // height: 500px;
//   //   // background-color: #fff;
//   //   margin: 0 auto;
//   // }
// }
</style>
