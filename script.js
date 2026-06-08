/* ================================================
   PSPSR — Sistema de Prontuário Eletrônico
   Script principal
   ================================================ */

// ===== DATE =====
const days = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
const now = new Date();
document.getElementById('currentDate').textContent =
  days[now.getDay()].substring(0,3) + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();

// ===== NAVIGATION =====
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.nav-item').forEach(n => {
      if (n.textContent.trim().toLowerCase().includes(
        id === 'dashboard'      ? 'dash'     :
        id === 'pacientes'      ? 'paciente' :
        id === 'evolucao'       ? 'evolu'    :
        id === 'profissionais'  ? 'profis'   : 'config'
      )) n.classList.add('active');
    });
  }
  closeSidebar();
  window.scrollTo(0, 0);
}

// ===== SIDEBAR =====
function toggleSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('sidebarOverlay');
  s.classList.toggle('open');
  o.classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

// ===== MODALS =====
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) closeModal(this.id);
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
  }
});

// ===== TABS =====
function switchTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// ===== CHIPS =====
function toggleChip(el) {
  el.classList.toggle('selected');
}

// ===== NOTIFICATION =====
let notifTimer;

function showNotification(msg, type) {
  const n = document.getElementById('notification');
  const m = document.getElementById('notificationMsg');
  m.textContent = msg;
  n.className = 'notification' + (type === 'success' ? ' success' : '');
  clearTimeout(notifTimer);
  setTimeout(() => n.classList.add('show'), 10);
  notifTimer = setTimeout(() => n.classList.remove('show'), 3200);
}

// ===== SAVE ACTIONS =====
function salvarPaciente() {
  closeModal('novoPacienteModal');
  showNotification('Paciente cadastrado com sucesso!', 'success');
}

function salvarEvolucao() {
  closeModal('novaEvolucaoModal');
  showNotification('Evolução registrada com sucesso!', 'success');
}

function salvarProfissional() {
  closeModal('novoProfissionalModal');
  showNotification('Profissional cadastrado com sucesso!', 'success');
}

// ===== FILTER =====
function filtrarPacientes(q) {
  const rows = document.querySelectorAll('#pacientesBody tr');
  q = q.toLowerCase();
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
}

function filtrarStatus(status) {
  const rows = document.querySelectorAll('#pacientesBody tr');
  rows.forEach(row => {
    if (!status) { row.style.display = ''; return; }
    const badge = row.querySelector('.badge');
    if (!badge) return;
    const txt = badge.textContent.toLowerCase();
    row.style.display =
      (status === 'ativo'   && txt.includes('ativo') && !txt.includes('in')) ||
      (status === 'inativo' && txt.includes('inativo')) ||
      (status === 'espera'  && txt.includes('espera'))
      ? '' : 'none';
  });
}