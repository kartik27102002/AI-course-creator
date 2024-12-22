import React from 'react'

function ChapterList({coursedata}) {
    const chap=coursedata?.courseLayout?.chapters;
    console.log("============="+coursedata?.courseLayout?.chapters?.length+"=========================")
  return (
    <div className="mt-5 ">
      <h2 className="font-medium text-2xl mb-3">Chapters</h2>
      {
        chap && chap.map((items,index)=>(
            <div key={index}  className="flex gap-5 items-center p-4 border shadow-md mb-2 border-l-8 cursor-pointer">
                <h1 className="text-2xl">{items.chapterEmoji}</h1>
                <div>
                    <h2 className="font-bold mb-1">{items.chapterTitle}</h2>
                    <p className="text-gray-600"> {items.chapterSummary}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default ChapterList
