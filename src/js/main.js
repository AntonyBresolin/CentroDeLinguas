const close_btn_notificacao = document.querySelector(".fechar-notificacao");
const notificacao_topo = document.querySelector(".topo");


close_btn_notificacao.addEventListener("click", function () {
  notificacao_topo.style.display = "none";
});