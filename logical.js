let ban = ['','','','','','','','',''];
let luot = 'x';
let dangchoi = true;
const khung = document.getElementById('board');
const trangthai = document.getElementById('status');
function taoban() {
  khung.innerHTML = '';
  ban.forEach((o, i) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.innerText = o;
    if (o === 'x') div.classList.add('filled-x');
    if (o === 'o') div.classList.add('filled-o');
    div.addEventListener('click', () => danh(i));
    khung.appendChild(div);
  });
}
function danh(i) {
  if (ban[i] !== '' || !dangchoi) return;
  ban[i] = luot;
  taoban();
  kiemtra();
  luot = luot === 'x' ? 'o' : 'x';
}
function kiemtra() {
  const thang = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let k of thang) {
    const [a, b, c] = k;
    if (ban[a] && ban[a] === ban[b] && ban[b] === ban[c]) {
      trangthai.innerText = `Nguoi choi ${ban[a].toUpperCase()} thang!`;
      dangchoi = false;
      return;
    }
  }
  if (!ban.includes('')) {
    trangthai.innerText = 'Hoa!';
    dangchoi = false;
  }
}
function choilai() {
  ban = ['','','','','','','','',''];
  luot = 'x';
  dangchoi = true;
  trangthai.innerText = '';
  taoban();
}
taoban();
