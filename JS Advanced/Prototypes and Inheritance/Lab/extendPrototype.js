function extendProrotype(Class) {
    // TODO:
    Class.prototype.species='Human'
    Class.prototype.toSpeciesString=function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
//Class Hierarchy
