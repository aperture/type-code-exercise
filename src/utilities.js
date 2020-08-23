function stripParagraphs(html) {
  let res = html;
  res = res.replace(/<p>/g, '');
  res = res.replace(/<\/p>/g, '\n\n');
  return res;
}

export default {stripParagraphs}
