
    var video = document.getElementById('video');
    var loading  = document.querySelector('.loading');
    var begin  = document.querySelector('.begin');
    var hask=document.querySelector('.hask img');
     var user =navigator.userAgent;
     var isAndroid = user .indexOf('Android') > -1 || user.indexOf('Adr') > -1; //android终端
     var isiOS = !!user.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
     if(isiOS){
         video.src='http://h5v1.oss-cn-hangzhou.aliyuncs.com/src/mp4.mp4?time='+new Date();
     }else{
         video.src='.http://h5v1.oss-cn-hangzhou.aliyuncs.com/src/android.mp4?time='+new Date()
     }
     $('.begin').on('click',function () {
         $('.loading').css('display','none');
         video.playbackRate=1;
         video.play();
     })
    video.addEventListener('ended',function () {
        $('.img').fadeIn(500);
        $('.main').fadeOut(500);

    },false);
    video.addEventListener('error',function () {
      alert('视频播放错误！');
    });
    video.addEventListener('timeupdate',function () {
    });
    video.addEventListener("x5videoenterfullscreen", function () {
    });
    video.addEventListener("x5videoexitfullscreen", function () {
    })
    hask.addEventListener('click',function () {
        $('.img').slideUp(800);
        $('.cover').slideDown(800);
    });
    function handleResize() {
        var sWidth = 9;
        var sHeight = 16;
        var width = window.innerWidth;
        var height = window.innerHeight;
        video.width=width;
        video.height=(width * sHeight) / sWidth;
        var hheight = (width*50)/height;
        $('.hask').css('height',hheight);
        video.controls=false;
        var sw=width*400/1080;
        $('.loading .btns .btn').css('width',sw).css('height',sw+'px');
    }
    handleResize();
    window.addEventListener('resize', function () {
        handleResize()
    });
    //判断手机横竖屏状态：
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {
            handleResize();
            video.pause();
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            handleResize();
            $('.loading').css('display','block');
        }

    }, false);

