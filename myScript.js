let counter = 0;

module.exports =  {
    incrementCouter() {
        counter = counter + 1;
    },

    getCounter () {
        return counter;
    }
};