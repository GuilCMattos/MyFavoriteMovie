function toggleTrailer() { 
  let content = document.getElementById('content')
  let trailer = document.getElementById('trailer')
  content.style.display = 'none'
  trailer.style.display = 'inline-block'
  
}

function backToPage() { 
  let content = document.getElementById('content')
  let trailer = document.getElementById('trailer')
  content.style.display = 'inline-block'
  trailer.style.display = 'none'
}