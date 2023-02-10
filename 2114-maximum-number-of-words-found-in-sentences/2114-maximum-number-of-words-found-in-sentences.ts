function mostWordsFound(sentences: string[]): number {
    let arr=[];
    sentences.map(e=>{
        arr.push(e.split(' ').length)
    });
    return Math.max(...arr)
};