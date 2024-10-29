function confirmarWhatsApp() {
    let confirmar = confirm("Você será redirecionado para o WhatsApp. Deseja continuar?");
    if (confirmar) {
        // Substitua o número pelo número correto da empresa no formato internacional
        window.open("https://wa.me/5575982478340", "_blank");
    }
}
