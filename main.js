onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener("click", (e) => {
  for (let i = 0; i < 8; i++) {  
    const spark = document.createElement("div");
    spark.classList.add("spark");
    document.body.appendChild(spark);

    // posición inicial
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;

    // dispersión aleatoria
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;
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

    setTimeout(() => spark.remove(), 800);
  }
});

