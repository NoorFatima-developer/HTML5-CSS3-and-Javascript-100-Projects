const btn = document.querySelector("#emoji");


    const emojis = [
        "😆",
        "😅",
        "🤣",
        "😂",
        "😀",
        "🤑",
        "🤨",
        "🙂",
        "😊",
        "😗",
        "😛",
        "😏",
        "🤥",
        "😴",
        "🥺",
        "😧",
        "😇",
        "😳",
        "🙃",
        "🥴",
        "🧐",
        "🤨",
        "😒",
        "🤔",
        "🤭",
        "🥰",
        "🤐",
        "👀",
        "🤔",
        "🤪",
        "🥲",
        "😃",
        "😁",
        "😬",
      ];

      btn.addEventListener("click", () => {
        btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
      })