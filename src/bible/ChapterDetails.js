import { Table } from "react-bootstrap";

export default function ChapterDetails(data) {
    const {bible, book, chapter, versesList} = data.data;

    return <Table>
        <thead>
            <tr>
                <th colSpan={2}>{bible?.name}</th>
                <th colSpan={2}>{book?.fullName + " " + chapter + book?.chapterSuffix}</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </Table>
}