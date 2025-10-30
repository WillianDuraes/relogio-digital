document.addEventListener("DOMContentLoaded", () => {
  const horasEl = document.getElementById("horas");
  const minutosEl = document.getElementById("minutos");
  const segundosEl = document.getElementById("segundos");
  const ampmEl = document.querySelector(".ampm");
  const formatoSwitch = document.getElementById("formatoHora");

  function atualizarRelogio() {
    const data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    let ampm = "AM";

    if (!formatoSwitch.checked) {
      ampm = h >= 12 ? "PM" : "AM";
      h = h % 12;
      h = h ? h : 12;
      ampmEl.style.display = "flex";
    } else {
      ampmEl.style.display = "none";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    horasEl.textContent = h;
    minutosEl.textContent = m;
    segundosEl.textContent = s;
    ampmEl.textContent = ampm;
  }

  formatoSwitch.addEventListener("change", atualizarRelogio);

  setInterval(atualizarRelogio, 1000);
  atualizarRelogio();
});
