const numberField = document.querySelector('#NumberField')
const message = document.querySelector('#Message')
const timesTableBody = document.querySelector('#TimesTableBody')
const operations = []
const handleChange = e => {
  if (isNaN(e.target.value)) {
    message.style.display = 'inline-block'
    message.classList.remove('message--warning')
    message.classList.add('message--error')
    message.textContent = 'Not a number!'
  } else if (e.target.value.trim() === '') {
    message.style.display = 'inline-block'
    message.classList.remove('message--error')
    message.classList.add('message--warning')
    message.textContent = 'Please insert a number!'
  } else {
    message.style.display = 'none'
    message.classList.remove('message--warning')
    message.classList.remove('message--error')
    message.textContent = ''
    operations.length = 0
    for (let count = 1; count <= 10; count++) {
      operations.push({
        formula: `${count} x ${e.target.value}`,
        result: count * e.target.value
      })
    }
    timesTableBody.innerHTML = ''
    operations.forEach(operation => {
      const timesTableRow = document.createElement('tr')
      for (const value of Object.values(operation)) {
        const timesTableCell = document.createElement('td')
        const timesTableCellContent = document.createTextNode(`${value}`)
        timesTableCell.appendChild(timesTableCellContent)
        timesTableRow.appendChild(timesTableCell)
      }
      timesTableBody.appendChild(timesTableRow)
    })
  }
}
numberField.addEventListener('change', handleChange)
