//object is hash table,key must be a string
//Map is a hash table with any data type as key
//Set only stores undulicated values

class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }
  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }
  get(key) {
    let address = this._hash(key)
    //     console.log(address)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1]
      }
    }
    return undefined
  }
  keys() {
    const keysArray = []
    for (let i of this.data) {
      if (i) {
        for (let j of i) {
          keysArray.push(j[0])
        }
      }
    }
    //     for (let i = 0; i < this.data.length; i++) {
    //       if (this.data[i]) {
    //         for (let j = 0; j < this.data[i].length; j++) {
    //           keysArray.push(this.data[i][j][0])
    //         }
    //       }
    //     }
    return keysArray
  }
}
const myHashTable = new HashTable(2)
myHashTable.set('grapes', 10000)
myHashTable.set('惠', 10)
myHashTable.set('kkk惠', 480)
myHashTable.set('k惠', 480)

// myHashTable.set('grapes', 1000)
// console.log(myHashTable.set('apples', 500))
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.data)
console.log(myHashTable.keys())
