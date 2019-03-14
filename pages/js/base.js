const randomTags = new Vue({
    el:"#random_tags",
    data:{
        tags:["fds","dsfas","dfa","dfsd"],
    },
    computed:{
        getRandomColor:()=>{
            return ()=>{
                const red = Math.random()*205+50;
                const green = Math.random()*205+50;
                const blue = Math.random()*205+50;
                return `rgb(${red},${green},${blue})`
            }
        },
        getRandomSize:()=>{
             return () => {
                 const size = Math.random()*20+12;
                 return `${size}px`
             }
        }
    }
})

const  newHot = new Vue({
    el:"#new_hot",
    data: {
        titleList:[
            {title:"sdfdsfsdf",link:"https://www.baidu.com"},
            {title:"sdfdsfsdf",link:"https://www.baidu.com"}
        ]
    }
})

const newComment = new Vue({
    el:"#new_comments",
    data:{
        commentList:[
            {name:"用户名",date:"2019nian",comment:"dsfsdfsd"}
        ]
    }
})