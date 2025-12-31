import { useEffect, useState  } from "react"


export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    const encodedText = encodeURIComponent(threeFirstWords)

    fetch('https://cataas.com/cat?json=true')
      .then(res => res.json())
      .then(() => {
        setImageUrl(
         `https://cataas.com/cat/says/${encodedText}?size=50&color=red`
        )

      })
  }, [fact])

  return { imageUrl }
}