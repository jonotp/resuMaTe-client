const pageHeight = 1123;

setTimeout(() => {
  ManuallyAddPageBreak();
  AddHeightToSidePane();
}, 300);

function AddHeightToSidePane() {
  const sidepane = document.getElementsByClassName("sidepane")[0];
  if (sidepane === undefined) return;

  const rect = sidepane.getBoundingClientRect();
  const top = rect.top;
  const bottom = rect.bottom;
  var newPageHeight = pageHeight;
  while (bottom > newPageHeight) {
    newPageHeight += pageHeight;
  }

  const newHeight = newPageHeight - top;
  sidepane.style.height = newHeight + "px";
}

function ManuallyAddPageBreak() {
  if (
    document.getElementsByTagName("body")[0].getBoundingClientRect().bottom <
    pageHeight
  )
    return;
  var experience = document.getElementsByClassName("experience")[0];
  if (experience.getBoundingClientRect().bottom > pageHeight) {
    var paragraphs = experience.getElementsByClassName("paragraph");
    var paragraph = GetBrokenElement(paragraphs, pageHeight);
    var listItems = paragraph.getElementsByTagName("li");
    var brokenListItem = GetBrokenElement(listItems, pageHeight);
    BreakPageBeforeElement(brokenListItem);
  } else {
    var sections = document.getElementsByClassName("section");
    var brokenSection = GetBrokenElement(sections, pageHeight);
    BreakPageBeforeElement(brokenSection);
  }
}

function GetBrokenElement(elements, pageHeight) {
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].getBoundingClientRect().bottom > pageHeight) {
      return elements[i];
    }
  }
}

function BreakPageBeforeElement(element) {
  if (element === undefined) return;
  const top = element.getBoundingClientRect().top;
  const margin = pageHeight - top + 24;

  element.style.marginTop = margin + "px";
}

var dpi = {
  v: 0,
  get: function (noCache) {
    if (noCache || dpi.v == 0) {
      e = document.body.appendChild(document.createElement("DIV"));
      e.style.width = "1in";
      e.style.padding = "0";
      dpi.v = e.offsetWidth;
      e.parentNode.removeChild(e);
    }
    return dpi.v;
  },
};
