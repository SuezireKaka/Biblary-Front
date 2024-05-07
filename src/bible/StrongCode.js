export default function StrongCode({code = ""}) {
    return <tr onClick={() => showDetails(code)}>
        {code}
    </tr>
}

function showDetails(code) {
    window.open("/strongCode/" + code, "_blank", "noopener, noreferrer");
}