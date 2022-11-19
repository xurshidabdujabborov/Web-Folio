window.addEventListener("load", function (e) {
    $("header .activeBars").click(function () {
        $("header .activeMenuBars").slideToggle(1000);
      });
  $("header .eyes").click(function () {
    var attr = $("header .pass input").attr("type");
    if (attr == "password") {
      $("header .pass input").attr("type", "text");
    } else {
      $("header .pass input").attr("type", "password");
    }
  });

  // header navbar signin form error Validation togirlash kerak

  $(".headerLogin button").click(function (e) {
    e.preventDefault();
    if ($(".headerLogin input").val() === "") {
      $(".errorMsg").show();
    } else {
      $(".errorMsg").hide();
    }
  });

  /// header navbar signin close

  $(".headerLogin .close").click(function () {
    $(".headerLogin").fadeOut(500);
  });

  $("header .signUp").click(function () {
    $(".headerLogin").fadeIn();
    $(".headerLogin").css("display", "flex");
  });
  let time = 3600;
    const countDownEl = document.getElementById
      ("countdown");
    const countEl = document.getElementById  
    ("count")
    const lilEl = this.document.getElementById
    ("lil")
  
    setInterval(updatecountdown, 700);
  
    function updatecountdown() {
      const minutes = Math.floor(time / 60)
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds :
        seconds;
      countDownEl.innerHTML = `${minutes} :
         ${seconds}`;
      time--; 

      const sec = Math.floor(time / 80)
      let conds = time % 60;
      conds = conds < 10 ? "0" + conds:
      conds;
       countEl.innerHTML = `${sec} : ${conds}`
       time--;

       const ces = Math.floor(time / 100)
       let nec = time % 60;
       nec = nec < 10 ? "0" + nec:
       nec;
       lilEl.innerHTML = `${ces} : ${nec}`
       time--;
      }
      // carusel
      $(".carusel .owl-carousel").owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
      });
      $(".shop .uno").click(function () {
        if ($(".shop .activeCourses").hasClass("activeCourses")) {
          $(".shop .activeCourses").removeClass("activeCourses");
        } else {
          $(".shop .def").addClass("activeCourses");
        }
      });
});