

export default function Question({ object }) {
    return (
        <div >
            <h1 data-testid="question">
                {object.question}
            </h1>
            <h1 data-testid="answer">
                {object.answer}
            </h1>
        </div>
    )
}