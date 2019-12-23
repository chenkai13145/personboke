<template>
  <div class="exprence">
    <van-steps direction="vertical" :active="-1">
      <van-step v-for="(item,index) in data" :key="index">
        <span class="time">
          <div class="art-icon"></div>
          <div class="art-time">{{item.time}}</div>
        </span>
        <div class="content">
          <h2 class="wrap" @click="pathTo(item)">{{item.title}}</h2>
          <div class="art">
            <img class="art_img" :src="item.imgurl" />
            <p class="wrap">{{item.desc}}</p>
          </div>
        </div>
      </van-step>
    </van-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "javascript基础点",
          time: "2018-9-10",
          imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
          desc:
            "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
          descobj: {
            id: 1,
            arr: [
              {
                futitle: "时s尚大事件",
                desccenter: {
                  title:
                    "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
                  desctitle: [
                    "而哦欸哦覅",
                    "觉得撒谎的",
                    "啊是姐弟仨基地啊时间"
                  ]
                },
                daima: `<pre>吉萨大历史
                  Observer.prototype = {
                  on: function (type, handle) {
                    if (!this.listeners[type]) this.listeners[type] = [];
                    this.listeners[type].push(handle)
                  },
                  <h2 class="title">{{data.title}}</h2>
                        <p class="desc">{{data.desc}}</p>
                        <div v-for="(item,index) in data.descobj.arr" :key="index">
                            <h4 v-if="item.futitle">{{item.futitle}}</h4>
                            <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
                        </div>
                                                          sljdlsa
                                                             逻辑上sddddddddddddddd的浪费时间看
                                                      </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上的浪aaaaaaaaaaaaaa费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上ssssssssssssssss的浪费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdsssssssssssssslsa
                                             逻辑上的浪费kkkkkkkkkk时间看
                            </pre>`
              }
            ]
          }
        },
          {
          title: "javascript基础点",
          time: "2018-9-10",
          imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
          desc:
            "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
          descobj: {
            id: 1,
            arr: [
              {
                futitle: "时s尚大事件",
                desccenter: {
                  title:
                    "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
                  desctitle: [
                    "而哦欸哦覅",
                    "觉得撒谎的",
                    "啊是姐弟仨基地啊时间"
                  ]
                },
                daima: `<pre>吉萨大历史
                  Observer.prototype = {
                  on: function (type, handle) {
                    if (!this.listeners[type]) this.listeners[type] = [];
                    this.listeners[type].push(handle)
                  },
                  <h2 class="title">{{data.title}}</h2>
                        <p class="desc">{{data.desc}}</p>
                        <div v-for="(item,index) in data.descobj.arr" :key="index">
                            <h4 v-if="item.futitle">{{item.futitle}}</h4>
                            <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
                        </div>
                                                          sljdlsa
                                                             逻辑上sddddddddddddddd的浪费时间看
                                                      </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上的浪aaaaaaaaaaaaaa费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上ssssssssssssssss的浪费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdsssssssssssssslsa
                                             逻辑上的浪费kkkkkkkkkk时间看
                            </pre>`
              }
            ]
          }
        },
          {
          title: "javascript基础点",
          time: "2018-9-10",
          imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
          desc:
            "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
          descobj: {
            id: 1,
            arr: [
              {
                futitle: "时s尚大事件",
                desccenter: {
                  title:
                    "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
                  desctitle: [
                    "而哦欸哦覅",
                    "觉得撒谎的",
                    "啊是姐弟仨基地啊时间"
                  ]
                },
                daima: `<pre>吉萨大历史
                  Observer.prototype = {
                  on: function (type, handle) {
                    if (!this.listeners[type]) this.listeners[type] = [];
                    this.listeners[type].push(handle)
                  },
                  <h2 class="title">{{data.title}}</h2>
                        <p class="desc">{{data.desc}}</p>
                        <div v-for="(item,index) in data.descobj.arr" :key="index">
                            <h4 v-if="item.futitle">{{item.futitle}}</h4>
                            <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
                        </div>
                                                          sljdlsa
                                                             逻辑上sddddddddddddddd的浪费时间看
                                                      </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上的浪aaaaaaaaaaaaaa费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上ssssssssssssssss的浪费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdsssssssssssssslsa
                                             逻辑上的浪费kkkkkkkkkk时间看
                            </pre>`
              }
            ]
          }
        },
          {
          title: "javascript基础点",
          time: "2018-9-10",
          imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
          desc:
            "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
          descobj: {
            id: 1,
            arr: [
              {
                futitle: "时s尚大事件",
                desccenter: {
                  title:
                    "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
                  desctitle: [
                    "而哦欸哦覅",
                    "觉得撒谎的",
                    "啊是姐弟仨基地啊时间"
                  ]
                },
                daima: `<pre>吉萨大历史
                  Observer.prototype = {
                  on: function (type, handle) {
                    if (!this.listeners[type]) this.listeners[type] = [];
                    this.listeners[type].push(handle)
                  },
                  <h2 class="title">{{data.title}}</h2>
                        <p class="desc">{{data.desc}}</p>
                        <div v-for="(item,index) in data.descobj.arr" :key="index">
                            <h4 v-if="item.futitle">{{item.futitle}}</h4>
                            <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
                        </div>
                                                          sljdlsa
                                                             逻辑上sddddddddddddddd的浪费时间看
                                                      </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上的浪aaaaaaaaaaaaaa费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上ssssssssssssssss的浪费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdsssssssssssssslsa
                                             逻辑上的浪费kkkkkkkkkk时间看
                            </pre>`
              }
            ]
          }
        },  {
          title: "javascript基础点",
          time: "2018-9-10",
          imgurl: require("../../../public/img/icons/apple-touch-icon-60x60.png"),
          desc:
            "js现在常用十大水水阿瑟东撒的阿斯顿撒旦撒啊实打实大苏打阿斯顿撒旦撒数据类型",
          descobj: {
            id: 1,
            arr: [
              {
                futitle: "时s尚大事件",
                desccenter: {
                  title:
                    "撒德哈受saddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打击啊是大家",
                  desctitle: [
                    "而哦欸哦覅",
                    "觉得撒谎的",
                    "啊是姐弟仨基地啊时间"
                  ]
                },
                daima: `<pre>吉萨大历史
                  Observer.prototype = {
                  on: function (type, handle) {
                    if (!this.listeners[type]) this.listeners[type] = [];
                    this.listeners[type].push(handle)
                  },
                  <h2 class="title">{{data.title}}</h2>
                        <p class="desc">{{data.desc}}</p>
                        <div v-for="(item,index) in data.descobj.arr" :key="index">
                            <h4 v-if="item.futitle">{{item.futitle}}</h4>
                            <pre class="textpre" v-if="item.daima">{{item.daima}}</pre>
                        </div>
                                                          sljdlsa
                                                             逻辑上sddddddddddddddd的浪费时间看
                                                      </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上的浪aaaaaaaaaaaaaa费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdlsa
                                             逻辑上ssssssssssssssss的浪费时间看
                            </pre>`
              },
              {
                futitle: "时尚大事件",
                daima: `<pre>
                                   吉萨大历史
                                      sljdsssssssssssssslsa
                                             逻辑上的浪费kkkkkkkkkk时间看
                            </pre>`
              }
            ]
          }
        },
      ]
    };
  },
  methods: {
    pathTo(data) {
      this.$router.push({
        path: "/info",
        query: { data: JSON.stringify(data) }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .van-step__circle {
  width: 20px;
  height: 20px;
}
/deep/ .van-steps {
  background: rgba(0, 0, 0, 0);
}
.exprence {
  .time {
    display: flex;

    position: absolute;
    top: -10px;
    .art-icon {
      border-right: 16px solid rgb(214, 216, 218);
      border-bottom: 24px solid transparent;
      border-top: 24px solid transparent;
    }
    .art-time {
      width: 120px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: rgb(214, 216, 218);
      font-size: 16px;
    }
  }
  .content {
    padding: 30px;
    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    .art {
      .art_img {
        max-width: 600px;
        max-height: 300px;
        display: block;
      }
    }
  }
  .van-step--vertical {
    position: relative;
    margin: 20px 0;
  }
  .van-steps--vertical {
    padding: 20px 40px;
  }
}
</style>