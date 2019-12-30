<template>
  <div class="guanli">
    <!-- 主要点滴 -->
    <van-card title="主要点滴">
      <div slot="tags">
        <van-cell-group>
          <van-field required v-model="formdata.title" clearable label="标题" placeholder="请输入标题" />
        </van-cell-group>
        <van-uploader required v-model="formdata.imgurl" multiple :max-count="1" />
        <van-cell-group>
          <van-field
            v-model="formdata.desc"
            rows="2"
            autosize
            label="描述"
            type="textarea"
            placeholder="请输入描述"
            show-word-limit
            required
          />
        </van-cell-group>
        <van-button class="btnpost" :loading="false" @click="main" type="primary">添加</van-button>
        <van-button class="btnpost" :loading="false" @click="editmain" type="primary">编辑</van-button>
        <van-button class="btnpost" :loading="false" @click="delmain" type="primary">删除</van-button>
      </div>
    </van-card>
    <!-- 主要点滴详情 -->
    <van-card title="主要点滴详情">
      <div slot="tags">
        <van-cell-group>
          <van-field v-model="descobj.idtitle" clearable label="id标题(必填)" placeholder="id标题" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="descobj.sort" clearable label="sort排序步骤(必填)" placeholder="排序步骤" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="descobj.futitle" clearable label="步骤标题" placeholder="请输入步骤标题" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="descobj.destitle" clearable label="副标题" placeholder="请输入副标题" />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="descobj.desctitle"
            rows="2"
            autosize
            label="副标题阐述"
            type="textarea"
            placeholder="请输入副标题阐述"
            show-word-limit
          />
        </van-cell-group>
        <div>
          <label>代码区域:</label>
          <textarea rows="10" v-model="descobj.daima"></textarea>
        </div>
        <van-button class="btnpost" @click="add" :loading="false" type="primary">添加步骤</van-button>
        <van-button class="btnpost" @click="editinfo" :loading="false" type="primary">编辑步骤</van-button>
        <van-button class="btnpost" @click="delinfo" :loading="false" type="primary">删除步骤</van-button>
      </div>
    </van-card>
  </div>
</template>
<script>
import {
  updata,
  editmain,
  editinfo,
  addinfo,
  delmain,
  delinfo
} from "../../api/exprence";
import { Toast } from "vant";
export default {
  data() {
    return {
      formdata: {
        title: null,
        desc: null,
        imgurl: []
      },
      descobj: {
        futitle: null, //主标题
        destitle: null, //副标题
        desctitle: null, //副标题描述
        daima: null, //代码区域
        idtitle: null, //唯一标题
        sort: null //唯一步骤sort
      }
    };
  },
  methods: {
    //添加主要点滴
    main() {
      if (this.formdata.title != null && this.formdata.desc != null) {
        let format = new FormData();
        for (let key in this.formdata) {
          if (key === "imgurl") {
            format.append(
              key,
              this.formdata[key].length > 0
                ? this.formdata[key][0].content
                : null
            );
            continue;
          }
          format.append(key, this.formdata[key]);
        }
        updata(format).then(res => {
          for (let key in this.formdata) {
            if (key === "imgurl") {
              this.formdata[key] = [];
              continue;
            }
            this.formdata[key] = null;
          }
          Toast(res.data.msg);
        });
      } else {
        Toast("标题(描述)不能为空！！！");
      }
    },
    //修改主要点滴
    editmain() {
      if (this.formdata.title != null && this.formdata.title) {
        let format = new FormData();
        for (let key in this.formdata) {
          if (key === "imgurl") {
            format.append(
              key,
              this.formdata[key].length > 0
                ? this.formdata[key][0].content
                : null
            );
            continue;
          }
          format.append(key, this.formdata[key]);
        }
        editmain(format)
          .then(res => {
            if (res.data.success) {
              Toast(res.data.msg);
              for (let key in this.formdata) {
                if (key === "imgurl") {
                  this.formdata[key] = [];
                  continue;
                }
                this.formdata[key] = null;
              }
            } else {
              Toast("异常");
            }
          })
          .catch(err => {
            Toast("网络异常");
          });
      } else {
        Toast("标题不能为空！！！");
      }
    },
    //编辑详情
    editinfo() {
      if (
        this.descobj.idtitle !== null &&
        this.descobj.idtitle &&
        this.descobj.sort !== null &&
        this.descobj.sort
      ) {
        editinfo(this.descobj).then(res => {
          for (let key in this.descobj) {
            this.descobj[key] = null;
          }
          Toast(res.data.msg);
        });
      } else {
        Toast("格式不正确！！！");
      }
    },
    //添加详情
    add() {
      if (
        this.descobj.idtitle !== null &&
        this.descobj.idtitle &&
        this.descobj.sort !== null &&
        this.descobj.sort
      ) {
        addinfo(this.descobj).then(res => {
          for (let key in this.descobj) {
            this.descobj[key] = null;
          }
          Toast(res.data.msg);
        });
      } else {
        Toast("格式不正确！！！");
      }
    },
    //删除主要点滴
    delmain() {
      if (this.formdata.title != null && this.formdata.title) {
        delmain(this.formdata).then(res => {
          if (res.data.success) {
            Toast(res.data.msg);
            for (let key in this.formdata) {
              if (key === "imgurl") {
                this.formdata[key] = [];
                continue;
              }
              this.formdata[key] = null;
            }
          }
        });
      } else {
        Toast("标题不能为空！！！");
      }
    },
    //删除步骤
    delinfo() {
      if (
        this.descobj.idtitle != null &&
        this.descobj.sort != null &&
        this.descobj.idtitle &&
        this.descobj.sort
      ) {
        delinfo(this.descobj).then(res => {
          if (res.data.success) {
            Toast(res.data.msg);
          }
        });
      }else{
        Toast('格式不正确')
      }
    }
  }
};
</script>
<style lang="scss">
textarea {
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 0px 4px 0 6px;
}
.btnpost {
  margin-right: 10px;
}
</style>