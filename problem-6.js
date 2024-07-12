var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bigName = friends[0];
friends.forEach((friend) => {
    if(friend.length > bigName.length)
        bigName = friend;
});

console.log(bigName);