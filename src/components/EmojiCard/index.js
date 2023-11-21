// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-items">
      <button className="emoji-button" type="button" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
