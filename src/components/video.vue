<template>
  <div>
    <Header></Header>
    <div class="mainbox">
      <div class="boxall"
           style="height: 8.95rem;">
        <div class="alltitle">模块标题样式</div>
        <div class="allnav"
             id="echart1">
          <el-tabs v-model="activeName"
                   @tab-click="handleClick">
            <el-tab-pane label="excel导入"
                         name="first">
              <span style="color:#fff;font-size:0.2rem;">数据日期：</span>
              <el-date-picker v-model="value1"
                              @change="cangeTime()"
                              size="small"
                              type="date"
                              placeholder="选择日期">
              </el-date-picker>
              <br><br><br>
              <el-upload class="upload-demo"
                         ref="upload1"
                         :limit="1"
                         :before-upload="beforeAvatarUpload"
                         :on-success="handleAvatarSuccess"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList1"
                         action="#">
                <el-button slot="trigger"
                           size="small"
                           type="primary">选择excel</el-button>
                <el-button style="margin-left: 10px;"
                           size="small"
                           type="success"
                           @click="submitUpload1">excel导入</el-button>
              </el-upload>
            </el-tab-pane>
            <el-tab-pane label="图片上传"
                         name="second">
              <el-select v-model="value"
                         size="small"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <br><br><br>
              <el-upload class="upload-demo"
                         ref="upload"
                         :action="'http://47.101.33.200:8089/addImage?type='+this.value"
                         :on-preview="handlePreview"
                         :on-remove="handleRemove"
                         :file-list="fileList"
                         list-type="picture"
                         :auto-upload="false">
                <el-button slot="trigger"
                           size="small"
                           type="primary">图片选取文件</el-button>
                <el-button style="margin-left: 10px;"
                           size="small"
                           type="success"
                           @click="submitUpload">图片上传到服务器</el-button>
              </el-upload>
            </el-tab-pane>
            <el-tab-pane label="防疫知识管理"
                         name="three">
            </el-tab-pane>
            <el-tab-pane label="谣言管理"
                         name="four">
            </el-tab-pane>
            <el-tab-pane label="辅导员信息管理"
                         name="five">
            </el-tab-pane>
            <el-tab-pane label="课程安排"
                         name="six">
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="boxfoot"></div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  data () {
    return {
      fileList: [],
      fileList1: [],
      activeName: 'first',
      options: [{
        value: '1',
        label: '停学不停课'
      }, {
        value: '3',
        label: '未戴口罩人员'
      }],
      value: '1',
      tableSuffix: '',
      tableSuffix2: '',
      value1: null,
      files: [],
      fileName: ""
    };
  },
  components: {
    Header
  },
  created () {
    this.defaultDate();
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    submitUpload () {
      this.$refs.upload.submit();
      this.$refs.upload.clearFiles();
    },
    submitUpload1 () {
      this.uuu();
      this.fileList1 = [];
      // this.$refs.upload1.submit();
      this.$refs.upload1.clearFiles();
    },
    handleClick (tab, event) {
      console.log(tab, event);
    },
    handleAvatarSuccess (response, file, fileList) {
      console.log(response)
    },
    defaultDate () {
      let date = new Date()
      let year = date.getFullYear().toString()   //'2019'
      let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString()  //'04'
      let da = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()  //'12'
      let end = year + '-' + month + '-' + da
      this.tableSuffix = month + da
      this.value1 = end
      this.tableSuffix2 = end
    },
    formatDate (datetime) {
      var datetime = new Date(datetime)

      // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
      var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
      var date = ("0" + datetime.getDate()).slice(-2);
      // 返回
      return month + date;
    },
    formatDate2 (datetime) {
      var datetime = new Date(datetime)

      // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
      var year = datetime.getFullYear();
      var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
      var date = ("0" + datetime.getDate()).slice(-2);
      // 返回
      return year + "-" + month + "-" + date + " 12:00:00";
    },
    cangeTime () {
      this.tableSuffix = this.formatDate(this.value1)
      this.tableSuffix2 = this.formatDate2(this.value1)
    },
    uuu () {
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append("file", this.fileList1[0]);
      formData.append("date", this.tableSuffix);
      formData.append("date2", this.tableSuffix2);
      // xhr.open('post', "http://localhost:8089/import");
      xhr.open('post', "http://47.101.33.200:8089/import");  //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
      xhr.responseType = 'blob';
      xhr.onload = function (e) {
        if (this.status == 200) {
          var blob = this.response;
          var filename = "异常数据（修改重新再次上传）.xls";
          if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, filename);
          } else {
            // 非IE下载
            const elink = document.createElement("a");
            elink.download = filename;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href); // 释放URL 对象
            document.body.removeChild(elink);
          }

          this.$message({
            message: `导入成功`,
            type: "success"
          });

        }
      };
      xhr.send(formData);

    },
    // uuu () {
    //   const _this = this;
    //   var formData = new FormData();
    //   //filename是键，file是值，就是要传的文件

    //   console.log(_this.fileList1)
    //   formData.append("file", _this.fileList1[0]);
    //   formData.append("date", this.tableSuffix);
    //   formData.append("date2", this.tableSuffix2);

    //   let requestConfig = {
    //     headers: {
    //       "Content-Type": "multipart/form-data"
    //     }
    //   };
    //   _this.$http
    //     .post("http://localhost:8089/import", formData, requestConfig)
    //     .then(res => {
    //       // if (res.success) {
    //       //   const result = res.result;
    //       //   if (result.errorCount == 0 && result.successCount > 0) {
    //       //     _this.$message({
    //       //       message: `导入成功,成功${result.successCount}条`,
    //       //       type: "success"
    //       //     });
    //       //     _this.closeFileUpload();
    //       //     _this.Refresh();
    //       //   } else if (result.errorCount > 0 && result.successCount >= 0) {
    //       //     _this.Refresh();
    //       //     _this.tableData = result.uploadErrors;
    //       //     _this.successCount = result.successCount;
    //       //     _this.innerVisible = true;
    //       //   } else if (result.errorCount == 0 && result.successCount == 0) {
    //       //     _this.$message({
    //       //       message: `上传文件中数据为空`,
    //       //       type: "error"
    //       //     });
    //       //   }
    //       // }
    //       const content = res.data;
    //       const blob = new Blob([content], { type: 'application/vnd.ms-excel' });
    //       const fileName = `xxx.xls`;
    //       if ("download" in document.createElement("a")) {
    //         // 非IE下载
    //         const elink = document.createElement("a");
    //         elink.download = fileName;
    //         elink.style.display = "none";
    //         elink.href = URL.createObjectURL(blob);
    //         document.body.appendChild(elink);
    //         elink.click();
    //         URL.revokeObjectURL(elink.href); // 释放URL 对象
    //         document.body.removeChild(elink);
    //       } else {
    //         // IE10+下载
    //         navigator.msSaveBlob(blob, fileName);
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    beforeAvatarUpload (file) {

      var fileName = new Array()
      fileName = file.name.split('.');
      const extension = fileName[fileName.length - 1] === 'xls'
      const extension2 = fileName[fileName.length - 1] === 'xlsx'
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!extension && !extension2) {
        this.$message({
          message: '上传模板只能是xls、xlsx格式!',
          type: 'warning'
        });
        //                    console.log('上传模板只能是xls、xlsx格式!')
      }
      if (!isLt2M) {
        this.$message({
          message: '上传模板大小不能超过 10MB!',
          type: 'warning'
        });
        //                    console.log('上传模板大小不能超过 10MB!')
      }
      if (extension || extension2 && isLt2M == true) {
        this.fileList1.push(file)
      }
      return false;
    },
  }
};
</script>
<style>
.el-tabs__item {
  color: #fff;
}
</style>
