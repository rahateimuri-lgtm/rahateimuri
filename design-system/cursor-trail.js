/* =====================================================================
   RAHA DESIGN SYSTEM — SPARKLE CURSOR TRAIL
   Vanilla JS, zero dependencies. Spawns small outlined sticker dots that
   follow the pointer and fade out. Respects prefers-reduced-motion and a
   per-site on/off flag. Pointer (mouse) only — never fires on touch.

   USAGE:
     <script src="/js/cursor-trail.js" defer></script>
   To disable globally, set:  window.RAHA_CURSOR_TRAIL = false;  before load.
   ===================================================================== */
(function () {
  'use strict';

  if (typeof window === 'undefined') return;
  if (window.RAHA_CURSOR_TRAIL === false) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var COLORS = ['var(--accent)', 'var(--accent-2)', 'var(--lime)', 'var(--pink)'];
  var MIN_INTERVAL = 42; // ms between dots
  var LIFE = 640;        // ms dot lifespan

  function init() {
    var layer = document.createElement('div');
    layer.setAttribute('aria-hidden', 'true');
    layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9000';
    document.body.appendChild(layer);

    var last = 0;
    window.addEventListener('pointermove', function (e) {
      if (e.pointerType && e.pointerType !== 'mouse') return; // skip touch/pen
      var now = Date.now();
      if (now - last < MIN_INTERVAL) return;
      last = now;

      var size = 7 + Math.random() * 9;
      var color = COLORS[(Math.random() * COLORS.length) | 0];
      var dot = document.createElement('div');
      dot.style.cssText =
        'position:fixed;left:' + e.clientX + 'px;top:' + e.clientY + 'px;' +
        'width:' + size + 'px;height:' + size + 'px;border-radius:50%;' +
        'background:' + color + ';border:2px solid var(--ink);' +
        'transform:translate(-50%,-50%);pointer-events:none;' +
        'transition:opacity .6s ease, transform .6s ease';
      layer.appendChild(dot);

      requestAnimationFrame(function () {
        dot.style.opacity = '0';
        dot.style.transform = 'translate(-50%,-50%) scale(.2) rotate(50deg)';
      });
      setTimeout(function () { dot.remove(); }, LIFE);
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
