import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { StethoscopeIcon } from 'lucide-react'
  
export default function TopicInput({setTopicValue,setDifficultyLevel }) {
  return (
    <div className="mt-10 w-full flex flex-col">
        <h2 className="font-semibold">
          Enter topic or paste the content for which you want to generate study materials </h2>

        <Textarea placeholder="Start writting here.."  className="mt-2 w-full"  onChange={(event)=>{setTopicValue(event.target.value); console.log(event.target.value)}}/>

        <h2 className="font-semibold mt-5 mb-3 w-full">Select the difficult Level</h2>
        <Select onValueChange={(value)=>{setDifficultyLevel(value); console.log(value+"===========")}}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Diffculty Level" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="modernate">Modernate</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
      </Select>




    </div>
  )
}
