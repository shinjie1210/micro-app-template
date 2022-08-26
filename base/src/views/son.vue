<!-- son.vue -->
<template>
    <div>
        <!--
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/son`
     -->
        <micro-app name="son" :url="url" baseroute="/base/son">
        </micro-app>
    </div>
</template>
<script>
import config from '../config/config.js'
export default {
    data() {
        return {
            url: `${config.son}/base/son/`
        }
    },
    methods: {

    },
};
</script>