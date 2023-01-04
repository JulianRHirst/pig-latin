import { pigify } from "./piglatin";

describe("test pigify function", () => {
  it('should return "" for "" input', () => {
    expect(pigify("")).toBe("");
  });

  it('should return "igPay atinlay siay oolcay" for "Pig latin is cool" input', () => {
    expect(pigify("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });

  it('should return "elloHay orldway !" for "Hello world !" input', () => {
    expect(pigify("Hello world !")).toBe("elloHay orldway !");
  });
});
