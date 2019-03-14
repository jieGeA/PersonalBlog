//每日一句vm
const everyday = new Vue({
    el:"#every_day",
    data:{
        content:"fsdfsdf"
    },
    created () {
        //请求每日一句数据
    }
})
//blog 文章vm
const articleList = new Vue({
    el:"#article_list",
    data:{
        articleList:[
            {   articleTitle:"PC端微信(2.6.6.28)防撤回",
                articleContent:`此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其变为74。保存文件...`,
                date:'2019-02-14',
                views:'501',
                tags:`weixin`,
                id:1,
                link:"https://www.baidu.com"
            },
            {   articleTitle:"PC端微信(2.6.6.28)防撤回",
                articleContent:`此方法仅限于官网下载的PC版微信2.6.6.28版本。工具：winhex19、pc版微信打开winhex19， 文件->打开，定位并找到微信安装目录中的WeChatWin.dll，打开。点击左侧offset列，使偏移量转为16进制格式显示。点击工具栏中的“转到偏移量”。输入 0024A58E ，确定。自动定位到一个数值：75，其中5以反色（蓝色）光标显示，输入4，使其变为74。保存文件...`,
                date:'2019-02-14',
                views:'501',
                tags:`weixin`,
                id:2,
                link:"https://www.baidu.com"
            }
        ]

    }
})



