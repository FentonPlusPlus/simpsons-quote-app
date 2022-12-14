type QuoteDetails = {
    quote: string;
}

function QuoteList(props: QuoteDetails) {
    const { quote } = props;

  return (
    <p className="quote">{quote}</p>
  )
}

export default QuoteList
