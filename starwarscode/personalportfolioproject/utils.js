function removeChildren(element) {
    while (element.firstCHild) {
        element.removeChild(element.firstChild)
    }
}