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
