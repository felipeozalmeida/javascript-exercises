// receive age input from 15 people
const people = []
const ageGroups = {
  first: [],
  second: [],
  third: [],
  fourth: [],
  fifth: []
}
for (let index = 0; index < 5; index++) {
  // save person data in array
  const person = {
    age: 0
  }
  person.age = prompt('How many years old?')
  people.push(person)

  // classify each person based on age group
  if (person.age <= 15) {
    ageGroups.first.push(person)
  } else if (person.age >= 16 && person.age <= 30) {
    ageGroups.second.push(person)
  } else if (person.age >= 31 && person.age <= 45) {
    ageGroups.third.push(person)
  } else if (person.age >= 46 && person.age <= 60) {
    ageGroups.fourth.push(person)
  } else {
    ageGroups.fifth.push(person)
  }
}

// save each age group as a key-value array
const entries = Object.entries(ageGroups)

// show no. of people in each age group
let output = '<table><thead><tr><th>Group</th><th>No. People</th></tr></thead><tbody>'
for (const [key, value] of entries) {
  output += `<tr><td>${key}</td><td>${value.length}</td></tr>`
}
output += '</tbody></table><br>'
document.write(output)

// show percentage of people in first and last age groups
output = '<table><thead><tr><th>Group</th><th>%</th></tr></thead><tbody>'
output += `<tr><td>First</td><td>${(entries[0][1].length / people.length) * 100}</td></tr>`
output += `<tr><td>Last</td><td>${(entries[entries.length - 1][1].length / people.length) * 100}</td></tr>`
output += '</tbody></table><br>'
document.write(output)
