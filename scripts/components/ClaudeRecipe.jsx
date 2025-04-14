import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
export default function ClaudeRecipe(props){
  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  )
}