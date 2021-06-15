import { JSDOM } from "jsdom";
import { setAnimation } from "../../utils/setAnimation";

const dom: Document = new JSDOM(`<body></body>`).window.document;

describe("Set propiety css test", () => {
  test("Set prop on dom element", () => {
    const object: HTMLDivElement = dom.createElement("div");
    const styleRule: string = "transform";
    const styleValue: string = "translate(-100%)";

    setAnimation(styleRule, styleValue, object);

    expect(object.style[styleRule]).toBe(styleValue);
  });
});
