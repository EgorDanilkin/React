
function MessageForm( {inputText, inputAuthor, sendMessage} ) {
  return (
    <>
      <form action="#">
        <p>Сообщение</p>
        <input type="text" ref={inputText}/>
        <p>Имя</p>
        <input type="text" ref={inputAuthor}/>
        <button onClick={sendMessage}>Отправить</button>
      </form>
    </>
  )
}

export default MessageForm;