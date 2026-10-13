const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".course-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;
    cards.forEach(card => {
      card.style.display = value === "all" || card.dataset.category === value ? "" : "none";
    });
  });
});

const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".course-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.dataset.course;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Rahmat! Demo forma ishladi. Backend/Telegram bot ulanishi keyingi bosqichda qo'shiladi.";
  e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach(section => observer.observe(section));

// Year dynamic update
document.getElementById('year').textContent = new Date().getFullYear();

// Support Modal Logic
const supportBtn = document.getElementById('supportBtn');
const supportModal = document.getElementById('supportModal');
const supportOverlay = document.getElementById('supportOverlay');
const supportCloseBtn = document.getElementById('supportCloseBtn');
const copyCardBtn = document.getElementById('copyCardBtn');
const cardNumber = document.getElementById('cardNumber');

function openSupportModal() {
  supportModal.classList.add('active');
  supportModal.setAttribute('aria-hidden', 'false');
}

function closeSupportModal() {
  supportModal.classList.remove('active');
  supportModal.setAttribute('aria-hidden', 'true');
}

if (supportBtn) supportBtn.addEventListener('click', openSupportModal);
if (supportOverlay) supportOverlay.addEventListener('click', closeSupportModal);
if (supportCloseBtn) supportCloseBtn.addEventListener('click', closeSupportModal);

if (copyCardBtn && cardNumber) {
  copyCardBtn.addEventListener('click', () => {
    const rawCardNumber = cardNumber.textContent.replace(/\s+/g, '');
    navigator.clipboard.writeText(rawCardNumber).then(() => {
      const originalText = copyCardBtn.textContent;
      copyCardBtn.textContent = 'Nusxalandi! ✓';
      copyCardBtn.style.background = '#10b981';
      setTimeout(() => {
        copyCardBtn.textContent = originalText;
        copyCardBtn.style.background = '#4f46e5';
      }, 2000);
    });
  });
}