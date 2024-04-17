export default function Verse({verse = {verse : 0, contents : ""}}) {
    return <tr><td>{verse.verse}</td><td style={{textAlign : "left"}} colSpan={2}>{verse.contents}</td></tr>
}