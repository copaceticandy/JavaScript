//105

function isNumber(entry) {
    return !isNaN(entry) && Number(entry) === entry && isFinite(entry);
}