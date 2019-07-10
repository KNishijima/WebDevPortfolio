let my_dog = {
    coat_type: 'fluffy',
    breed: 'Husky',
    color: 'White',
    size: 'medium',
    bark: function bark() {
        console.log('woof');
    },
    describe_yourself: function describe_yourself() {
        console.log("Hello, I am a " + this.breed);
    }
}

console.log(my_dog.coat_type);
my_dog.bark();
my_dog.describe_yourself();