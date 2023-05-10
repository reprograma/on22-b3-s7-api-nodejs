const superagent = require('superagent')

const findChar = async (code) => {
    const response = await superagent.get(`https://swapi.dev/api/people/${code}`)
    console.log(`Answer: ${JSON.stringify*(response.body)}`)
}

findChar(1)
findChar(2)