// Function to iterate over each element in a collection and apply a callback function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;
}
// Function to create a new array by applying a callback function to each element in a collection
function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(element, index, array) {
        result.push(callback(element, index, array));
    });
    return result;
}
function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
        if (acc === undefined) {
            acc = collection[0];
            collection = collection.slice(1);
        }
        for (let i = 0; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        const values = Object.values(collection);
        const keys = Object.keys(collection);
        if (acc === undefined) {
            acc = values[0];
            values.slice(1);
        }
        for (let i = 0; i < values.length; i++) {
            acc = callback(acc, values[i], keys[i], collection);
        }
    }
    return acc;
}


// Function to find the first element in a collection that passes a truth test
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
}

// Function to filter a collection based on a predicate function
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(element, index, array) {
        if (predicate(element, index, array)) {
            result.push(element);
        }
    });
    return result;
}
// Function to return the number of values in a collection
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        let count = 0;
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }
}
// Function to return the first element of an array or the first n elements if specified
function myFirst(array, n) {
    if (n) {
        return array.slice(0, n);
    } else {
        return array[0];
    }
}

// Function to return the last element of an array or the last n elements if specified
function myLast(array, n) {
    if (n) {
        return array.slice(-n);
    } else {
        return array[array.length - 1];
    }
}

// Function to retrieve all the names of an object's own enumerable properties
function myKeys(object) {
    return Object.keys(object);
}

// Function to retrieve all the values of an object's own properties
function myValues(object) {
    return Object.values(object);
}
