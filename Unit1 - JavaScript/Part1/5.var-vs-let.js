"use strict";

// Try using var and click on paragraphs!
for(let i = 1; i <= 10; i++) {
    const p = document.createElement("p");
    p.append(`Paragraph ${i}`);
    p.addEventListener('click', e => {
        console.log(`Click on paragraph ${i}`);
    });
    document.body.append(p);
}
