function getHighestIndex(entry, arr) {
    if (typeof entry === "string") {
        for (let i = 0; i < arr.length; i++) {
            if (entry.charCodeAt(0) > arr[i].charCodeAt(0)) {
                continue;
            } else if (entry.charCodeAt(0) < arr[i].charCodeAt(0)) {
                return i;
            } else if (entry === arr[i]) {
                continue;
            } else {
                for (let j = 0; j < entry.length; j++) {
                    var charCode;
                    if (Number.isNaN(arr[i].charCodeAt(j))) {
                        break;
                    } else { charCode = arr[i].charCodeAt(j) }
                    if (j === (entry.length - 1) && arr[i].length > entry.length) {
                        if (entry[j].charCodeAt(0) > charCode) {
                            break;
                        } else {
                            return i;
                        }
                    }
                    if (entry[j].charCodeAt(0) > charCode) {
                        break;
                    } else if (entry[j].charCodeAt(0) === charCode) {
                        continue;
                    } else {
                        return i;
                    }
                }
            }
        }
        return arr.length;
    }
}

var str = ["helios", "hell", "hello", "helter", "higgildy", "homer", "piggildy"]

console.log(getHighestIndex("higgilde", str))