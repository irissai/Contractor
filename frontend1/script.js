document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  const content = document.getElementById("content");

  function loadPage(href) {
    fetch(href)
      .then((response) => response.text())
      .then((html) => {
        // ดึงเฉพาะเนื้อหาที่อยู่ใน <main> ของหน้าอื่น
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const newContent = doc.querySelector("main");
        content.innerHTML = newContent ? newContent.innerHTML : "<p>ไม่พบเนื้อหา</p>";
      })
      .catch((err) => {
        content.innerHTML = "<p>ไม่สามารถโหลดหน้าได้</p>";
        console.error(err);
      });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      loadPage(href);

      // เปลี่ยน active class
      document.querySelectorAll("nav ul li").forEach((li) => li.classList.remove("active"));
      this.parentElement.classList.add("active");

      // เปลี่ยน URL โดยไม่โหลดหน้า
      history.pushState(null, "", href);
    });
  });

  // โหลดหน้าตาม URL ถ้าเข้ามาครั้งแรก
  const initialPage = window.location.pathname.split("/").pop() || "index.html";
  loadPage(initialPage);
});
