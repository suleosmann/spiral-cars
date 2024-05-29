import React, { useState } from 'react'
import { faqsData } from '@/data/faqsData'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

const Page = () => {
  const faqData = faqsData
  const [clickedQuestion, setClickedQuestion] = useState<number | null>(null)

  const handleClick = (id: number) => {
    setClickedQuestion(clickedQuestion === id ? null : id)
  }

  return (
    <div className='my-12 mx-6'>
      <h1 className='text-4xl font-bold'>Frequently Asked Questions</h1>
      <div className='w-full my-2'>
        {faqData.map((data) => (
          <React.Fragment key={data.id}>
            <div className='border-b-2 py-2 border-gray-300 flex justify-between cursor-pointer font-semibold' onClick={() => handleClick(data.id)}>
              {data.question}
              <span>
                {clickedQuestion === data.id ? <FaCaretUp /> : <FaCaretDown />}
              </span>
            </div>
            {clickedQuestion === data.id && (
              <div>{data.answer}</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Page
