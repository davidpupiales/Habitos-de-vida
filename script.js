document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn")
  const modal = document.getElementById("imageModal")
  const modalImg = document.getElementById("modalImage")
  const closeBtn = document.querySelector(".close-btn")

  // Añadir animación de pulso a los botones
  setInterval(() => {
    document.querySelector(".center").style.animation = "pulse 2s"
    setTimeout(() => {
      document.querySelector(".center").style.animation = ""
    }, 2000)
  }, 5000)

  // Función para abrir el modal con la imagen correspondiente
  function openModal(imageSrc) {
    modalImg.src = imageSrc
    modal.classList.add("show")
    document.body.style.overflow = "hidden" // Prevenir scroll
  }

  // Función para cerrar el modal
  function closeModal() {
    modal.classList.remove("show")
    setTimeout(() => {
      modal.style.display = "none"
    }, 300)
    document.body.style.overflow = "auto" // Restaurar scroll
  }

  // Asignar evento click a cada botón
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const imageSrc = this.getAttribute("data-image")
      modal.style.display = "flex"
      setTimeout(() => {
        openModal(imageSrc)
      }, 10)
    })
  })

  // Cerrar modal al hacer clic en el botón de cierre
  closeBtn.addEventListener("click", closeModal)

  // Cerrar modal al hacer clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Cerrar modal con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal()
    }
  })

  // Añadir animación de entrada a los botones
  buttons.forEach((button, index) => {
    button.style.opacity = "0"
    setTimeout(
      () => {
        button.style.transition = "opacity 0.5s ease, transform 0.3s ease"
        button.style.opacity = "1"
      },
      300 + index * 200,
    )
  })
})