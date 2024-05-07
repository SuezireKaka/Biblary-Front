import { Button, Table } from "react-bootstrap";
import Verse from "./Verse";
import OriginVerse from "./OriginVerse";

export default function ChapterDetails(data) {
    const {bible, book, chapter, versesList} = data?.data;

    return <Table>
        <thead>
            <tr>
                <th colSpan={3}>{bible?.name}</th>
            </tr>
            <tr>
                <th><Button>이전 장</Button></th>
                <th>{book?.fullName + " " + chapter + book?.chapterSuffix}</th>
                <th><Button>다음 장</Button></th>
            </tr>
        </thead>
        <tbody>
            {bible?.parsed
            ? versesList?.map(v => <OriginVerse verse={v}/>)
            : versesList?.map(v => <Verse verse={v}/>)}
        </tbody>
    </Table>
}