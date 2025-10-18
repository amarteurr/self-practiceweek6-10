 const buttons = document.querySelectorAll("button");
      const box = document.getElementById("box");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const color = button.dataset.color;
          box.style.backgroundColor = color;
        });
      });   