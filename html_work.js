var cheer = require("cheerio");


var html = `

<p>[##_Image|kage@bgHJ1P/btqDdHV3M39/HFMK6iyFEo2p97dlcKPRck/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@ydeJ6/btqDcdBqtvA/xT5R8YbjNTsObokfobNBa1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@caosYg/btqDcxM8xmP/BSiaz68Sya6KnCsdL5AKQ1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@pCyv7/btqDbl0WJKN/SFTkeNZyazcugxG42qElPK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@M5Qdx/btqDbkHG9Xy/YEfTQ5ecq4ZKB1eUsVnJjK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@0czqk/btqC9Mx7MtM/V0kd2k9td6y5EIEncBMAPk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@ugyn3/btqDdH2PjnJ/d5xZ8KdKo46wwD1lZtTkGk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@vtNrm/btqDahLxL2Q/93iaRuU185yvBSwk8d6qY0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@cJ400O/btqDbFrvjH2/RYvrkgL8tpFAEWAtlOKEik/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@cqN7kA/btqC9OiyMNO/wFzbkr6kbsGkHGfkgMn72k/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@r9Igw/btqC9MLKxK2/64FpST3YiohKbc3HPCDOP1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bkGz2p/btqDc3Zl5h0/vSWVSeuC7tnVl95ONp4XIK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@HzPdl/btqDcx0JzHD/oOeUEPwtqLYWK3NS1JoFoK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@PfXs8/btqDcyec0jg/v3mJDUN2sY5WKFfsmZT0KK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@wiL8p/btqDbFLGKRp/ZjHwFZ3EHgFG33dvssRopk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@d4xLlO/btqDdHBLqyp/yHYwEIQq7INQBvXLwsI701/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@dgl1Ae/btqDbEsoMID/hVwpwddljeIqr9SYSlRTy1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bPvfdo/btqDdHBLqx7/wS8vfkw1pKy23MKNK3E8Nk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bNIqio/btqDcwUZ7Qn/6m5RXjaAvEk7rMZIu8PD10/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@dbVVxM/btqDblzUfNI/aPU7sFsW3OHdbvcDoKQYk0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@lgkoJ/btqDc5v6qmZ/P6OA5Q6AunuM6PJw7uMLe0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@b1dr6N/btqDcyrJGzb/lSRL5p5rTkD1TdjjJnqY6k/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@rQ869/btqDbElEF4r/ZhPQGC5LHVq9iI0RWaZkc0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@do82jj/btqDaVIc9Ox/pBa9Cj5xqK9PvqIwHJHQf1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@1unQL/btqDahShDx3/EdL9XnZyJqT2BBUbakbnM1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@caOvD7/btqDbGcG5qx/wl9KN38jajF8Znk7LD7D61/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@Aztlf/btqDahEGRBz/lL2FfLZCOCuzxJaKYJHkz0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@Thbo0/btqC9NDP8kG/dH1fv4ZFmya3dBFppjrMG0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@lNRAt/btqDc5iCnjz/GsOmbraYKKaoBwgW8AqmQk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@cSHQGS/btqC9zlFLuf/fpuq97f1aGr99fNO57COU0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@ESPBv/btqDbk13Os9/a6logjQxPzjS1bNo7V7KXk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bDQp9x/btqDcxsRiuf/kkJddrsmjhatpTZUUaf9uK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@c1GX5M/btqDcx7rCMu/SpdFGNyawDguXS76Bla4K0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@eqCu1W/btqDc4xcGBT/KTmNpDRogHscBHXC2bgX5K/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@AGVcr/btqDbElEF4a/tJkXFwO9fi5fe5wAKUpk30/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@dIAYwx/btqDcxfk3vU/Kgov2evWaB0rm9K7Pge9X0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@ccXogL/btqDaVapwHJ/8nAFxU4TYaK8gQD8oazxnk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bbJ1lS/btqDbls8lgz/Rw7fFczDxA5kZiWviwyXUK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@TnCdU/btqDaicvjHI/UWrxsgWtDdyeIzkYCcSJGK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@doqgGr/btqDdHhsiZv/Nd5mDcS8R1OynXv7qdyo21/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bftpyF/btqDaWmOROD/zFXISgzUQrtDJVJvRE2IF0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@5BOJT/btqDahY1ugK/sJZOiuZJNBlPoV5BDUZsbK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@cQHC22/btqDaVBuyt8/vTBM3Qe3eplwcBrKoqMhFk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@EEyXP/btqDdIU1AhP/Jmd7EfDCsFhMg4dqnmExm0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@dWdJxQ/btqDblfDlx6/LOlFGqXBjCkT6IoansTtp1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@l9PlB/btqDbFSuQ6f/Zg3iqz1AB63bVMdcAgKw4K/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@cvr38s/btqDaVasPT0/8snRVsTyRluWypnjONh2iK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bSD11l/btqDaUCxH8p/c1Ns1wzqK1O2hojjAOkeH1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@tUJrw/btqDcduDWyG/HdSvNoOw95bTXG1aTbFB40/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@U0HzI/btqDdHaJT2m/Gv723iCrPPymyOEd2rYjOK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@dhmhmD/btqDceNQ9Az/JwapdkGctKAL6uee093VH0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@oAkKE/btqDbE7au9a/cmCfoqw9Z6zSu5eR0LWCP0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@btMSRC/btqDbElHSJQ/kF0ldZvKXssS9fGFWX6taK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@G6xmT/btqC9M6cxH3/NDx0IR3r4Y9kEmRHk7McMK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@UKhV3/btqDbEzeXiv/l346rWkQWqdvC6pqdHsng1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bvOyM0/btqDah5TZuC/xpRcBUlk2GXkpZ8XEovTVk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@tlEPa/btqC9x2mHUI/IvGtPZMD9hhPgTqJFebjEK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@ca7P3p/btqDcx0MLiP/v63fKMVeK6SP8f2tvzeUa0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@uQtX4/btqDah5TZuU/OmZv6TP3DBQg1G0xUyXMl0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bdms6B/btqDaUWSk5X/scRblhQ0HRH7wW5B93H5a0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@Ad5DK/btqDcxl8ZXf/KfVrBv3KQtnUO2MirKbOs1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bUuXHK/btqDc5bQSSi/t0uRGTsrIZuNIr46SICoaK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@7hV98/btqDaWgbh0e/nUznOZWFCqVN0eZV2bDb70/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@b0ENxb/btqDaV2z5c3/TtSv7lYYZWkyuuHuFyUre0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bJreb2/btqDceAjjSC/0oqpmFk4jMwWgXLf184VG1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@UOkce/btqC9Ov5U2e/4VYlRcYgkQdWWu3KwgkWB0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@mFkcx/btqDbFZg3xl/Gix48BgK6Sun5PuR6ULkl0/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bstrNu/btqC9OiB7ju/IVzbj6P3yRsD1WtsDp35UK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@bgUVtU/btqDaiDIEY4/Q8N24C27FrqfXKW5WfxRi1/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@mcNlf/btqDbltbunT/SzY2qQEAXk2n1qITKezm6k/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@qJhCD/btqDcw8ChE5/YuUa2JxWzkhKicR7xuW9Tk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@cfpWW7/btqDcdIePJp/aUbbvbOF6aQSNPJPYBtaUk/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>
<p>[##_Image|kage@clqhnS/btqDc3yk8v6/Uckdjxmpice9H4akSJk8OK/img.png|alignCenter|data-origin-width="0" data-origin-height="0"|||_##]</p>`;




