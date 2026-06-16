// WanaDecrypt0r 2.0 Simulation - Educational purposes only

// ---- Countdown timers ----
// Timer 1: payment raise deadline (3 days from now)
// Timer 2: file loss deadline (7 days from now)

function getDeadline(daysFromNow) {
  var d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d;
}

var deadline1 = getDeadline(3);
var deadline2 = getDeadline(7);

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

function formatCountdown(target) {
  var now = new Date();
  var diff = target - now;
  if (diff <= 0) return "00:00:00:00";
  var days    = Math.floor(diff / 86400000);
  var hours   = Math.floor((diff % 86400000) / 3600000);
  var minutes = Math.floor((diff % 3600000)  / 60000);
  var seconds = Math.floor((diff % 60000)    / 1000);
  return pad(days) + ":" + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function formatDate(d) {
  var mo = d.getMonth() + 1;
  var da = d.getDate();
  var yr = d.getFullYear();
  var hr = d.getHours();
  var mi = d.getMinutes();
  return mo + "/" + da + "/" + yr + " " + pad(hr) + ":" + pad(mi) + ":52";
}

function updateTimers() {
  var t1 = document.getElementById("timer1");
  var t2 = document.getElementById("timer2");
  if (t1) t1.textContent = formatCountdown(deadline1);
  if (t2) t2.textContent = formatCountdown(deadline2);
  var d1el = document.getElementById("deadline1-date");
  var d2el = document.getElementById("deadline2-date");
  if (d1el) d1el.textContent = formatDate(deadline1);
  if (d2el) d2el.textContent = formatDate(deadline2);
}

setInterval(updateTimers, 1000);
updateTimers();

// ---- Language rotation for the ticker ----
var translations = [
  { lang: "English",    text: "Ooops, your files have been encrypted!" },
  { lang: "Spanish",    text: "\u00A1Vaya! tus archivos han sido cifrados!" },
  { lang: "Chinese",    text: "\u555f\u52a8\uff0c\u60a8\u7684\u6587\u4ef6\u5df2\u88ab\u52a0\u5bc6\uff01" },
  { lang: "French",     text: "Oups, vos fichiers ont \u00e9t\u00e9 chiffr\u00e9s!" },
  { lang: "German",     text: "Hoppla, Ihre Dateien wurden verschl\u00fcsselt!" },
  { lang: "Russian",    text: "\u0423\u0432\u044b, \u0432\u0430\u0448\u0438 \u0444\u0430\u0439\u043b\u044b \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u044b!" },
  { lang: "Japanese",   text: "\u3084\u3042\u3001\u30d5\u30a1\u30a4\u30eb\u304c\u6697\u53f7\u5316\u3055\u308c\u307e\u3057\u305f\uff01" },
  { lang: "Korean",     text: "\uc774\ub7f0! \ub2f9\uc2e0\uc758 \ud30c\uc77c\uc774 \uc554\ud638\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4!" },
  { lang: "Italian",    text: "Ops, i tuoi file sono stati crittografati!" },
  { lang: "Portuguese", text: "Ops, seus arquivos foram criptografados!" },
  { lang: "Arabic",     text: "\u0639\u0630\u0631\u0627\u064b\u060c \u0644\u0642\u062f \u062a\u0645 \u062a\u0634\u0641\u064a\u0631 \u0645\u0644\u0641\u0627\u062a\u0643!" },
  { lang: "Turkish",    text: "Hay aksi, dosyalar\u0131n\u0131z \u015fifrenlendi!" },
  { lang: "Dutch",      text: "Oeps, uw bestanden zijn versleuteld!" },
  { lang: "Polish",     text: "Ups, twoje pliki zosta\u0142y zaszyfrowane!" },
  { lang: "Vietnamese", text: "R\u1ea5t ti\u1ebfc, c\u00e1c t\u1ec7p c\u1ee7a b\u1ea1n \u0111\u00e3 b\u1ecb m\u00e3 h\u00f3a!" },
  { lang: "Indonesian", text: "Aduh, file-file Anda telah terenkripsi!" },
  { lang: "Thai",       text: "\u0e42\u0e2d\u0e49\u0e2d! \u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e16\u0e39\u0e01\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2b\u0e31\u0e2a\u0e41\u0e25\u0e49\u0e27!" },
  { lang: "Hebrew",     text: "\u05d0\u05d5\u05d7, \u05d4\u05e7\u05d1\u05e6\u05d9\u05dd \u05e9\u05dc\u05da \u05d4\u05d5\u05e6\u05e4\u05e0\u05d5!" },
  { lang: "Greek",      text: "\u039f\u03cd\u03c0\u03c2, \u03c4\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 \u03c3\u03b1\u03c2 \u03ad\u03c7\u03bf\u03c5\u03bd \u03ba\u03c1\u03c5\u03c0\u03c4\u03bf\u03b3\u03c1\u03b1\u03c6\u03b7\u03b8\u03b5\u03af!" },
  { lang: "Czech",      text: "Jejda, va\u0161e soubory byly za\u0161ifrov\u00e1ny!" },
  { lang: "Hungarian",  text: "J\u00e9, a f\u00e1jljai titkos\u00edt\u00e1sra ker\u00fcltek!" },
  { lang: "Romanian",   text: "Ups, fi\u0219ierele dvs. au fost criptate!" },
  { lang: "Ukrainian",  text: "\u041e\u0445, \u0432\u0430\u0448\u0456 \u0444\u0430\u0439\u043b\u0438 \u0431\u0443\u043b\u043e \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043e!" },
  { lang: "Swedish",    text: "Oj, dina filer har krypterats!" },
  { lang: "Danish",     text: "Ups, dine filer er blevet krypteret!" },
  { lang: "Finnish",    text: "Hups, tiedostosi on salattu!" },
  { lang: "Norwegian",  text: "Oi, filene dine er kryptert!" },
  { lang: "Bulgarian",  text: "\u041e\u043f\u0430, \u0432\u0430\u0448\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u043e\u0432\u0435 \u0431\u044f\u0445\u0430 \u043a\u0440\u0438\u043f\u0442\u0438\u0440\u0430\u043d\u0438!" },
  { lang: "Croatian",   text: "Ups, va\u0161e datoteke su \u0161ifrirane!" },
  { lang: "Slovak",     text: "Oops, va\u0161e s\u00fabory boli za\u0161ifrovan\u00e9!" },
];

var langIndex = 0;

function rotateLang() {
  langIndex = (langIndex + 1) % translations.length;
  var el = document.getElementById("lang-translated");
  if (!el) return;
  var entry = translations[langIndex];
  // Re-trigger animation by replacing the element content
  el.style.animation = "none";
  el.offsetHeight; // reflow
  el.style.animation = "";
  el.textContent = "(" + entry.lang + ") " + entry.text;
}

setInterval(rotateLang, 2200);

// ---- Copy button ----
document.addEventListener("DOMContentLoaded", function () {
  var copyBtn = document.getElementById("copy-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var addr = document.getElementById("btc-address");
      if (addr) {
        var txt = addr.textContent;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(txt).then(function () {
            copyBtn.textContent = "Copied!";
            setTimeout(function () { copyBtn.textContent = "Copy"; }, 1500);
          });
        } else {
          copyBtn.textContent = "Copied!";
          setTimeout(function () { copyBtn.textContent = "Copy"; }, 1500);
        }
      }
    });
  }

  // Check payment button
  var checkBtn = document.getElementById("check-payment-btn");
  if (checkBtn) {
    checkBtn.addEventListener("click", function () {
      alert("Payment not detected. Please wait 30 minutes after sending and try again.");
    });
  }

  // Decrypt button
  var decryptBtn = document.getElementById("decrypt-btn");
  if (decryptBtn) {
    decryptBtn.addEventListener("click", function () {
      alert("Error: Decryption key not received. Please make payment first.");
    });
  }

  // Language dropdown
  var dropdown = document.getElementById("lang-select");
  if (dropdown) {
    dropdown.addEventListener("change", function () {
      // Simulate language switch (just shows a note)
    });
  }

  // Matrix canvas animation on left panel
  var canvas = document.getElementById("matrix-canvas");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    canvas.width  = canvas.offsetWidth  || 218;
    canvas.height = canvas.offsetHeight || 420;
    var cols   = Math.floor(canvas.width / 12);
    var drops  = [];
    var chars  = "01アイウエオカキクケコサシスセソタチツテト0110ABCDEF".split("");
    for (var i = 0; i < cols; i++) drops[i] = Math.random() * canvas.height / 14;

    function drawMatrix() {
      ctx.fillStyle = "rgba(20, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#a00";
      ctx.font = "11px monospace";
      for (var c = 0; c < cols; c++) {
        var ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, c * 12, drops[c] * 14);
        if (drops[c] * 14 > canvas.height && Math.random() > 0.975) {
          drops[c] = 0;
        }
        drops[c] += 0.5;
      }
    }

    setInterval(drawMatrix, 80);
  }
});
