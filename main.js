onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener("click", (e) => {
  for (let i = 0; i < 8; i++) {  // número de chispas por clic
    const spark = document.createElement("div");
    spark.classList.add("spark");
    document.body.appendChild(spark);

    // posición inicial en el clic
    spark.style.left = `${e.pageX}px`;
    spark.style.top = `${e.pageY}px`;

    // movimiento aleatorio como fuegos artificiales
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20; // entre 20px y 100px
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    spark.animate(
      [
        { transform: `translate(0,0) scale(1)`, opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
      ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    // eliminar después de la animación
    setTimeout(() => spark.remove(), 800);
  }
});
