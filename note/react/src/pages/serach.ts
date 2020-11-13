import { useEffect, useState} from 'react'
import axios, { Canceler } from 'axios'

export function useSerachBooks(query: string, pageNumber: number) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
	}, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel: Canceler
        axios({
            method: 'GET',
            url: "https://openlibrary.org/search/subjects.json",
            params: {
                q: query,
                page: pageNumber
            },
            cancelToken: new axios.CancelToken( c => cancel = c)
        }).then( res => {
            console.log(res, res.data, '------')
            // setBooks( (preBooks) => {
            //     return [...new Set([...preBooks, ...res.data.docs.map( (b: any) => b.name)])]
            // })
            const arr = res.data.docs.map((b: any) => b.name)
            console.log(arr, 'arr')
            setBooks(books.concat(...arr))
            setHasMore(res.data.docs.length > 0)
        }).catch((e) => {
            if (axios.isCancel(e)) return
            setError(false)
        }).finally(() => {
            setLoading(false)
        })

        return () => cancel()
    }, [query, pageNumber])


    return {
        loading,
        error,
        books,
        hasMore
    }
}