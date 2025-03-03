function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const name = getQueryParam("name");

// Danh sách mã code + màu trái tim
const codes = {
    "Ngô Đình Gia An": { code: "", color: "red" },
    "Võ Nguyễn Thuỳ Dương": { code: "9569", color: "blue" },
    "Phạm Thanh Hà": { code: "7510", color: "green" },
    "Nguyễn Gia Hân (6/10)": { code: "1835", color: "yellow" },
    "Nguyễn Gia Hân (1/9)": { code: "4062", color: "purple" },
    "Ngô Thuỵ Hà Khanh": { code: "", color: "orange" },
    "Nguyễn Như Vân Khánh": { code: "1007", color: "pink" },
    "Huỳnh Nguyễn Gia Linh": { code: "", color: "cyan" },
    "Phạm Khánh Linh": { code: "", color: "magenta" },
    "Ngô Huỳnh Xuân Mai": { code:"3840", color: "lime" },
    "Nguyễn Cát Khánh Mai": { code: "7777", color: "gold" },
    "Khương Thuỵ Ánh Minh": { code: "5436", color: "coral" },
    "Lý Quế Minh": { code: "2745", color: "turquoise" },
    "Phan Trịnh Ái Như": { code: "", color: "indigo" },
    "Trần Nguyễn Uyên Phương": { code: "", color: "salmon" },
    "Nguyễn Hoàng Mai Thảo": { code: "", color: "teal" },
    "Lê Ngọc Trân": { code: "", color: "violet" },
    "Tăng Tuệ Văn": { code: "1952", color: "navy" }
};

document.getElementById("verifyBtn").addEventListener("click", function () {
    const inputCode = document.getElementById("codeInput").value;

    if (name && codes[name] && codes[name].code === inputCode) {
        document.getElementById("greeting").innerText = `Chúc mừng, ${decodeURIComponent(name)}! Chúc bạn một ngày tuyệt vời! 🎉`;
        document.getElementById("greeting").style.display = "block";
        document.getElementById("backLink").style.display = "block";
        document.getElementById("codeInput").style.display = "none";
        document.getElementById("verifyBtn").style.display = "none";
        document.getElementById("errorMessage").innerText = "";

        startFireworks();
        startBalloons();
        startHearts(codes[name].color);
    } else {
        document.getElementById("errorMessage").innerText = "Mã code không đúng, vui lòng thử lại!";
    }
});

// Pháo hoa
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        const radius = Math.random() * 4 + 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fill();
    }

    setInterval(createFirework, 100);
}

// Bóng bay
function startBalloons() {
    createFloatingEffect("balloon", "balloon-container");
}

// Trái tim (màu riêng)
function startHearts(color) {
    createFloatingEffect("heart", "heart-container", color);
}

function createFloatingEffect(className, containerId, color = null) {
    const container = document.getElementById(containerId);
    function createElement() {
        const el = document.createElement("div");
        el.classList.add(className);
        el.style.left = Math.random() * 100 + "vw";
        if (color) el.style.backgroundColor = color; // Set màu cho trái tim
        container.appendChild(el);
        setTimeout(() => el.remove(), 5000);
    }
    setInterval(createElement, 500);
}
