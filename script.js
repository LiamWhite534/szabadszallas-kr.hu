function show(id) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

console.log("🚔 ULTRA 2.0 SYSTEM ONLINE");
