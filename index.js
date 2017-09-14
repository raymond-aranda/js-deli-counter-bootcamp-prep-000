var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {

  for (var i = 0; i < katzDeliLine.length; i++) {
  katzDeliLine.push(person)

  }
  return `Welcome, ${person}. You are number ${katzDeliLine.indexOf(person)} in line.`
}
