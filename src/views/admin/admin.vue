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
         <van-button :loading="false" @click="main"  type="primary">确认</van-button>

      </div>
    </van-card>
    <!-- 主要点滴详情 -->
    <van-card title="主要点滴详情">
      <div slot="tags">
        <van-cell-group>
          <van-field v-model="descobj.futitle" clearable label="id标题" placeholder="id标题" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="descobj.futitle" clearable label="步骤" placeholder="请输入步骤标题" />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="descobj.title" clearable label="副标题" placeholder="请输入副标题" />
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
         <van-button :loading="false"  type="primary">添加</van-button>

      </div>
    </van-card>
  </div>
</template>
<script>
import {updata} from '../../api/exprence'
import {Toast} from 'vant'
export default {
  data() {
    return {
      formdata: {
        title: null,
        desc: null,
        imgurl:[]
      },
      descobj: {
        futitle: null,
        title: null,
        desctitle:null,
        daima:null,
        idtitle:null
      },
    };
  },
  methods:{
      main(){
           if(this.formdata.title!=null&&this.formdata.desc!=null){
               let format=new FormData()
              for(let key in this.formdata){
                  if(key==='imgurl'){
                  format.append(key,this.formdata[key].length>0?this.formdata[key][0].content:null)
                       continue;
                  }
                  format.append(key,this.formdata[key])
               }
               updata(format).then(res=>{
                   Toast('添加成功')
               })
           }
      }
  }
};
</script>
<style lang="scss">
textarea{
      box-sizing: border-box;
      width: 100%;
      border-radius: 4px;
      padding: 0px 4px 0 6px;
}
</style>