const addCommas = require("./addCommas");

describe("#addCommas", () => {
  /** 'addCommas' should be a function */
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it should return a string", () =>{
    expect(typeof addCommas(1)).toEqual("string")
  })

  test("it should return a positive number as a string with commas", () =>{
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  })

  test("it should return a string with no commas", () =>{
    expect(addCommas(6)).toBe("6");
    expect(addCommas(678)).toBe("678");
  })

  test("it should return a negative number as a string with '-' and commas", () =>{
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-5678)).toBe("-5,678");
  })
});
