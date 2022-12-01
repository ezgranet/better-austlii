function numberOrderedList(ol) {
ol.classList.add('paragraphs');
let liCount = 0 ;
ol.childNodes.forEach(function (node) {
if (node.nodeName !== 'LI') {
return;
}
liCount++;
if (node.hasAttribute('value')) {
            liCount = parseInt(node.getAttribute('value'), 10);
        }
        node.innerHTML = '<span class="paragraph_number"><b>[' + ( liCount ) + ']&nbsp;</b></span>' + node.innerHTML;
});
}
let olNodes = Array.from(document.getElementsByTagName('ol'));
olNodes.forEach(ol => numberOrderedList(ol));