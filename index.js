function downloadFile() {
  var url = 'files/ойда!.pdf';

  var link = document.createElement('a');
  link.href = url;
  link.download = url.split('/').pop();
  link.target = '_blank';

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}