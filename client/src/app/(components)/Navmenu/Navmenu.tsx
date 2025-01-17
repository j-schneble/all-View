// import React, {
//     Fragment,
//     MouseEventHandler,
//     useEffect,
//     useMemo,
//     useRef,
//     useState,
//   } from 'react'
//   import { Navigation } from '../../navigator/cmd'
//   import { Dialog, Transition } from '@headlessui/react'
//   import { useTheme } from 'next-themes'
//   import { useRouter } from 'next/router'

//   import { cn } from '../../lib/classnames'



//   export default function CommandMenu({
//     opened,
//     setOpened,
//   }: {
//     opened: boolean
//     setOpened: (opened: boolean) => void
//   }) {
//     const [isOpen, setIsOpen] = useState(false)
//     const { resolvedTheme, setTheme } = useTheme()


//     const [results] = useState(Navigation)
//     const [input, setInput] = useState('')

//     const [highlightedTab, setHighlightedTab] = useState<HTMLElement | null>(null)
//     const [isHoveredFromNull, setIsHoveredFromNull] = useState(true)
//     const [transform, setTransform] = useState('translate(0, 0')
//     const parentRef = useRef<HTMLUListElement>(null)
//     const highlightRef = useRef<HTMLDivElement>(null)

//     const cardStyle =
//       'px-2 py-3 cursor-pointer relative flex items-center gap-2 text-base hover:highlight hover:!bg-transparent rounded-xl transition-colors duration-300'

//     const placeholder = useMemo(() => {
//       if (highlightedTab) {
//         return highlightedTab.textContent
//       }
//       if (input.length === 0) {
//         return 'Type a command or search...'
//       }
//     }, [highlightedTab, input])

//     const searchResults = useMemo(() => {
//       const answer = []

//       const myFilter = results.filter(result =>
//         result.name.toLowerCase().includes(input.toLowerCase())
//       )

//       let last = ''
//       for (let i = 0; i < myFilter.length; i++) {
//         const result = myFilter[i]
//         if (answer.length === 0) {
//           if (result.section === 'Themes') {

//             if (result.keywords !== resolvedTheme) {
//               answer.push(result.section)

//             } else if (result.keywords! === 'system') {
//               answer.push(result.section)
//             }
//           } else {
//             answer.push(result.section)
//           }
//           last = result.section
//         } else {
//           if (last !== result.section) {
//             answer.push(result.section)
//             last = result.section
//           }
//         }

//         if (result.section === 'Themes') {

//           if (result.keywords! !== resolvedTheme) {
//             answer.push(result)
//           } else if (result.keywords === 'system') {
//             answer.push(result)
//           }
//         } else {
//           answer.push(result)
//         }
//       }

//       return answer
//     }, [input, resolvedTheme, results])

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setInput(event.target.value)
//       // set highlighted tab to the third child
//       // 0 is the highlight
//       // 1 is the group
//       if (parentRef.current) {
//         const children = parentRef.current.children
//         if (children.length > 1) {
//           changeHighlight(children[2] as HTMLElement)
//         }
//       }
//     }

//     const handleReset = () => {
//       setInput('')
//       setHighlightedTab(null)
//       setIsHoveredFromNull(true)
//       setOpened(false)
//     }

//     const handleEnter = () => {
//       if (parentRef.current) {
//         const children = parentRef.current.children
//         if (children.length > 1) {
//           changeHighlight(children[2] as HTMLElement)
//         }
//       }
//     }

//     const handleMouseOver = (
//       event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//     ) => {

//       const parent = parentRef.current!
//       if (!parent) {
//         return
//       }

//       const node = event.target as HTMLElement
//       if (!node) {
//         return
//       }

//       setIsHoveredFromNull(!highlightedTab)
//       setHighlightedTab(node)

//       const tabBoundingBox = node.getBoundingClientRect()
//       const parentBoundingBox = parent.getBoundingClientRect()
//       const highlightOffset = tabBoundingBox.top - parentBoundingBox.top

//       // exit early if event triggered by children
//       if (node.className === cardStyle) {
//         setTransform(`translate(0, ${highlightOffset + parent.scrollTop}px)`)
//       }
//     }

//     const changeHighlight = (node: Element) => {

//       const parent = parentRef.current!
//       if (!parent) {
//         return
//       }

//       if (!node) {
//         return
//       }

//       setIsHoveredFromNull(!highlightedTab)

