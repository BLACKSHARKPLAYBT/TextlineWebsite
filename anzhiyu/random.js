var posts=["2024/11/28/LG G8 Thinq 9008 经历/","2024/12/28/数学复习/","2025/01/05/2024 级实用英语（1）期末复习提纲总结/","2024/12/30/语文常识/","2024/12/24/期末元宇宙作业/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };