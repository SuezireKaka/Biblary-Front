import { useParams } from "react-router"
import { Fetch } from "../framework/fetch/Fetch"

export default function ChapterSkin() {
    const {bibleName, bookShortName, chapterNum} = useParams()

    const BIBLELIST_URL = `/bible/anonymous/getChapter/${bibleName}/${bookShortName}/${chapterNum}`
  
    const renderSuccess = (response) => {
      let nowData = response?.data ? response.data : response
      return <p>{JSON.stringify(nowData)}</p>
    }
  
    return <Fetch uri = {BIBLELIST_URL} renderSuccess = {renderSuccess}/>
  }