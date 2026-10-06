(function(){
  var overlay = document.getElementById('nl-overlay');
  var closeBtn = document.getElementById('nl-close');
  function showPopup(){ overlay.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  function hidePopup(){ overlay.style.display = 'none'; document.body.style.overflow = ''; }
  setTimeout(showPopup, 5000);
  closeBtn.addEventListener('click', hidePopup);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) hidePopup(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') hidePopup(); });
})();
