import { useParams } from "react-router"
import strongsGreekDictionary from "strongs/greek/strongs-greek-dictionary"
import strongsHebrewDictionary from "strongs/hebrew/strongs-hebrew-dictionary"

export default function StrongDetails() {
    const {code} = useParams()

    let isGreek = code.startsWith("G")

    const dict = isGreek
        ? strongsGreekDictionary
        : strongsHebrewDictionary

    const contents = dict[code]

    return <div>
        <h2>{code}</h2>
        {Object.keys(contents).map(k => <ul>{k + " : " + contents[k]}</ul>)}
    </div>
}