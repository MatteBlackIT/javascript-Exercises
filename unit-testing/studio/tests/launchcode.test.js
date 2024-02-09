// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("return 'nonprofit' as key value of organization", function(){
    let keyval = launchcode.organization;
    expect(keyval).toBe('nonprofit');
  })

  test('returns "X!" when divisible by Y', function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!');
    expect(launchcode.launchOutput(3)).toBe('Code!');
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  })

  test('return "Jeff" as key value of executiveDirector', function() {
    let keyVal = launchcode.executiveDirector;
    expect(keyVal).toBe("Jeff")
  })

  test('return "100%" as key value of percentageCoolEmployees', function() {
    let keyVal = launchcode.percentageCoolEmployees;
    expect(keyVal).toBe(100)
  })

  test('return "[val1, val2, val3]" as key value of programsOffered', function(){
    let keyVal = launchcode.programsOffered;
    let index = launchcode.programsOffered.length;
    expect(keyVal[0]).toBe("Web Development")
    expect(keyVal[1]).toBe("Data Analysis")
    expect(keyVal[2]).toBe("Liftoff")
    expect(index).toBe(3)
  })

  test('returns "X!" when divisible by Y', function(){
    expect(launchcode.launchOutput(2 && 3)).toBe('LaunchCode!')
  })
});
