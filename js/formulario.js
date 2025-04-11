document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    const modal = document.getElementById('modal');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const spinner = contactForm.querySelector('.spinner');
    const btnText = contactForm.querySelector('.btn-text');

    // Contador de caracteres para el textarea
    messageTextarea.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });

    // Envío del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar spinner y ocultar texto del botón
        spinner.classList.remove('hidden');
        btnText.style.opacity = '0';
        submitBtn.disabled = true;
        
        // Simular envío
        setTimeout(function() {
            // Mostrar modal
            modal.showModal();
            
            // Resetear formulario
            contactForm.reset();
            charCount.textContent = '0';
            
            // Restaurar botón
            spinner.classList.add('hidden');
            btnText.style.opacity = '1';
            submitBtn.disabled = false;
        }, 1500);
    });
});