//       const tabBoundingBox = node.getBoundingClientRect()
//       const parentBoundingBox = parent.getBoundingClientRect()
//       const highlightOffset = tabBoundingBox.top - parentBoundingBox.top

//       if (node.className === cardStyle) {
//         setHighlightedTab(node as HTMLElement)

//         setTransform(`translate(0, ${highlightOffset + parent.scrollTop}px)`)
//         node.scrollIntoView({
//           behavior: 'smooth',
//           block: 'center',
//           inline: 'center',
//         })
//       }
//     }

//     useEffect(() => {
//       const handler = (event: {
//         key: string
//         preventDefault: () => void
//         metaKey: boolean
//       }) => {
//         if (event.key === 'ArrowUp' && isOpen) {
//           event.preventDefault()
//           if (highlightedTab && highlightedTab.previousElementSibling) {
//             if (highlightedTab.previousElementSibling.className === cardStyle) {
//               changeHighlight(highlightedTab.previousElementSibling)
//             } else if (
//               highlightedTab.previousElementSibling.previousElementSibling
//             ) {
//               changeHighlight(
//                 highlightedTab.previousElementSibling.previousElementSibling
//               )
//             }
//           }
//         } else if (event.key === 'ArrowDown' && isOpen) {
//           event.preventDefault()
//           if (highlightedTab && highlightedTab.nextElementSibling) {
//             if (highlightedTab.nextElementSibling.className === cardStyle) {
//               changeHighlight(highlightedTab.nextElementSibling)
//             } else if (highlightedTab.nextElementSibling.nextElementSibling) {
//               changeHighlight(
//                 highlightedTab.nextElementSibling.nextElementSibling
//               )
//             }
//           }
//         } else if (event.key === 'Enter' && isOpen && highlightedTab) {
//           highlightedTab?.click()
//         } else if (event.key === 'k' && event.metaKey) {
//           event.preventDefault()
//           setIsOpen(!isOpen)
//         }
//       }

//       window.addEventListener('keydown', handler)
//       return () => window.removeEventListener('keydown', handler)
//     })

//     useEffect(() => {
//       setIsOpen(opened)
//     }, [opened])

//     return (
//       <Transition
//         show={isOpen}
//         as={Fragment}

//       >
//         <Dialog
//         open={isOpen}
//           onClose={() => setIsOpen(false)}


//         >


//           <Transition
//             enter='duration-100 ease-out'
//             enterFrom='opacity-0 scale-95'
//             enterTo='opacity-100 scale-100'
//             leave='duration-100 ease-in'
//             leaveFrom='opacity-100 scale-100'
//             leaveTo='opacity-0 scale-95'

//             as={Fragment}
//           >
//             <div
//               className='
//                 relative
//                 bg-black filter-blur
//                 rounded-md shadow-2xl dark:shadow-gray-900
//                 ring-1 ring-black/10 dark:ring-gray-700/50
//                 flex flex-col'

//             >
//               <div
//                 className='border-b border-black/10 dark:border-gray-700/50'
//               >

//               </div>
//               <div>
//                 {!searchResults.length && (
//                   <p className='p-2 text-secondary'>No results found.</p>
//                 )}
//                 {searchResults.length > 0 && (
//                   <ul
//                     ref={parentRef}
//                     className={cn(
//                       'relative',
//                       'mt-3 mb-3.5 mx-3',
//                       'overflow-auto max-h-[32vh]',
//                       'text-tertiary'
//                     )}
//                   >

//                       <div


//                       />


//                     {searchResults.map((result, index) => {
//                       if (typeof result === 'string') {
//                         return (
//                           <span key={index} className='text-xs text-quaternary'>
//                             {result}
//                           </span>
//                         )
//                       }
//                       if (result.section === 'Navigation') {
//                         return (
//                           <li
//                             key={index}
//                             className={cn(
//                               cardStyle,
//                               result.name === highlightedTab?.textContent
//                                 ? 'text-primary '
//                                 : ''
//                             )}
//                             onMouseOver={handleMouseOver as MouseEventHandler}
//                             onMouseLeave={() => setIsHoveredFromNull(false)}
//                             onClick={() => {


//                               setIsOpen(false)
//                             }}
//                           >

//                             <a>{result.name}</a>
//                           </li>
//                         )
//                       }





//                     })}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </Transition>
//         </Dialog>
//       </Transition>
//     )
//   }
