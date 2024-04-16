import { Fetch } from "../framework/fetch/Fetch"
import BooksSelect from "./BooksSelect"

export default function BooksList(bibleName = "개역개정") {
  const BIBLELIST_URL = `/bible/anonymous/listAllBooksOf/${bibleName.bibleName}`

  const renderSuccess = (response) => {
    let nowData = response?.data ? response.data : response
    return <BooksSelect data={nowData}/>
  }

  return <Fetch uri = {BIBLELIST_URL} renderSuccess = {renderSuccess}/>
}
