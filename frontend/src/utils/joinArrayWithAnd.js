export function joinArrayWithAnd(array) {
    return array.slice(0, -1).join(", ") + " and " + array.at(-1);
}

console.log(joinArrayWithAnd(["hi", "bye", "hello"]))