
function getElementWidth (content, padding, border) {
    content = parseFloat(content);
    padding = parseFloat(padding);
    border = parseFloat(border);
    const result =  content + (padding * 2) + (border * 2);
    return result
}
console.log(getElementWidth("50px", "8px", "4px"));