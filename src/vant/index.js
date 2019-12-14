import Vue from 'vue';
import {Toast,CellGroup, Field,Dialog,Step,Steps,ImagePreview,Button,Tabbar,TabbarItem,Icon,Circle,Progress,Lazyload} from 'vant';


Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem).use(CellGroup);
Vue.use(Icon);
Vue.use(Circle);
Vue.use(Progress);
Vue.use(Lazyload);
Vue.use(ImagePreview);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Step).use(Steps);
Vue.use(Field);