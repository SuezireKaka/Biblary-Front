import { Fetch } from "../framework/fetch/Fetch"
import BiblesSelect from "./BiblesSelect"

export default function BiblesList() {
  const BIBLELIST_URL = `/bible/anonymous/listAllBibles`

  const renderSuccess = (response) => {
    let nowData = response?.data ? response.data : response
    return <BiblesSelect data={nowData}/>
  }

  return <Fetch uri = {BIBLELIST_URL} renderSuccess = {renderSuccess}/>
}
