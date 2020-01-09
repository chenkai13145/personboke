<template>
  <section class="metitle">
    <h1>{{title}}</h1>
    <div class="content">
      <ul v-if="datas[0].type==='xinxi'" :class="[styleoff?'garid garidcolor':'garid']">
        <li v-for="(item,index) in datas" :key="index">
          <strong></strong>
          <label v-if="item.label">{{item.title}}:</label>
          <span v-html="item.text"></span>
        </li>
      </ul>
      <ul :class="[styleoff?'garids garidcolor':'garids']" v-else-if="datas[0].type==='ji'">
        <li class="btn" v-if="btnoff">
          <van-icon @click="truns" :class="activeclass?'btn_icon':''" name="apps-o" />
        </li>
        <li v-show="activeclass" v-for="(item,index) in datas" :key="index">
          <span>{{index+1}}、<a v-if="item.a" target="_blank" :href="item.text">{{item.text}}</a><template v-else>{{item.text}}</template></span>
        </li>
        <!-- 图形化 -->
        <li class="tul" v-show="!activeclass" v-for="(item) in tuData" :key="item.type">
          <van-circle
            v-model="currentRate"
            :rate="item.value"
            :color="item.color"
            :text="item.type"
          />
          <van-progress
            v-if="!activeclass"
            :percentage="item.value"
            :pivot-color="item.color"
            :color="'linear-gradient(to right, #be99ff,'+item.color+')'"
          />
        </li>
      </ul>
      <ul
        :class="[styleoff?'garids garidcolor':'garids']"
        v-for="(item,index) in datas"
        :key="index+item.title"
        v-else-if="datas[0].type==='exp'"
      >
        <li class="btn" v-if="btnoff">
          <van-icon @click="parents(index,item.url)" :class="item.off?'btn_icon':''" name="apps-o" />
        </li>
        <li class="lin">
          <h3>{{item.title}}</h3>
          <div>描述：{{item.des}}</div>
          <div>
            职责：
            <div v-for="(items,index) in item.meto" :key="items+index">{{items}}</div>
          </div>
          <div>{{item.content}}</div>
        </li>
      </ul>
      <ul :class="[styleoff?'garids garidcolor':'garids']" v-else>
        <li>
          <van-steps direction="vertical" :active="0">
            <van-step class="van-step--process" v-for="(item,index) in datas" :key="index">
              <h3>{{item.gongsi}}</h3>
              <p v-for="(itmes,index) in item.arr" :key="itmes+index">
                {{itmes}}
              </p>
            </van-step>
          </van-steps>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    datas: {
      type: Array,
      required: true
    },
    tuData: {
      type: Array
    },
    btnoff:{
      type:Boolean
    },
    styleoff:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      activeclass: true,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "red"
      },
      rate: 20,
      currentRate: 85
    };
  },
  methods: {
    truns() {
      this.activeclass = !this.activeclass;
    },
    parents(index, data) {
      ImagePreview({
        images: data,
        startPosition: 0,
        showIndicators: true,
        loop: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.metitle {
  h1 {
    font-weight: 600 !important;
    padding-left: 30px;
    border-left: 6px solid #000;
    font-size: 24px;
  }
  .content {
    padding-left: 30px;
    padding-right: 30px;
  }
  .garid {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .garidcolor{
    background-color: rgb(233, 230, 230);
  }
  .garid,
  .garids {
    padding: 10px 0;
    margin-bottom: 10px;
    li:not(.btn) {
      min-width: 265px;
      align-self: center;
      font-size: 18px;
      padding: 4px 6px;
      display: flex;
      display: -webkit-flex;
      .van-progress {
        width: 100%;
      }
      strong {
        display: inline-block;
        align-self: center;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #000;
      }
      strong {
        display: inline-block;
        margin: 0 4px 0 0;
      }
      span {
        display: inline-block;
        padding: 0 0 4px 0;
      }
    }
    .btn {
      text-align: center;
      .btn_icon {
        cursor: pointer;
        font-size: 40px;
      }
    }
    .tul {
      display: flex;
      .van-progress {
        align-self: center;
      }
    }
    .lin {
      display: flex;
      flex-direction: column;
    }
    /deep/ .van-steps--vertical{
         width: 100%;
         padding: 0;
             }
    /deep/ .van-step__title{
      color: #000 !important;
      font-size: 18px;
      p{
         font-size: 18px;
         
      }
    }
    /deep/ .van-step__icon{
      display: none !important;
    }
   /deep/ .van-steps{
        background:rgba(255, 255, 255, 0);
    }
  }
}
</style>