import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"

export default function BooksSelect(data) {
    const [nowBook, setBook] = useState({pos: 0, fullName: "", shortName: "창", chapterNumber: 50, newTestament: false});
    const [nowChapter, setChapter] = useState(1);

    function onChange(e, callback = f => f) {
        callback(JSON.parse(e.target.value));
    }

    function onChange(e, callback = f => f) {
        callback(JSON.parse(e.target.value));
    }

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
                .map(i => <option key={i} value={i}>{i + "장"}</option>)}
        </Form.Select>
        <Button>Move</Button>
    </>
}