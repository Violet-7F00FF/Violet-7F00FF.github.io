/* ==========================================================
   VIOLET OS — 내 설정

   이 파일은 앞으로 새 index.html 을 올려도 덮어써지지 않습니다.
   한 번만 채워두면 계속 유지됩니다.
   ========================================================== */


/* ---------- 방명록 (Supabase) ----------
   Supabase → Settings → API Keys 의 Publishable key
   Supabase → Settings → Data API 의 Project URL
   두 값을 따옴표 사이에 붙여넣으세요.                        */

window.SUPABASE_URL = 'https://mqnuwwrfqfzenzxthygo.supabase.co';
window.SUPABASE_KEY = 'sb_publishable_kIYwQNK2-Ml0H2mx1hwgNA_gZLr4oA_';


/* ---------- 음악 ----------
   한 곡만 반복하려면 true. 사이트의 ↻ 버튼으로도 바꿀 수 있습니다. */

window.LOOP_ONE = false;


/* ---------- 아래는 보통 비워둡니다 ----------
   그림과 음악은 관리자 페이지(/admin)에서 올리는 게 편합니다.
   관리자 페이지를 안 쓰고 직접 적고 싶을 때만 씁니다.          */

window.GALLERY = [
  // { src: 'media/pic1.webp', caption: '설명' },
];

window.PLAYLIST = [
  // { title: '노래 제목', artist: '아티스트', youtube: 'https://youtu.be/xxxx' },
];
