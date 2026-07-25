// 프롬프트 / 위젯 코드 복사 버튼
document.addEventListener('click', function (e) {
  var btn = e.target.closest('[data-copy]');
  if (!btn) return;

  var target = document.getElementById(btn.dataset.copy);
  if (!target) return;

  var text = target.textContent;
  var label = btn.dataset.label || '복사';

  function done() {
    btn.textContent = '복사됨!';
    btn.classList.add('done');
    setTimeout(function () {
      btn.textContent = label;
      btn.classList.remove('done');
    }, 1600);
  }

  function fail() {
    btn.textContent = '복사 실패 — 직접 선택해 주세요';
    setTimeout(function () {
      btn.textContent = label;
    }, 2600);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, fail);
  } else {
    // 구형 브라우저 대비
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      done();
    } catch (err) {
      fail();
    }
    document.body.removeChild(ta);
  }
});
