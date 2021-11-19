export default function getMinimumBribes(arr) {
    const TOO_CHAOTIC = 'Too chaotic'
    let bribes = 0

    for(let currentPos = 0; currentPos < arr.length; currentPos++) {
        // getting original position using 0 indexing
        const originalPos = arr[currentPos] - 1
        
        // diff = how far person has moved
        const diff = originalPos - currentPos
        // if person has moved more than 2 spots, then impossible
        if(diff > 2) return console.log(TOO_CHAOTIC)

        // take care of persons that have been bribed
        if(diff <= 0) {
            // check each person starting from one person ahead of original pos
            // up until current position
            for(let i = Math.max(0, originalPos - 1); i < currentPos; i++) {
                const startPosOfForwardPerson = arr[i] - 1
                // if a person in front of current person started BEHIND current person, 
                // then current person must have been bribed by them
                if(startPosOfForwardPerson > originalPos){
                    bribes++
                }
            }
        }
    }

    console.log(bribes)
}
