function animateProgress(id, percent) {
    const bar = document.getElementById(`${id}`);
    const progress = bar.children[1];
    const barWidth = getComputedStyle(bar).getPropertyValue("width").slice(0, -2);

    progress.style.width = barWidth * percent / 100 + "px";
    
    setTimeout(() => {
        progress.style.width = "0";
        setTimeout(() => {
            progress.style.width = barWidth * percent / 100 + "px";
        }, 5000);
    }, 5000);
}

animateProgress("html", 95);
animateProgress("css", 95);
animateProgress("sass", 95);
animateProgress("js", 90);
animateProgress("react", 90);

window.onresize = () => {
    animateProgress("html", 95);
    animateProgress("css", 95);
    animateProgress("sass", 95);
    animateProgress("js", 90);
    animateProgress("react", 90);
}
