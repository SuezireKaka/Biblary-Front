import { useContext, useState, useEffect } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import BibleContext from "./BibleContextProvider";

export default function BooksSelect(data) {
    const {nowBibleName} = useContext(BibleContext)

    const [nowBook, setBook] = useState(
        {pos: 0, fullName: "", shortName: nowBibleName === "ORG" ? "마" : "창", chapterNumber: 50, newTestament: false});
    const [nowChapter, setChapter] = useState(1);

    function onChange(e, callback = f => f) {
        callback(JSON.parse(e.target.value));
    }

    useEffect(() => {setBook({pos: 0, fullName: "", shortName: nowBibleName === "ORG" ? "마" : "창", chapterNumber: 50, newTestament: false})}, [nowBibleName])

    return <>
        <InputGroup.Text id="basic-addon1">
            서
        </InputGroup.Text>
        <Form.Select onChange={(e) => { onChange(e, setBook) }}>
            {data.data.map(d => <option key={d.fullName} value={JSON.stringify(d)}>{d.fullName}</option>)}
        </Form.Select>
        <InputGroup.Text id="basic-addon1">
            장
        </InputGroup.Text>
        <Form.Select onChange={(e) => { onChange(e, setChapter) }}>
            {Array.from({length: nowBook.chapterNumber}, (_, i) => i + 1)
                .map(i => <option key={i} value={i}>{i + (nowBook.shortName === "시" ? "편" : "장")}</option>)}
        </Form.Select>
        <Link to={`/bibles/${nowBibleName}/${nowBook.shortName}/${nowChapter}`}>
            <Button>Move</Button>
        </Link>
    </>
}