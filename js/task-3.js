
function getElementWidth (content, padding, border) {
    content = parseFloat(content);
    padding = parseFloat(padding);
    border = parseFloat(border);
    result =  content + (padding * 2) + (border * 2);
    return result
}
console.log(getElementWidth("60px", "12px", "8.5px"));
