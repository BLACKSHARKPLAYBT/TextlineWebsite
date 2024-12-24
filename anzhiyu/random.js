var posts=["2024/11/28/LG G8 Thinq 9008 经历/","2024/12/24/期末元宇宙作业/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };