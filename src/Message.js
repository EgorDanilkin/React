

function Message( {author, text} ) {
  return (
    <div>
      <p>{author}</p>
      <p>{text}</p>
    </div>
  );
}

export default Message;