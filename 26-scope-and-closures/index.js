/*************************************************************/
//  LEXICAL SCOPING
function scope() {
  var name = 'Murd3rf4ce'

  function displayName() {
    console.log(name)
  }

  displayName()
}

scope()

/*************************************************************/

function whomstIsBrad() {
  let name = 'Brad'
  {
    let name = 'Bradfort'
    // name = 'Bradfort'
  }
  console.log(name)
}

whomstIsBrad()

/*************************************************************/
// from the mozilla docs
// THX MOZILLA 😍
function makeFunc() {
  var name = 'Mozilla'
  function displayName() {
    alert(name)
  }
  return displayName
}

var myFunc = makeFunc()
myFunc()
