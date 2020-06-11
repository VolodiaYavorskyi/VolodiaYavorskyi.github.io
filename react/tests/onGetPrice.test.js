const onGetPrice = require('./onGetPrice');

test('check valid output', () => {
    const res1 = onGetPrice("", "");
    const res2 = onGetPrice("smth", "");
    const res3 = onGetPrice("", "smth");
    const res4 = onGetPrice("smth", "smth");
    const res5 = onGetPrice("1", "234");
    const res6 = onGetPrice("smth", "5");
    const res7 = onGetPrice("666", "smth");

    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
    console.log(res6);
    console.log(res7);

    expect(res1).toBe("");

    expect(res2).toBe("");

    expect(res3).toBe("");

    expect(parseInt(res4)).toBeGreaterThanOrEqual(0);

    expect(parseInt(res4)).toBeLessThanOrEqual(100);

    expect(parseInt(res5)).toBeGreaterThanOrEqual(0);

    expect(parseInt(res5)).toBeLessThanOrEqual(100);

    expect(parseInt(res6)).toBeGreaterThanOrEqual(0);

    expect(parseInt(res6)).toBeLessThanOrEqual(100);

    expect(parseInt(res7)).toBeGreaterThanOrEqual(0);

    expect(parseInt(res7)).toBeLessThanOrEqual(100);
});