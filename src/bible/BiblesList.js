import { Fetch } from "../framework/fetch/Fetch"
import { BibleContextProvider } from "./BibleContextProvider"
import BiblesSelect from "./BiblesSelect"

export default function BiblesList() {
  const BIBLELIST_URL = `/bible/anonymous/listAllBibles`

  const renderSuccess = (response) => {
    let nowData = response?.data ? response.data : response
    return <BibleContextProvider>
      <BiblesSelect data={nowData}/>
    </BibleContextProvider>
  }

  return <Fetch uri = {BIBLELIST_URL} renderSuccess = {renderSuccess}/>
}
