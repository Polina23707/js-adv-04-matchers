export default function sort(characters) {
  return characters.sort((a, b) => b['health'] - a['health']);
}
