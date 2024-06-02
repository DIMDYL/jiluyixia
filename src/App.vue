<template>
  <RouterView />
</template>
<style>
.content .look {
  justify-content: end !important;
}
/*当页面大于 1200px 时，大屏幕，主要是 PC 端*/
@media (min-width: 1200px) {
  .nav .userhometitle {
    display: none !important;
  }
  /* .userhomenav {
    display: none !important;
  } */
}

/*在 992 和 1199 像素之间的屏幕里，中等屏幕，分辨率低的 PC*/
@media (min-width: 992px) and (max-width: 1199px) {
  .nav .userhometitle {
    display: none !important;
  }
  .leftarticle,
  .rightarticle {
    width: 90% !important;
  }
}

/*在 768 和 991 像素之间的屏幕里，小屏幕，主要是 PAD*/
@media (min-width: 768px) and (max-width: 991px) {
  .leftarticle,
  .rightarticle {
    width: 90% !important;
    padding: 20px !important;
    .leftimg {
      width: 300px !important;
      img {
        width: 100%;
        height: 100% !important;
      }
    }
  }
  .userhomenav {
    justify-content: space-between !important;
    padding: 0 10px !important;
    .logo {
      display: none !important;
    }
  }
  .userleftnav {
    display: none !important;
  }
  .el-dialog {
    width: 50% !important;
  }
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
  .mini {
    display: block !important;
  }
  .navlist {
    display: none;
  }
}

/*在 480 和 767 像素之间的屏幕里，超小屏幕，主要是手机*/
@media (min-width: 480px) and (max-width: 767px) {
  .leftarticle,
  .rightarticle {
    width: 90% !important;
    padding: 20px !important;
    .leftimg {
      width: 100% !important;
      height: 200px !important;
      display: flex;
      justify-content: center;
      .uniform-image {
        height: 200px !important;
      }
    }
  }
  .rightarticle {
    flex-wrap: wrap-reverse !important;
  }
  .userhomenav {
    justify-content: space-between !important;
    padding: 0 10px !important;
    .logo {
      display: none !important;
    }
  }
  .publish {
    .el-form {
      width: 100% !important;
    }
  }
  .content {
    height: auto !important;
  }
  .userleftnav {
    display: none !important;
  }
  .el-dialog {
    width: 80% !important;
  }
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
  .usernav {
    justify-content: space-between !important;
    padding: 0 10px !important;
    box-sizing: border-box;
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
  .articlebottom .info,
  .articlebottom .edit,
  .articlebottom .look {
    justify-content: center !important;
  }

  .leftarticle,
  .rightarticle {
    width: 90% !important;
    padding: 20px !important;

    .leftimg {
      width: 100% !important;
      height: 200px !important;
      display: flex;
      justify-content: center;
      .uniform-image {
        height: 200px !important;
      }
    }
  }
  .rightarticle {
    flex-wrap: wrap-reverse !important;
  }
  .userhomenav {
    justify-content: space-between !important;
    padding: 0 10px !important;
    .logo {
      display: none !important;
    }
  }
  .publish {
    .el-form {
      width: 100% !important;
    }
  }
  .userleftnav {
    display: none !important;
  }
  .content {
    /* height: auto !important; */
  }
  .el-dialog {
    width: 80% !important;
  }
  .navuser {
    display: none !important;
  }
  .userinfobox {
    justify-content: center;
    width: 80% !important;
    .info {
      margin-left: inherit !important;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
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
}
::-webkit-scrollbar-thumb {
  background-color: #737072;
  height: 50px;
  outline-offset: -2px;
  outline: 2px solid #3d3b3b;
  -webkit-border-radius: 4px;
  /* border: 2px solid #fff; */
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/*滚动框背景样式*/
::-webkit-scrollbar-track-piece {
  background-color: #3d3b3b;
  -webkit-border-radius: 0;
}
.el-drawer {
  background-color: black !important;
  border-right: 4px solid #ffd04b;
}
</style>
