<template>
  <div class="pay-report">
    <div class="pay-report-header">
      <el-radio-group v-model="radio1">
        <el-radio-button label="未上报"></el-radio-button>
        <el-radio-button label="已上报"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="pay-report-table" v-show="radio1 == '未上报'">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="日期" min-width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" min-width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" min-width="180">
        </el-table-column>
        <el-table-column label="操作" fixed="right" min-width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="30"
        >
        </el-pagination>
      </div>
    </div>
    <!-- <div class="pay-report-table" v-show="radio1 == '已上报'">
      555
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="日期" min-width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" min-width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" min-width="180">
        </el-table-column>
        <el-table-column label="操作" fixed="right" min-width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 15, 20]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="30"
        >
        </el-pagination>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "vueName",
  data() {
    return {
      radio1: "已上报",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      currentPage4: 1,
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
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
