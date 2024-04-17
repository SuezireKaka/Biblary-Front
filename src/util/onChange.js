export default function onChange(e, callback = f => f) {
    callback(e.target.value);
}