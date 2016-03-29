describe("An object component", function () {
  it("creates a definition list from an object", function () {
    var object = {"foo": "bar"};
    var objectComponent = ObjectComponent(object);
    expect(objectComponent.classList).toContain("object");
  });
});
