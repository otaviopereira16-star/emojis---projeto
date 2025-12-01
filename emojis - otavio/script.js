const stars = document.querySelectorAll(".fa-star");
constemojiStrip = document.querySelector(".emoji-strip");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        atualizarVotacao(index);
    });
});

function atualizarVotacao(index) {
    star.forEach((star, i) => {
        if (i <= index) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });

    const offset = index * 60;
    emojiStrip.style.trasform = `translateX(-${offset}px)`;
}
