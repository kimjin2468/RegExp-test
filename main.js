const str = `
010-1234-5678
theasd@gmail.com
https://www.omdbapi.com/?apikey=eaef506c&s=frozen
The quick brown fox jumps over the lazy dog
abxczxc
`


console.log(
    str.match(/(?<=@).{1,}/g)
)

