export default function FlipAllCards(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].closed = true;
	}
	return array;
}
