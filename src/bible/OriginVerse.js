import { Table } from "react-bootstrap"
import StrongCode from "./StrongCode";

export default function OriginVerse({verse = {verse : 0, contents : ""}}) {
    return <tr>
        <td>{verse.verse}</td>
        <td style={{textAlign : "left"}} colSpan={2}>{strongParse(verse.contents)}</td>
    </tr>
}

function strongParse(contents) {
    const splitedVerseArray = contents.split("  ")

    const parsedArray = splitedVerseArray.map(sv => {
        sv = sv.trim();
        let data = sv.split(" ");
        let grammaInfo = data[1];

        let strongInfo = data[0];

        let isGreek = strongInfo.includes("G")

        let {originForm, strongCode} = isGreek
            ? parsePiece(strongInfo, "G")
            : parsePiece(strongInfo, "H")

        return {originForm, isGreek, strongCode, grammaInfo}
    })

    return <Table>
        <tbody>
            {parsedArray.map(p => <td>
                <tr>{p.originForm}</tr>
                <StrongCode code={p.strongCode}/>
                <tr>{p.grammaInfo}</tr>
            </td>)}
        </tbody>
    </Table>
}

function parsePiece(strongInfo, mark) {
    let parsedStrong = strongInfo.split(mark);
    let originForm = parsedStrong[0];
    let strongCode = mark + parsedStrong[1];
    return {originForm, strongCode}
}