let html2 = `<div class="freefont">
<!--KOGL  1line -->
<div id="KOGL" onclick="serviceInfoOpen()">
<img src="/kor/images/sub/plan/font/KOGL.png" alt="">
</div> 
<div id="KOGL_01" title="저작권자 : 국립중앙도서관">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=1"><img src="/kor/images/sub/plan/font/KOGL_01.png" alt="국립중앙도서관체"></a>
</div> 
<div id="KOGL_02" title="저작권자 : 김해시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=2"><img src="/kor/images/sub/plan/font/KOGL_02.png" alt="김해가야체B"></a>
</div> 
<div id="KOGL_03" title="저작권자 : 김해시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=3"><img src="/kor/images/sub/plan/font/KOGL_03.png" alt="김해가야체R"></a>
</div>  
<!--KOGL  2line -->
<div id="KOGL_04" title="저작권자 : 포천시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=4"><img src="/kor/images/sub/plan/font/KOGL_04.png" alt="막걸리체"></a>
</div> 
<div id="KOGL_05" title="저작권자 : 순천시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=5"><img src="/kor/images/sub/plan/font/KOGL_05.png" alt="순천체B"></a>
</div> 
<div id="KOGL_06" title="저작권자 : 순천시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=6"><img src="/kor/images/sub/plan/font/KOGL_06.png" alt="순천체R"></a>
</div> 
<div id="KOGL_07" title="저작권자 : 안동시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=7"><img src="/kor/images/sub/plan/font/KOGL_07.png" alt="안동엄마까투리체"></a>
</div>     
<!--KOGL  3line -->
<div id="KOGL_08" title="저작권자 : 안동시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=8"><img src="/kor/images/sub/plan/font/KOGL_08.png" alt="안동월영교체"></a>
</div> 
<div id="KOGL_09" title="저작권자 : 양평군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=9"><img src="/kor/images/sub/plan/font/KOGL_09.png" alt="양평군체"></a>
</div> 
<div id="KOGL_10" title="저작권자 : 포천시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=10"><img src="/kor/images/sub/plan/font/KOGL_10.png" alt="오성과한음체B"></a>
</div> 
<div id="KOGL_11" title="저작권자 : 포천시">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=11"><img src="/kor/images/sub/plan/font/KOGL_11.png" alt="오성과한음체R"></a>
</div>    
<!--KOGL  4line -->
<div id="KOGL_12" title="저작권자 : 완도군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=12"><img src="/kor/images/sub/plan/font/KOGL_12.png" alt="완도청정바다체B"></a>
</div> 
<div id="KOGL_13" title="저작권자 : 완도군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=13"><img src="/kor/images/sub/plan/font/KOGL_13.png" alt="완도청정바다체R"></a>
</div> 
<div id="KOGL_14" title="저작권자 : 완도군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=14"><img src="/kor/images/sub/plan/font/KOGL_14.png" alt="완도희망체B"></a>
</div> 
<div id="KOGL_15" title="저작권자 : 완도군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=15"><img src="/kor/images/sub/plan/font/KOGL_15.png" alt="완도희망체R"></a>
</div>   
<!--KOGL  5line -->
<div id="KOGL_16" title="저작권자 : 정선군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=16"><img src="/kor/images/sub/plan/font/KOGL_16.png" alt="정선동강체"></a>
</div> 
<div id="KOGL_17" title="저작권자 : 정선군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=17"><img src="/kor/images/sub/plan/font/KOGL_17.png" alt="정선아리랑 뿌리체"></a>
</div> 
<div id="KOGL_18" title="저작권자 : 정선군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=18"><img src="/kor/images/sub/plan/font/KOGL_18.png" alt="정선아리랑 혼체"></a>
</div> 
<div id="KOGL_19" title="저작권자 : 정선군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=19"><img src="/kor/images/sub/plan/font/KOGL_19.png" alt="정선아리랑체"></a>
</div>  
<!--KOGL  6line -->
<div id="KOGL_20" title="저작권자 : 전라남도">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e3367e6de143a8f9090e8cbef9c9267ac98&amp;fileSn=20"><img src="/kor/images/sub/plan/font/KOGL_20.png" alt="푸른전남체B"></a>
</div> 
<div id="KOGL_21" title="저작권자 : 전라남도">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=1"><img src="/kor/images/sub/plan/font/KOGL_21.png" alt="푸른전남체M"></a>
</div> 
<div id="KOGL_22" title="저작권자 : 전라남도">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=2"><img src="/kor/images/sub/plan/font/KOGL_22.png" alt="푸른전남체R"></a>
</div> 
<div id="KOGL_23" title="저작권자 : 한국수력원자력">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=3"><img src="/kor/images/sub/plan/font/KOGL_23.png" alt="한돋움체B"></a>
</div>     
<!--KOGL  7line -->
<div id="KOGL_24" title="저작권자 : 한국수력원자력">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=4"><img src="/kor/images/sub/plan/font/KOGL_24.png" alt="한돋움체R"></a>
</div> 
<div id="KOGL_25" title="저작권자 : 한국수력원자력">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=5"><img src="/kor/images/sub/plan/font/KOGL_25.png" alt="한울림체"></a>
</div> 
<div id="KOGL_26" title="저작권자 : 고흥군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=6"><img src="/kor/images/sub/plan/font/KOGL_26.png" alt="행복고흥체B"></a>
</div> 
<div id="KOGL_27" title="저작권자 : 고흥군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=7"><img src="/kor/images/sub/plan/font/KOGL_27.png" alt="행복고흥체M"></a>
</div>      	
<!--KOGL  8line -->
<div id="KOGL_28" title="저작권자 : 고흥군">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=8"><img src="/kor/images/sub/plan/font/KOGL_28.png" alt="행복고흥체L"></a>
</div> 
<div id="KOGL_29" title="저작권자 : 한국토지주택공사">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=9"><img src="/kor/images/sub/plan/font/KOGL_29.png" alt="LH체"></a>
</div> 
<div id="KOGL_30" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33c4cc4645eb7a89c35aa3e76edc69951f&amp;fileSn=10"><img src="/kor/images/sub/plan/font/KOGL_30.png" alt="Mapo 금빛나루"></a>
</div> 
<div id="KOGL_31" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=1"><img src="/kor/images/sub/plan/font/KOGL_31.png" alt="Mapo 꽃섬"></a>
</div> 
<!--KOGL  9line -->
<div id="KOGL_32" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=2"><img src="/kor/images/sub/plan/font/KOGL_32.png" alt="Mapo당인리발전소"></a>
</div> 
<div id="KOGL_33" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=3"><img src="/kor/images/sub/plan/font/KOGL_33.png" alt="Mapo디카포"></a>
</div> 
<div id="KOGL_34" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=4"><img src="/kor/images/sub/plan/font/KOGL_34.png" alt="Mapo마포나루"></a>
</div> 
<div id="KOGL_35" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=5"><img src="/kor/images/sub/plan/font/KOGL_35.png" alt="Mapo마포배낭여행"></a>
</div>   
<!--KOGL  10line -->
<div id="KOGL_36" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=6"><img src="/kor/images/sub/plan/font/KOGL_36.png" alt="Mapo마포애민"></a>
</div> 
<div id="KOGL_37" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=7"><img src="/kor/images/sub/plan/font/KOGL_37.png" alt="Mapo한아름"></a>
</div> 
<div id="KOGL_38" title="저작권자 : 국립박물관문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=8"><img src="/kor/images/sub/plan/font/KOGL_381.png" alt="국립박물관문화재단 클래식B"></a>
</div> 
<!--KOGL 11line -->
<div id="KOGL_39" title="저작권자 : 국립박물관문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=9"><img src="/kor/images/sub/plan/font/KOGL_391.png" alt="국립박물관문화재단 클래식L"></a>
</div>   	
<div id="KOGL_40" title="저작권자 : 국립박물관문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=10"><img src="/kor/images/sub/plan/font/KOGL_401.png" alt="국립박물관문화재단 클래식M"></a>
</div> 
<!--KOGL  12line -->
<div id="KOGL_41" title="저작권자 : 서울시 마포구">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33fc3894f793a5de126274d1e926018813&amp;fileSn=11"><img src="/kor/images/sub/plan/font/KOGL_41.png" alt="Mapo홍대프리덤"></a>
</div>
<br style="clear: both; display: block;">
<!--OFL 1line-->
<div id="OFL" onclick="serviceInfoOpen()">
<img src="/kor/images/sub/plan/font/OFL.png" alt="OFL(30종)">
</div>
<div id="OFL_01" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=1"><img src="/kor/images/sub/plan/font/OFL_01.png" alt="나눔고딕"></a>
</div>      	     	
<div id="OFL_02" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=2"><img src="/kor/images/sub/plan/font/OFL_02.png" alt="나눔고딕 에코"></a>
</div>
<div id="OFL_03" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=3"><img src="/kor/images/sub/plan/font/OFL_03.png" alt="나눔 명조"></a>
</div>    		
<!--OFL 2line-->   	  
<div id="OFL_04" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=4"><img src="/kor/images/sub/plan/font/OFL_04.png" alt="나눔명조 에코"></a>
</div>    
<div id="OFL_05" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=5"><img src="/kor/images/sub/plan/font/OFL_05.png" alt="나눔바른고딕"></a>
</div>  
<div id="OFL_06" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=6"><img src="/kor/images/sub/plan/font/OFL_06.png" alt="나눔바른펜"></a>
</div>  
<div id="OFL_07" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=7"><img src="/kor/images/sub/plan/font/OFL_07.png" alt="나눔손글씨 붓체"></a>
</div>      
<!--OFL 3line-->   	  
<div id="OFL_08" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=8"><img src="/kor/images/sub/plan/font/OFL_08.png" alt="나눔손글씨 펜체"></a>
</div>    
<div id="OFL_09" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=9"><img src="/kor/images/sub/plan/font/OFL_09.png" alt="나눔스퀘어"></a>
</div>  
<div id="OFL_10" title="저작권자 : 네이버㈜,(재)네이버문화재단">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=10"><img src="/kor/images/sub/plan/font/OFL_10.png" alt="나눔스퀘어라운드"></a>
</div>  
<div id="OFL_11" title="저작권자 : greenegg">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=11"><img src="/kor/images/sub/plan/font/OFL_11.png" alt="Delta Universe"></a>
</div>
<!--OFL 4line-->   	  
<div id="OFL_12" title="저작권자 : ㈜우아한형제들">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=12"><img src="/kor/images/sub/plan/font/OFL_12.png" alt="배달의민족 도현체"></a>
</div>    
<div id="OFL_13" title="저작권자 : ㈜우아한형제들">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=13"><img src="/kor/images/sub/plan/font/OFL_13.png" alt="배달의 민족 연성체"></a>
</div>  
<div id="OFL_14" title="저작권자 : ㈜우아한형제들">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=14"><img src="/kor/images/sub/plan/font/OFL_14.png" alt="배달의 민족 을지로체"></a>
</div>  
<div id="OFL_15" title="저작권자 : ㈜우아한형제들">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=15"><img src="/kor/images/sub/plan/font/OFL_15.png" alt="배달의 민족 주아체"></a>
</div>   
<!--OFL 5line-->   	  
<div id="OFL_16" title="저작권자 : greenegg">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=16"><img src="/kor/images/sub/plan/font/OFL_16.png" alt="BOKEH"></a>
</div>    
<div id="OFL_17" title="저작권자 : ㈜스포카">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=17"><img src="/kor/images/sub/plan/font/OFL_17.png" alt="소포카 한 산스"></a>
</div>  
<div id="OFL_18" title="저작권자 : greenegg">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=18"><img src="/kor/images/sub/plan/font/OFL_18.png" alt="I AM A PLAYER"></a>
</div>  
<div id="OFL_19" title="저작권자 : greenegg">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=19"><img src="/kor/images/sub/plan/font/OFL_19.png" alt="안경잡이체"></a>
</div>    	
<!--OFL 6line-->   	  
<div id="OFL_20" title="저작권자 : ㈜야놀자">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e332393aa75f93bcd03572c12ca730e42ba&amp;fileSn=20"><img src="/kor/images/sub/plan/font/OFL_20.png" alt="야놀자 야체"></a>
</div>    
<div id="OFL_21" title="저작권자 : greenegg">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=1"><img src="/kor/images/sub/plan/font/OFL_21.png" alt="CAOOKEO"></a>
</div>  
<div id="OFL_22" title="저작권자 : 한국저작권위원회">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=2"><img src="/kor/images/sub/plan/font/OFL_22.png" alt="KCC김훈체"></a>
</div>  
<div id="OFL_23" title="저작권자 : 한국저작권위원회">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=3"><img src="/kor/images/sub/plan/font/OFL_23.png" alt="KCC도담도담체"></a>
</div>    
<!--OFL 7line-->   	  
<div id="OFL_24" title="저작권자 : 한국저작권위원회">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=4"><img src="/kor/images/sub/plan/font/OFL_24.png" alt="KCC무럭무럭체"></a>
</div>    
<div id="OFL_25" title="저작권자 : 한국저작권위원회">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=5"><img src="/kor/images/sub/plan/font/OFL_25.png" alt="KCC안중근체"></a>
</div>  
<div id="OFL_26" title="저작권자 : 한국저작권위원회">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=6"><img src="/kor/images/sub/plan/font/OFL_26.png" alt="KCC은영체"></a>
</div>  
<div id="OFL_27" title="저작권자 : 한국저작권위원회">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=7"><img src="/kor/images/sub/plan/font/OFL_27.png" alt="Tlab신영체"></a>
</div>    
<!--OFL 8line--> 
<div id="OFL_28" title="저작권자 : ㈜우아한형제들">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=8"><img src="/kor/images/sub/plan/font/OFL_281.png" alt="배달의 민족 한나는 열한살체"></a>
</div>  
<div id="OFL_29" title="저작권자 : ㈜우아한형제들">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=9"><img src="/kor/images/sub/plan/font/OFL_291.png" alt="배달의 민족 가랑하랑체"></a>
</div>  
<!--OFL 9line--> 
<div id="OFL_30" title="저작권자 : greenegg">
<a href="https://gongu.copyright.or.kr/gongu/cmmn/file/fileDown.do?atchFileId=452e64e94c2b6005805cd68110510e33e2ac31550396c58f155aca4f5fd131a8&amp;fileSn=10"><img src="/kor/images/sub/plan/font/OFL_30.png" alt="60 STRIPE"></a>
</div>

</div>`


$ = cheer.load(html);
$2 = cheer.load(html2);

let table_str = '<table>\n';

$("p").each((idx, ele) => {
    if( true || idx % 2 == 0 ){
        table_str += "<tr>\n";
    }

    table_str += `\t<td><span>${$(ele).text().replace("||_##", $2($2(".freefont>div")[idx]).find("img").attr("alt") + "|" + $2($2(".freefont>div")[idx]).find("a").attr("href") + "|_blank_##" ) }</span></td><td style="text-align: center;"> ${ ($2($2(".freefont>div")[idx]).attr("title")+"").trim().replace("저작권자 :","") } </td>`;
    //table_str += `\t<td><span>${$(ele).text() }</span></td><td> ${ ($2($2(".freefont>div")[idx]).attr("title")+"").trim().replace("저작권자 :","") } </td>`;


    if( true || idx % 2 == 1 ){
        table_str += "\n</tr>";
    }

    table_str += "\n";
})

table_str += "</table>";

console.log($("p").length)
console.log($2(".freefont>div").length)
console.log(table_str)
