import { useContext } from "react"
import { Form, InputGroup } from "react-bootstrap"
import BooksList from "./BooksList";
import BibleContext from "./BibleContextProvider";
import onChange from "../util/onChange";

export default function BiblesSelect({data}) {
    const {nowBibleName, setBibleName} = useContext(BibleContext)

    return <>
        <form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                    성경
                </InputGroup.Text>
                <Form.Select onChange={(e) => { onChange(e, false, setBibleName) }}>
                    {data.map(d => <option key={d.name} value={d.name} selected={d.name === "개역개정"}>{d.name}</option>)}
                </Form.Select>
                <BooksList bibleName={nowBibleName}/>
            </InputGroup>
        </form>
    </>
}