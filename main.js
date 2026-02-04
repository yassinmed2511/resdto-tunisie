fetch('/api/menu')
.then(res=>res.json())
.then(data=>{
  const container=document.getElementById('menuItems')
  data.forEach(i=>{
    container.innerHTML+=`<div>
      <h3>${i.name} - ${i.price} TND</h3>
      <p>${i.description}</p>
    </div>`
  })
})

document.getElementById('resForm').addEventListener('submit', async e=>{
  e.preventDefault()
  const inputs=e.target.querySelectorAll('input')
  await fetch('/api/reservation',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      name:inputs[0].value,
      phone:inputs[1].value,
      date:inputs[2].value,
      time:inputs[3].value,
      guests:inputs[4].value
    })
  })
  alert("Reservation envoyée")
})
