// Put your code here

const locationNamesArr = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All Place Names")

for (let name of locationNamesArr) {
    console.log(name)
}

console.log("")

const filteredLocationArr = locationNamesArr.filter(location => location.startsWith("The"))

console.log("'The' Place Names")
for (let name of filteredLocationArr) {
    console.log(name)
}