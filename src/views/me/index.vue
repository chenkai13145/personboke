<template>
  <div class="me">
    <!-- 联系方式 -->
    <meTitle title="联系方式" :datas="one" />
    <!-- 个人信息 -->
    <meTitle title="个人信息" :datas="two" />
    <!-- 联系方式 -->
    <meTitle title="技能掌握" :datas="three" :tuData="pei" :btnoff="btnoff"/>
    <!-- 项目经验 -->
    <meTitle title="项目经验" :datas="four" :btnoff="btnoff"/>
     <!-- 作品链接 -->
    <meTitle title="作品链接" :datas="six"/>
    <!-- 工作经历 -->
    <meTitle title="工作经历" :datas="five" />
    <van-icon name="down" class="down" @click="downFn"/>
  </div>
</template>
<script>
import meTitle from "../../components/me/metitle";
import Pre from "../../components/garid/index";

export default {
  components: {
    meTitle,
    Pre
  },
  data() {
    return {
      one: [
        //联系方式
        {
          label: true,
          title: "手机",
          text: 13981722057,
          type: "xinxi"
        },
        {
          label: true,
          title: "Email",
          text: "1263455889@qq.com"
        },
        {
          label: true,
          title: "网站",
          text: "kaisadiguo.top"
        }
      ],
      two: [
        //个人信息
        {
          type: "xinxi",
          label: false,
          text: "陈凯|男|1997"
        },
        {
          label: false,
          text: "大专|四川文轩大学|计算机应用技术"
        },
        {
          label: false,
          text: "前端开发|1年工作经验"
        },
        {
          label: true,
          title: "期望职位",
          text: "Web前端"
        },
        {
          label: true,
          title: "期望城市",
          text: "成都"
        },
        {
          label: true,
          title: "Github",
          text:
            '<a target="blank" href="https://github.com/chenkai13145">https://github.com/chenkai13145</a>'
        }
      ],
      three: [
        //技能掌握
        {
          type: "ji",
          text:
            "熟练掌握 HTML&CSS,熟悉栅格化布局、弹性布局，能熟练应用 DIV+CSS 布局,编辑出符合 W3C 规范的代码，能根据原型和 UI设计图快速构建页面。"
        },
        {
          text: "熟悉前端各种常用 UI库，对于不了解的能根据文档快速上手。 "
        },
        {
          text: "熟练掌握 JavaScript以及 HTML5&CSS3&ES6，了解TypeScript。"
        },
        {
          text: "能熟练应用 jQuery 实现网页常见效果，掌握面向对象编程思想。 "
        },
        {
          text: "能熟练使用前端开发工具，如 vsCode、HBuilderX等。"
        },
        {
          text: "能熟练使用 Ajax、fetch、axios 进行前后端交互。"
        },
        {
          text: "熟悉 antd、ant design vue等前端插件以及Element、Vant等 UI库。 "
        },
        {
          text:
            "能熟练应用 Vue框架以及uni-app框架进行多端开发经验，熟悉 Vuex、Vue-router、Vue-cli使用。"
        },
        {
          text:
            "能熟练应用 React框架，熟悉 Redux、React-Router-Dom、Create-react-app使用。"
        },
        {
          text: "能熟练掌握CSS 预编译语言less，对 sass 有过了解。"
        },
        {
          text: "对Node.js和 JWT 规范有一定了解。"
        },
        {
          text: "使用过Webpack、npm、yarn 等前端构建工具，并有一定了解。"
        },
        {
          text: "能熟练使用git 协作工具，熟悉 git基础命令，了解 SVN"
        },
        {
          text: "拥有模块化开发思想，并且在项目中使用模块化开发。"
        },
        {
          text: "熟悉禅道，能用其进行 BUG管理。 "
        },
        {
          text:
            "有使用HBuilderX 打包移动端应用的经验, 有使用 Webpack打包 PC 端应用的经验。"
        },
        {
          text:
            "对于echarts，百度地图以及语音功能, 短信验证，第三方登录有一定的开发经验。"
        },
        {
          text: "了解微信小程序开发，有微信小程序开发经验。"
        }
      ],
      six:[
         {
          type: "ji",
          text:"http://abc.kaisadiguo.top/moves/",
          a:true
          },
          {
            a:true,
            text:"http://abc.kaisadiguo.top/shoppings/#/"
          }
      ],
      pei: [
        //技能掌握
        {
          type: "javaScript",
          value: 90,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
         {
          type: "node.js",
          value: 80,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
        {
          type: "Css3",
          value: 90,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
        {
          type: "HTML5",
          value: 90,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
        {
          type: "Vue",
          value: 90,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
        {
          type: "React",
          value: 90,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
        {
          type: "uni-app",
          value: 90,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
        {
          type: "微信小程序",
          value: 80,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        },
        {
          type: "JQuery",
          value: 80,
          color:
            "#" +
            Math.random()
              .toString(16)
              .substring(2, 8)
        }
      ],
      four: [
        //项目经验
        {
          type: "exp",
          off: true,
          title: "项目一:广汽商贸物流可视化平台",
          des: "为商家提供在线平台展示，用户使用平台在线查看物流数据。",
          meto: [
            "1、负责参与前端框架的构建。",
            "2、参与开发中技术难题的讨论解决。",
            "3、根据项目需求文档，编写公共区域的可复用组件。",
            "4、负责仓库实时监控、整车实时看板、仓储统计、入库明细、出库明细、仓库信息页面功能的实现",
            "5、负责与后端开发团队紧密配合，确保项目的交互功能完整实现。"
          ],
          content:
            "利用vue.js、Echarts 、HTML5、CSS3、JS、elementui、axios、vuex、es6第三方百度地图开放平台技术进行组件化和模块化开发。",
          url: [
            require("@/assets/canku.png"),
            require("@/assets/me.png"),
            require("@/assets/home.png"),
            require("@/assets/sker.png")
          ]
        },
        {
          off: true,
          title: "项目二:联通计费管理平台",
          des: "为用户提供自有业务与第三方客户提供业务服务能力。",
          meto: [
            "1、负责首页与受理平台构建，用户数据的获取以及渲染，用户详情页面构建与渲染。",
            "2、参与讨论前端开发中遇到的技术难题，并积极提供解决方案。",
            "3、依据项目需求，完成对复用组件的编写。",
            "4、与后端工程师配合，实现项目需求中页面交互功能开发。"
          ],
          content:
            "利用vue.js、vuex、Echarts 、HTML5、CSS3、JS、vue-router、ant design vue、axios进行组件化和模块化开发",
          url: [
            require("@/assets/liantong/child.png"),
            require("@/assets/liantong/home.png"),
            require("@/assets/liantong/login.png")
          ]
        },
        {
          off: true,
          title: "项目三:电影预告",
          des: "为用户提供预览即将播出的电影预告片详情。",
          meto: [
            "1、	负责电影首页、搜索页、我的页面构建，以及对详情页面的编写。",
            "2、	负责进行多端混合开发ios/安卓/h5/小程序。",
            "3、	解决前端开发中遇到的技术难点，对页面性能进行优化，提高代码稳定性、提升用户体验。",
            "4、	与后端工程师配合，实现第三方qq、微信、微博登录"
          ],
          content: "利用HTML5、CSS3、JS、uni-app技术进行组件化和模块化开发。",
          url: [
            require("@/assets/movie/me.png"),
            require("@/assets/movie/seach.png"),
            require("@/assets/movie/info.png")
          ]
        },
        {
          off: true,
          title: "项目四:课程系统",
          des: "为用户提供预览即将播出的电影预告片详情。",
          meto: [
            "1、负责前端页面搭建。 ",
            "2、负责后端接口编写业务逻辑的搭建。",
            "3、分析项目需求，完成对复用组件的编写。"
          ],
          content:
            "利用node.js、HTML5、CSS3、JS、handlebars、express进行组件化和模块化开发",
          url: [
            require("@/assets/nodes/show.png"),
            require("@/assets/nodes/add.png"),
            require("@/assets/nodes/todo.png")
          ]
        }
      ],
      five: [
        {
          type:'gongzuo',
          gongsi:'数安值科技有限公司',
          arr: [
            "1、负责公司项目的前端修改调试和开发工作。",
            "2、与项目经理、UI设计师以及后端工程师配合完成 Web开发工作。",
            "3、配合后台开发人员，完成前端页面的脚本编码工作。",
            "4、参与前端框架搭建、公共组件的开发与维护，参与前端架构建设与需求分析。 ",
            "5、负责参与解决前端开发流程中的各种技术难题。 ",
            "6、持续优化项目技术、保证代码质量和服务稳定、提升用户体验，根据公司业务需求，按要求迭 代产品。",
            "7、完成上级指派的其他工作。"
          ]
        }
      ],
      btnoff:true
    };
  },
  methods:{
    downFn(){
      window.open(window.location.origin+'/#/download')
    }
  }
};
</script>
<style lang="scss">
.me {
  box-shadow: 1px 1px 1px 2px rgb(236, 234, 234);
  padding: 2px 0px;
  .down{
    width: 50PX;
    height: 50PX;
    border-radius: 50%;
    box-shadow: 2PX 2PX 2PX 2PX rgb(192, 191, 191);
    cursor: pointer;
    position: fixed;
    right: 60px;
    bottom: 100px;
  }
  .van-icon-down:before {
    line-height: 50PX;
    text-align: center;
    width: 50PX;
  }
}
</style>