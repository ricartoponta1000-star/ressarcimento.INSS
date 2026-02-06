const DB_KEY = 'linksDB';
let links = JSON.parse(localStorage.getItem(DB_KEY)) || [];

const btn   = document.getElementById('instalar');
const area  = document.getElementById('links');
const salvar= document.getElementById('salvar');

area.value = links.join('\n');
btn.dataset.href = links[0] || '#';

salvar.onclick = () => {
  links = area.value.split('\n').filter(l => l.trim());
  localStorage.setItem(DB_KEY, JSON.stringify(links));
  btn.dataset.href = links[0] || '#';
  alert('Lista salva!');
};

btn.onclick = e => {
  if (!links.length) { e.preventDefault(); alert('Adicione links.'); return; }
  window.open(btn.dataset.href, '_blank');
};
