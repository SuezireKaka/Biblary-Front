import { Fetch } from "../fetch/Fetch"

export default function Home() {
  const TEST_URL = `/bible/anonymous/getChapter/NIV/마/5`

  const renderSuccess = (response) => {
    let data = response?.data ? response.data : response
    console.log(data)
    return <pre>{JSON.stringify(data)}</pre>
  }

  return <Fetch uri = {TEST_URL} renderSuccess = {renderSuccess}/>
}
