
export function sliceVideoTitle(title) {
  var titleLen = title.length;
  if(titleLen >= 12) {
    title = title.substr(0, 12) + "...";
    return title;
  }
  return title;
}