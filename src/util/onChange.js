export default function onChange(e, json, callback = f => f) {
    callback(json ? JSON.parse(e.target.value) : e.target.value);
}