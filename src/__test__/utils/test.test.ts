describe("Test jest", () => {
  test("1+1 = 2", () => {
    const a: number = 1;
    const expected: number = 2;
    expect(a + a).toEqual(expected); //2
  });
});
