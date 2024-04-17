import { useContext } from "react"
import { Form, InputGroup } from "react-bootstrap"
import BooksList from "./BooksList";
import BibleContext from "./BibleContextProvider";

export default function BiblesSelect(data) {
    const {nowBibleName, setBibleName} = useContext(BibleContext)

    function onChange(e, callback = f => f) {
        callback(e.target.value);
    }

    return <>
        <form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    성경
                </InputGroup.Text>
                <Form.Select onChange={(e) => { onChange(e, setBibleName) }}>
                    {data.data.map(d => <option key={d.name} value={d.name} selected={d.name === "개역개정"}>{d.name}</option>)}
                </Form.Select>
                <BooksList bibleName={nowBibleName}/>
            </InputGroup>
        </form>
    </>
}