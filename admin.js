document.getElementById('menuForm').addEventListener('submit', async e=>{
  e.preventDefault()
  const i=e.target.querySelectorAll('input')
  await fetch('/api/menu',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      name:i[0].value,
      category:i[1].value,
      price:i[2].value,
      description:i[3].value,
      image:i[4].value
    })
  })
  alert("Plat ajouté")
})
