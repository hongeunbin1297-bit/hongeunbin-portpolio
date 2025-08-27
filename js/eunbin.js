$(function () {
  //인트로 서서히 사라지기
  function intro() {
    $('.intro').fadeOut(500)
  }

  setTimeout(intro, 2000)
  $('header ul li').click(function (e) {
    e.preventDefault()
    $(this).addClass('on').siblings().removeClass('on')

    let idx = $(this).index()
    let section = $('main section').eq(idx)
    let sectionD = section.offset().top - 114
    $('html, body').animate({
      scrollTop: sectionD
    }, 500)
  })

  $(window).scroll(function () {
    $('main section').each(function () {
      if ($(this).offset().top <= $(window).scrollTop() + 114) {
        let idx = $(this).index()
        $('header ul li').removeClass('on')
        $('header ul li').eq(idx).addClass('on')
      }
    })
  })


  //앱팝업창

  $('.ballon').click(function () {
    $('.apppopup').show()
    $('.sub1').show()
  })

  $('.foodosub').click(function () {
    $('.apppopup').show()
    $('.sub1').show()
  })

  $('.popupbtn').click(function () {
    $('.apppopup').fadeOut(500);
    $('.sub1').hide();
  });

  //그래픽 디자인 팝업창

  $('.card1').click(function () {
    $('.popup').show()
    $('.popupcard1').show()
  })
  $('.card2').click(function () {
    $('.popup').show()
    $('.popupcard2').show()
  })
  $('.card3').click(function () {
    $('.popup').show()
    $('.popupcard3').show()
  })
  $('.card4').click(function () {
    $('.popup').show()
    $('.popupcard4').show()
  })
  $('.card5').click(function () {
    $('.popup').show()
    $('.popupcard5').show()
  })
  $('.card6').click(function () {
    $('.popup').show()
    $('.popupcard6').show()
  })
  $('.card7').click(function () {
    $('.popup').show()
    $('.popupcard7').show()
  })
  $('.card8').click(function () {
    $('.popup').show()
    $('.popupcard8').show()
  })
  $('.card9').click(function () {
    $('.popup').show()
    $('.popupcard9').show()
  })
})

$('.popupbtn').click(function () {
  $('.popup').fadeOut(500);
  $('.popupcard1, .popupcard2, .popupcard3, .popupcard4, .popupcard5, .popupcard6, .popupcard7, .popupcard8, .popupcard9').fadeOut(500);
});

// 스크롤 다운
$('.bg').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#section-3').offset().top
  }, 800);
});


//일정 위치에서 헤더생기기
const header = document.getElementById("header");
const section2 = document.getElementById("section-2");

window.addEventListener("scroll", function () {
  // section-2의 Y좌표
  const section2Top = section2.offsetTop;

  // 현재 스크롤 위치
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY >= section2Top - 10) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }

});

