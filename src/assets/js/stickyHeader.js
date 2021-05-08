export const stickyHeader = () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", (event) => {
    const headerHight = header.clientHeight;
    const scrollDown = window.scrollY;

    if (scrollDown > headerHight) {
      header.classList.add("sticky");
      setTimeout(() => header.classList.add("visible"), 150);
    } else {
      header.classList.remove("sticky", "visible");
    }
  });
};
