class Sorter {
  constructor() {
    // your implementation
    this.main=[];

  }

  add(element) {
    // your implementation
    this.main.push(element);
  }

  at(index) {
    // your implementation
return this.main[index];
  }

  get length() {
    // your implementation
    return this.main.length
  }

  toArray() {
    // your implementation
    return this.main;
  }

  sort(indices) {
    // your implementation
   var main=this.main;
   var copy=[];
   for(var i=0;i<main.length;i++){
       for(var j=0;j<indices.length;j++){
        if(indices[j]==i){
               copy.push(main[i]);
        }
       }
   }

  copy.sort();
   for (var i=0; i<indices.length;i++){
    main[indices[i]]=copy[i];
}
return main;

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;