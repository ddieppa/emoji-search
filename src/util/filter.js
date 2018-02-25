import emojiList from './../emojiList.json'

export default (value, limit) => {
    const keyword = value.toLowerCase()
    return emojiList.filter(emoji => {
      if (emoji.title.toLowerCase().includes(keyword)) {
        return true;
      }

      if (emoji.keywords.toLowerCase().includes(keyword)) {
        return true;
      }

      return false;
    }).slice(0, limit)
}