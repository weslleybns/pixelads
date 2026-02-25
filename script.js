function scrollToPlanos(){
document.getElementById('planos').scrollIntoView({behavior:'smooth'});
}

function whats(plano){
const numero="5511955793218";
const mensagem=`Olá, gostaria de saber mais sobre o plano ${plano}.`;
window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,"_blank");
}

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(q=>{
q.addEventListener('click',()=>{
q.closest('.faq-item').classList.toggle('active');
});
});

// Feedback auto-rotate
const feedbackSections = document.querySelectorAll('.feedback-section');

feedbackSections.forEach(section => {
  const cards = section.querySelectorAll('.testimonial-card');
  let current = 0;

  setInterval(() => {
    cards[current].classList.remove('active');
    current = (current + 1) % cards.length;
    cards[current].classList.add('active');
  }, 4000);
});