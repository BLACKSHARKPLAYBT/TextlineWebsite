var posts=["2025/02/12/我的世界小小世界汉化包/","2025/01/05/2024年/2024 级实用英语（1）期末复习提纲总结/","2024/12/28/2024年/数学复习/","2024/12/24/2024年/期末元宇宙作业/","2024/11/28/2024年/LG G8 Thinq 9008 经历/","2024/11/30/插画/2024-11月绘画/","2024/10/30/插画/2024-10月绘画/","2024/12/30/2024年/语文常识/","2024/12/30/插画/2024-12月绘画/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };