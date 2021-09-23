//104
function test(testValue, fn, testerFn) {
    if (testerFn(fn(testValue))) {
        return fn(testValue)
    }
    return testValue;
}