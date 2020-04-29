const { Stack, peek, isEmpty, display } = require('./Stack')

const starTrek = new Stack()

function main() {

    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")    

    peek(starTrek)

    isEmpty(starTrek)

    display(starTrek)

    starTrek.pop()
    starTrek.pop()

    display(starTrek)

}

main()
