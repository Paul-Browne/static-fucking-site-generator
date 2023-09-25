import * as prismic from '@prismicio/client'

// const serializer = {
//   paragraph: ({children}) => `<strong>${children}</strong>`
// }

export default (input, debug) => {
  // spans with inline "hyperlinks" that reference a Document return null...

  const refactoredInput = input.map(element => {
    if(element.spans && element.spans.length){
      const newSpans = element.spans.map(span => {
        if(span.type === "hyperlink" && span.data.link_type === "Document"){
          //data: { link_type: 'Web', url: 'https://www.skipperi.fi/app/academy' }
          span.data = {
            link_type: "Web",
            url: `/${span.data.lang}/${span.data.uid}`
          }
          return span
        }else{
          return span
        }
      })
      element.spans = newSpans;
      return element
    }else if(element.type === "image" && !element.alt){
      element.alt = "";
      return element
    }else{
      return element
    }
  })

  const output = prismic.asHTML(refactoredInput);

  if(debug){
    const origOutput = prismic.asHTML(input);
    const differentHTMLOutput = origOutput != output;
    console.log({
      input, refactoredInput, origOutput, output, differentHTMLOutput
    })
  }

  return output
}