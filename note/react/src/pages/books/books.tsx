import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useSerachBooks } from './serach'

export default () => {
	const [query, setQuery] = useState('')
	const [pageNumber, setPageNumber] = useState(1)

	const {loading, books, hasMore, error} = useSerachBooks(query, pageNumber)


	const observer = useRef()

	const lastBooksEelmentRef = useCallback((node) => {
		if (loading) return
		if (observer.current) {
			observer.current.disconnect()
		}
		// console.log('node', node)
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && hasMore) {
				console.log('visiable')
				setPageNumber( (prveNumber) => prveNumber + 1)
			}
		})
		if (node) observer.current.observe(node)
		console.log(node, 'node')
	}, [loading, hasMore])
	
	return (
		<div>
			<input
				type='text'
				value={query}
				onChange={(e) => {
				setQuery(e.target.value)
					setPageNumber(1)
				}}
			>

			</input>
			{
				books.map( (book: any, index: number) => {
					if (books.length === index + 1) {
						return <div key={ book } ref={ lastBooksEelmentRef }>{ book}</div>
					} else {
						return <div key={ book }>{ book}</div>
					}
				})
			}
			<div>{ loading && 'Loading...'}</div>
			<div>{ error && 'Error'}</div>
		</div>
	)
}