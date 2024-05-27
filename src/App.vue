<template>
  <RouterView />
</template>
<style>
/*当页面大于 1200px 时，大屏幕，主要是 PC 端*/
@media (min-width: 1200px) {
  .dailytopimg {
    min-height: 500px !important;
  }
}

/*在 992 和 1199 像素之间的屏幕里，中等屏幕，分辨率低的 PC*/
@media (min-width: 992px) and (max-width: 1199px) {
  .dailytopimg {
    min-height: 500px !important;
  }
}

/*在 768 和 991 像素之间的屏幕里，小屏幕，主要是 PAD*/
@media (min-width: 768px) and (max-width: 991px) {
  .nav {
    padding: 0 20px !important;
    .logo {
      /* width: 100% !important; */
      text-align: center;
      display: none !important;
    }
  }
  .show {
    background-color: black !important;
  }
  .article .leftarticle,
  .article .rightarticle {
    width: 80% !important;
    .img {
      width: 227px !important;
    }
    .word {
      p {
        font-size: 13px !important;
        line-height: 20px !important;
      }
    }
  }
  .right-title,
  .left-title {
    margin: 10px 5px !important;
    box-sizing: border-box;
    font-size: 13px !important;
  }
  .mini {
    display: block !important;
  }
  .navlist {
    display: none;
  }
}

/*在 480 和 767 像素之间的屏幕里，超小屏幕，主要是手机*/
@media (min-width: 480px) and (max-width: 767px) {
  .nav {
    flex-wrap: wrap;
    /* height: 100px !important; */
    padding: 0 20px !important;
    justify-content: space-between !important;
    .logo {
      display: none !important;
      /* width: 100% !important; */
      text-align: center;
    }
  }
  .show {
    /* background-color: transparent !important; */
  }
  .article .leftarticle,
  .article .rightarticle {
    width: 90% !important;
    .img {
      width: 200px !important;
    }
    .word {
      p {
        font-size: 13px !important;
        line-height: 20px !important;
      }
    }
  }
  .usernav {
    justify-content: space-between !important;
    padding: 0 10px !important;
    box-sizing: border-box;
  }
  .right-title,
  .left-title {
    margin: 10px 5px !important;
    box-sizing: border-box;
    font-size: 13px !important;
  }
  .mini {
    display: block !important;
  }
  .navlist {
    display: none !important;
  }
}

/*在小于 480 像素的屏幕，微小屏幕，更低分辨率的手机*/
@media (max-width: 479px) {
  .navuser{
    display: none !important;
  }
  .leftarticle,
  .rightarticle {
    flex-wrap: wrap;
    .img {
      width: 100% !important;
    }
  }
  .rightarticle {
    flex-direction: column-reverse;
  }
  .nav {
    justify-content: space-between !important;
    padding: 0 10px !important;
    box-sizing: border-box;
    .logo {
      display: none !important;
      text-align: center;
    }
  }
  .show {
    /* background-color: transparent !important; */
  }
  .mini {
    display: block !important;
  }
  .navlist {
    display: none;
  }
  .usernav {
    justify-content: space-between !important;
    padding: 0 10px !important;
    box-sizing: border-box;
  }
  .article .leftarticle,
  .article .rightarticle {
    width: 95% !important;
    .img {
      /* width: 127px !important; */
    }
    .word {
      p {
        font-size: 13px !important;
        line-height: 20px !important;
      }
    }
  }
  .right-title,
  .left-title {
    margin: 10px 5px !important;
    box-sizing: border-box;
    font-size: 13px !important;
  }
}
::-webkit-scrollbar-thumb {
  background-color: #737072;
  height: 50px;
  outline-offset: -2px;
  outline: 2px solid #fff;
  -webkit-border-radius: 4px;
  border: 2px solid #fff;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*滚动框背景样式*/
::-webkit-scrollbar-track-piece {
  background-color: #fff;
  -webkit-border-radius: 0;
}
.el-drawer {
  background-color: black !important;
  border-right: 4px solid #ffd04b;
}
</style>
